import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lvjhn.untitledapp',
  appName: 'untitled-app',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: "http://127.0.0.1:5173",
    cleartext: true
  }
};

export default config;
