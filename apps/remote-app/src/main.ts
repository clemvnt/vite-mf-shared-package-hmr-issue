import { value as sharedPkgValue } from "shared-pkg";
import { value as notSharedPkgValue } from "not-shared-pkg";

document.querySelector("#app")!.innerHTML = `
  <div>
    shared-pkg: ${sharedPkgValue}
  </div>
  <div>
    not-shared-pkg: ${notSharedPkgValue}
  </div>
`;
