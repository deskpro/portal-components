// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { describe, expect, it } from '@jest/globals'
import { FileUploadInput } from '../../../../src/Components/Inputs/FileUpload'

// Minimal props for FileUploadInput
const baseProps = {
  id:        'test-upload',
  multiple:  true,
  url:       '/upload',
  csrfToken: 'token',
  label:     'Attachments',
  onChange:  () => {},
  i18n:      {},
  files:     [],
  maxSize:   Infinity,
}

// Helper: render into a real DOM container so browser-level events work
function renderIntoDocument(element: React.ReactElement) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  act(() => {
    ReactDOM.render(element, container)
  })
  return {
    container,
    unmount() {
      act(() => {
        ReactDOM.unmountComponentAtNode(container)
      })
      document.body.removeChild(container)
    },
  }
}

// Count actual click events dispatched on a DOM node
function countInputClicks(container: HTMLElement): { count: number; cleanup: () => void } {
  const input = container.querySelector<HTMLInputElement>('input[type="file"]')
  if (!input) throw new Error('No file input found')
  let count = 0
  const handler = (e: Event) => {
    // Prevent browser from trying to open a real file dialog in test env
    e.preventDefault()
    count++
  }
  input.addEventListener('click', handler)
  return {
    get count() { return count },
    cleanup() {
      input.removeEventListener('click', handler)
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Sanity: rendering
// ─────────────────────────────────────────────────────────────────────────────

describe('FileUploadInput — rendering', () => {
  it('renders a file input element', () => {
    const { container, unmount } = renderIntoDocument(<FileUploadInput {...baseProps} />)
    const input = container.querySelector('input[type="file"]')
    expect(input).not.toBeNull()
    unmount()
  })

  it('shows "Choose files" text when multiple=true', () => {
    const { container, unmount } = renderIntoDocument(<FileUploadInput {...baseProps} multiple={true} />)
    const label = container.querySelector('button.choose')
    expect(label).not.toBeNull()
    expect(label!.textContent).toContain('Choose files')
    unmount()
  })

  it('shows "Choose a file" text when multiple=false', () => {
    const { container, unmount } = renderIntoDocument(<FileUploadInput {...baseProps} multiple={false} />)
    const label = container.querySelector('button.choose')
    expect(label).not.toBeNull()
    expect(label!.textContent).toContain('Choose a file')
    unmount()
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Bug: double file-dialog on mobile — clicking .choose label must open the
// file dialog exactly ONCE.
//
// Root cause: inner label has htmlFor={id}, sitting inside the react-dropzone
// root div that spreads getRootProps(). One tap fires:
//   1. native label→input activation  → input.click() #1
//   2. click bubbles to dropzone root onClick → openFileDialog() → input.click() #2
//
// With the bug present this test counts 2 input click events and FAILS.
// After the fix (htmlFor removed from .choose label) it counts 1 and PASSES.
// ─────────────────────────────────────────────────────────────────────────────

describe('FileUploadInput — double-open bug (sc-205285)', () => {
  it('clicking the choose button opens the file dialog exactly once', () => {
    const { container, unmount } = renderIntoDocument(<FileUploadInput {...baseProps} />)

    const tracker = countInputClicks(container)
    const chooseButton = container.querySelector<HTMLElement>('button.choose')
    expect(chooseButton).not.toBeNull()

    act(() => {
      chooseButton!.click()
    })

    tracker.cleanup()
    unmount()

    // With the bug: htmlFor on the old label caused native label→input activation (1)
    // AND the click bubbles to the dropzone root which calls openFileDialog()→input.click() (2).
    // After the fix: a real button with no input association — only the dropzone onClick fires (1).
    expect(tracker.count).toBe(1)
  })

  it('renders choose as a native button so keyboard activation works (WCAG)', () => {
    const { container, unmount } = renderIntoDocument(<FileUploadInput {...baseProps} />)

    // A native <button type="button"> gets Enter/Space activation and focusability
    // from the browser (jsdom does not synthesize click from keydown, so we assert
    // the semantics rather than simulate the keyboard behaviour).
    const chooseButton = container.querySelector('button.choose')
    expect(chooseButton).not.toBeNull()
    expect(chooseButton!.getAttribute('type')).toBe('button')

    // It must NOT be a label tied to the input — that is what double-opened the picker.
    expect(container.querySelector('label.choose')).toBeNull()

    unmount()
  })

})
