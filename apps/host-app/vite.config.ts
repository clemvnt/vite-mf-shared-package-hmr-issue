import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    port: 5174,
  },
  plugins: [
    federation({
      name: "host-app",
      filename: "remoteEntry.js",
      remotes: {
        "remote-app": "http://localhost:5173/mf-manifest.json",
      },
      shared: { "shared-pkg": {} },
      manifest: true,
      dts: false,
    }),
  ],
  build: {
    target: "chrome89",
  },
});
