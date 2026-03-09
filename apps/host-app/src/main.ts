import { value as notSharedPkgValue } from "not-shared-pkg";
import { value as sharedPkgValue } from "shared-pkg";
import {
  sharedPkgValue as remoteSharedPkgValue,
  notSharedPkgValue as remoteNotSharedPkgValue,
} from "remote-app/values";

document.querySelector("#app")!.innerHTML = `
  <div>
    shared-pkg : ${sharedPkgValue}
  </div>
  <div>
    not-shared-pkg : ${notSharedPkgValue}
  </div>
  <div>
    remote-app/shared-pkg : ${remoteSharedPkgValue}
  </div>
  <div>
    remote-app/not-shared-pkg : ${remoteNotSharedPkgValue}
  </div>
`;
