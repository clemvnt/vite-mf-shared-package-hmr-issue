import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./values": "./src/values",
      },
      shared: { "shared-pkg": {} },
      dts: false,
    }),
  ],
  build: {
    target: "chrome89",
  },
});
