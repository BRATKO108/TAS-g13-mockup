(function(window, undefined) {
  var dictionary = {
    "fd7a9838-407d-4b37-8104-1ad282a4080d": "Exit",
    "85364c6e-2b04-42fc-a079-67b5385d0d37": "Settings",
    "4dc79526-3c65-4ea8-91c1-74ab14f4e4e8": "Font size",
    "7911d120-8710-4530-8ab7-c8a85bb3e6c6": "Forgot pass",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Sign in",
    "c49efdce-1350-4e21-a552-f14a62dcc857": "Aletrs",
    "1ffeeaa7-fdff-4e2d-90d5-5d06477b34b3": "Home",
    "b3929edb-0ba5-401a-843f-7428407f5b2c": "Crisies",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);