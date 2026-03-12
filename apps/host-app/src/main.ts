import { value as notSharedPkgValue } from "not-shared-pkg";
import {
  value as sharedPkgValue,
  cjsValue as sharedPkgCjsValue,
} from "shared-pkg";
import {
  sharedPkgValue as remoteSharedPkgValue,
  sharedPkgCjsValue as remoteSharedPkgCjsValue,
  notSharedPkgValue as remoteNotSharedPkgValue,
} from "remote-app/values";

document.querySelector("#app")!.innerHTML = `
  <div>
    shared-pkg : ${sharedPkgValue}
  </div>
  <div>
    shared-pkg/cjs-pkg : ${sharedPkgCjsValue}
  </div>
  <div>
    not-shared-pkg : ${notSharedPkgValue}
  </div>
  <div>
    remote-app/shared-pkg : ${remoteSharedPkgValue}
  </div>
  <div>
    remote-app/shared-pkg/cjs-pkg : ${remoteSharedPkgCjsValue}
  </div>
  <div>
    remote-app/not-shared-pkg : ${remoteNotSharedPkgValue}
  </div>
`;
