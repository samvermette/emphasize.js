blocks = document.querySelectorAll(".emphasize.obj-c");

for(var i = 0; i < blocks.length; i++) {
    block = blocks[i];
    text = block.innerText;
    
    text = text.replace(/\</g, "&lt;")
    text = text.replace(/\>/g, "&gt;")
    
    text = text.replace(/(#)(.+)(\n)/g, "<em class='em-preprocessor'>$1$2</em>$3")
    text = text.replace(/(\[|^|&lt;|\(|\s+)([A-Z]{2}[a-zA-Z]{3,})(\s|\*|&gt;|;|,)/g, "$1<em class='em-class'>$2</em>$3")
    text = text.replace(/(\[|^|\(|\s+)(\w{3,})(\()/g, "$1<em class='em-method'>$2</em>$3")
    
    text = text.replace(/(@")([^"]+)(",|"])/g, "<em class='em-string'>$1$2$3</em>")
    text = text.replace(/(#.*)("|&lt;)(.*)("|&gt;)/g, "$1<em class='em-string'>$2$3$4</em>")
    
    text = text.replace(/(\s+)(\w+)(:|])/g, "$1<em class='em-method'>$2</em>$3")
    text = text.replace(/(\.)([a-zA-Z]{3,})(\s{1}|]|;|\)|,)/g, "$1<em class='em-property'>$2</em>$3")
    text = text.replace(/(:)([A-Z]{2}\w{3,})(\s|])/g, "$1<em class='em-constant'>$2</em>$3")
    
    text = text.replace(/(self|super|nil|void|@end|@implementation|@synthesize|@property|@interface|@selector|@class)/g, "<em class='em-keyword'>$1</em>")
    text = text.replace(/(\s+|\(|,)(strong|retain|weak|assign|nonatomic|atomic)(\s+|,|\))/g, "$1<em class='em-keyword'>$2</em>$3")
    text = text.replace(/(\s+)(for|while|do|if|else|break|in)(\s+|\()/g, "$1<em class='em-keyword'>$2</em>$3")
    text = text.replace(/(\s+|:)(YES|NO|return|break|continue|)(\s+|;)/g, "$1<em class='em-keyword'>$2</em>$3")
    
    text = text.replace(/(\/\/)(.*)(\n)/g, "<em class='em-comment'>$1$2$3</em>")
    text = text.replace(/([0-9])/g, "<em class='em-number'>$1</em>")
    
    block.innerHTML = text
}