import { defineManifest } from '@crxjs/vite-plugin'
import packageData from '../package.json'

export default defineManifest({
  name: packageData.name,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: 'img/favicon-16x16.png',
    32: 'img/favicon-32x32.png',
    192: 'img/android-chrome-192x192.png',
  },
  action: {
    default_popup: 'popup.html',
    default_icon: 'img/apple-touch-icon.png',
  },
  background: {
    service_worker: 'src/background/index.js',
    type: 'module',
  },
  content_scripts: [
    {
      "matches": ["*://*.youtube.com/*"],
      "js": ["src/contentScript/index.js"]
    }
  ],
  web_accessible_resources: [
    {
      resources: ['img/favicon-16x16.png', 'img/favicon-32x32.png', 'img/android-chrome-192x192.png'],
      matches: [],
    },
  ],
  permissions: ['activeTab', 'storage'],
})
