import { JSDOM } from "jsdom"
const dom = new JSDOM()
global["document"] = dom.window.document
global["window"] = dom.window
global["navigator"] = {
  appCodeName: "",
  appName: "",
  appVersion: "",
  canShare(_data: ShareData | undefined): boolean {
    return false;
  },
  clipboard: undefined,
  locks: undefined,
  pdfViewerEnabled: undefined,
  cookieEnabled: false,
  credentials: undefined,
  doNotTrack: "",
  geolocation: undefined,
  getGamepads(): (Gamepad | null)[] {
    return [];
  },
  hardwareConcurrency: 0,
  javaEnabled(): boolean {
    return false;
  },
  language: "",
  languages: undefined,
  maxTouchPoints: 0,
  mediaCapabilities: undefined,
  mediaDevices: undefined,
  mediaSession: undefined,
  mimeTypes: undefined,
  onLine: false,
  permissions: undefined,
  platform: "",
  plugins: undefined,
  product: "",
  productSub: "",
  registerProtocolHandler(_scheme: string, _url: string | URL): void {
  },
  sendBeacon(_url: string | URL, _data: BodyInit | null | undefined): boolean {
    return false;
  },
  serviceWorker: undefined,
  share(_data: ShareData | undefined): Promise<void> {
    return Promise.resolve(undefined);
  },
  storage: undefined,
  vendor: "",
  vendorSub: "",
  webdriver: false,
  requestMediaKeySystemAccess(_keySystem: string, _supportedConfigurations: MediaKeySystemConfiguration[] | Iterable<MediaKeySystemConfiguration>): Promise<MediaKeySystemAccess> {
    return Promise.resolve(undefined);
  },
  vibrate(_pattern: VibratePattern | Iterable<number>): boolean {
    return false;
  },
  userAgent: 'node.js'
};
