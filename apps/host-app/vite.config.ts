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
        "remote-app": {
          type: "module",
          name: "remote-app",
          entry: "http://localhost:5173/remoteEntry.js",
        },
      },
      shared: { "shared-pkg": {} },
      watchShared: ["../../pkgs/shared-pkg/**/*"],
      dts: false,
    }),
  ],
  build: {
    target: "chrome89",
  },
});
