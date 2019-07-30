This package contains the CSS and HTML code behind the portal. It's split into two parts

* Components: These are specific distinct components that make up each page (e.g. buttons, layout primatives, etc).
* Static demo pages: These are full demo pages that should duplicate Figma designs. So these take individual components
and combine them into a "real life" page for demonstration and review purposes.

When working on the code in this package, generally your workflow is to create the components first, and then
copy those components into a demo page.

# Setup

You need to install NodeJS/npm on your computer first. Then:

```
# Install yarn if you dont have it yet
npm -g install yarn

# Checkout this repos and switch to it
git clone git@github.com:deskpro/portal-components.git

# Switch to the style package
cd portal-components/packages/style

# Install dependencies
yarn install
```

When you're ready to start working, start the development server:

```
yarn run dev
```

This will open `http://localhost:3000/portal-components/style/` in your primary browser, ready to go.

# Working with components

Component CSS is defined in [`packages/style/src`](https://github.com/deskpro/portal-components/blob/develop/packages/style/src), and then the documentation ("living style guide") is defined in
[`packages/style/docs`](https://github.com/deskpro/portal-components/blob/develop/packages/style/docs).

For example:

* [`.../src/dp-po-buttons.css`](https://github.com/deskpro/portal-components/blob/develop/packages/style/src/components/dp-po-buttons.css) -- buttons CSS file
* [`.../docs/dp-po-Buttons.md`](https://github.com/deskpro/portal-components/blob/develop/packages/style/docs/components/dp-po-Buttons.md) -- buttons docs file
* [`http://.../dp-po-Buttons`](https://deskpro.github.io/portal-components/style/docs/components/dp-po-Buttons) -- buttons built docs file
  * When you're working on your computer, that'd be [localhost](http://localhost:3000/portal-components/style/docs/components/dp-po-Buttons) instead.



# Working with demos

The demo pages are full static pages. The source for the demos is at [`packages/style/website/static/demos`](https://github.com/deskpro/portal-components/blob/develop/packages/style/website/static/demos). These are completely static HTML pages (there will be a lot of copy+paste between them!).

For example:

* [`.../static/demos/kb-view.html`](https://github.com/deskpro/portal-components/blob/develop/packages/style/website/static/demos/kb-view.html) -- static HTML for the KB View page
* [`http://.../demos/kb-view.html](https://deskpro.github.io/portal-components/style/demos/kb-view.html) -- built demo page
  * When you're working on your computer, that'd be [localhost](http://localhost:3000/portal-components/style/demos/kb-view.html) instead.