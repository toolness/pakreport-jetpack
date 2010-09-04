function makeCrowdflowerEasierToUse(window) {
  if (window.location.protocol.match(/^http/) &&
      window.location.host.match(/^crowdflower\.com$/)) {
    var document = window.document;

    function $(sel) {
      return document.querySelector(sel);
    }

    var foundSms = false;
    var h3s = document.querySelectorAll("h3");
    for (var i = 0; i < h3s.length; i++) {
      var h3 = h3s[i];
      if (h3.textContent.match(/^The SMS:/)) {
        if (foundSms) {
          h3.style.display = "none";
        } else {
          foundSms = true;
          h3.style.position = "fixed";
          h3.style.top = "0px";
          h3.style.left = "0px";
          h3.style.background = "black";
          h3.style.color = "white";
          h3.style.padding = "1em";
          h3.style.zIndex = 100;
        }
      }
    }

    var map = $("#map");
    if (map)
      map.parentNode.removeChild(map);

    var betterCats = document.createElement("div");

    function makeBetterCat(option, name) {
      var block = document.createElement("div");
      var elem = document.createElement("span");
      block.appendChild(elem);
          
      elem.textContent = name;
      elem.addEventListener(
        "click",
        function(event) {
          event.preventDefault();
          event.stopPropagation();
          if (option.selected) {
            option.selected = false;
            this.style.backgroundColor = "";
          } else {
            option.selected = true;
            this.style.backgroundColor = "yellow";
          }
        },
        false
      );
      elem.style.cursor = "pointer";
      return block;
    }

    var cats = $(".category_selection");
    if (cats) {
      var options = cats.options;
      var currTopCat = null;
      for (i = 0; i < options.length; i++) {
        var parts = options[i].value.split(" | ");
        if (parts.length == 1)
          parts = ["Miscellaneous", parts[0]];
        
        if (parts[0] != currTopCat) {
          var h4 = document.createElement("h4");
          h4.textContent = parts[0];
          h4.style.paddingTop = "1em";
          currTopCat = parts[0];
          betterCats.appendChild(h4);
        }
        
        betterCats.appendChild(makeBetterCat(options[i], parts[1]));
      }
      cats.style.display = "none";
      cats.nextElementSibling.style.display = "none";
      cats.parentNode.appendChild(betterCats);
    }
  }
}

if ('require' in this)
  require("tab-browser").whenContentLoaded(makeCrowdflowerEasierToUse);
else
  makeCrowdflowerEasierToUse(this);
