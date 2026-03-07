
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "shared-pkg": async () => {
          let pkg = await import("__mf__virtual/Host__prebuild__shared_mf_2_pkg__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "shared-pkg": {
            name: "shared-pkg",
            version: "0.0.0",
            scope: ["default"],
            loaded: false,
            from: "Host",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"shared-pkg"}' must be provided by host`);
              }
              usedShared["shared-pkg"].loaded = true
              const {"shared-pkg": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^0.0.0",
              
            }
          }
        
    }
      const usedRemotes = [
                {
                  entryGlobalName: "http://localhost:5173/mf-manifest.json",
                  name: "Remote",
                  type: "var",
                  entry: "http://localhost:5173/mf-manifest.json",
                  shareScope: "default",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      