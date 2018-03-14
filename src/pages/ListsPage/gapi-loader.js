import scriptjs from "scriptjs";
import promise from "promise";

export default onComplete =>
  new promise((resolve, reject) => {
    if (window.gapi && window.gapi.client) {
      doResolve(resolve, onComplete);
    } else {
      window.$$onClientLoad = () => {
        doResolve(resolve, onComplete);
      };
      scriptjs("https://apis.google.com/js/client.js?onload=$$onClientLoad");
    }
  });

function doResolve(resolve, onComplete) {
  resolve(window.gapi.client);
  if (onComplete) onComplete(window.gapi.client);
}
