import {
  value as sharedPkgValue,
  cjsValue as sharedPkgCjsValue,
} from "shared-pkg";
import { value as notSharedPkgValue } from "not-shared-pkg";

document.querySelector("#app")!.innerHTML = `
  <div>
    shared-pkg: ${sharedPkgValue}
  </div>
  <div>
    shared-pkg/cjs-pkg: ${sharedPkgCjsValue}
  </div>
  <div>
    not-shared-pkg: ${notSharedPkgValue}
  </div>
`;
