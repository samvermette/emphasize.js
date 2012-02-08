(function() {
  var Emphasize = { "languages": [], "rules": [] };
  Emphasize.languages = ["obj-c"];

  Emphasize.rules["obj-c"] = [
    [/(#)(.+)(\n)/g, "<em class='em-preprocessor'>$1$2</em>$3"],
    [/(\[|^|&lt;|\(|\s+)([A-Z]{2}[a-zA-Z]{3,})(\s|\*|&gt;|;|,)/g, "$1<em class='em-class'>$2</em>$3"],
    [/(\[|^|\(|\s+)(\w{3,})(\()/g, "$1<em class='em-method'>$2</em>$3"],
    [/(@")([^"]+)(",|"])/g, "<em class='em-string'>$1$2$3</em>"],
    [/(#.*)("|&lt;)(.*)("|&gt;)/g, "$1<em class='em-string'>$2$3$4</em>"],
    [/(\s+)(\w+)(:|])/g, "$1<em class='em-method'>$2</em>$3"],
    [/(\.)([a-zA-Z]{3,})(\s{1}|]|;|\)|,)/g, "$1<em class='em-property'>$2</em>$3"],
    [/(:)([A-Z]{2}\w{3,})(\s|])/g, "$1<em class='em-constant'>$2</em>$3"],
    [/(self|super|nil|void|@end|@implementation|@synthesize|@property|@interface|@selector|@class)/g, "<em class='em-keyword'>$1</em>"],
    [/(\s+|\(|,)(strong|retain|weak|assign|nonatomic|atomic)(\s+|,|\))/g, "$1<em class='em-keyword'>$2</em>$3"],
    [/(\s+)(for|while|do|if|else|break|in)(\s+|\()/g, "$1<em class='em-keyword'>$2</em>$3"],
    [/(\s+|:)(YES|NO|return|break|continue|)(\s+|;)/g, "$1<em class='em-keyword'>$2</em>$3"],
    [/(\/\/)(.*)(\n)/g, "<em class='em-comment'>$1$2$3</em>"],
    [/([0-9])/g, "<em class='em-number'>$1</em>"]
  ]

  Emphasize.query = ".emphasize." + Emphasize.languages.join(",.emphasize.");
  Emphasize.regex = new RegExp("(\\s|^)("+Emphasize.languages.join("|")+")(\\s|$)", "i");

  var blocks = document.querySelectorAll(Emphasize.query);
  for(var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      var text = block.innerText.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");

      if (language = block.className.match(Emphasize.regex)) {
        var rules = Emphasize.rules[language[2]];
        for (var r = 0; r < rules.length; r++) {
          var rule = rules[r];
          text = text.replace(rule[0], rule[1]);
        }
      }

      block.innerHTML = text
  };

})();
