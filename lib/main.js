exports.main = function(options, callbacks) {
  require("tab-browser").whenContentLoaded(
    function(window) {
      if (window.location.protocol == "https:" &&
          window.location.host.match(/^crowdflower\.com$/)) {
        var sms = window.document.querySelector(".cml.jsawesome > h3");
        sms.style.position = "fixed";
        sms.style.top = "0px";
        sms.style.left = "0px";
        sms.style.background = "white";
      }
    });
}
