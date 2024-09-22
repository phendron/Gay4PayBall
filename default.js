chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

var header1 = document.body.querySelector("script[data-fragment-type='ArticleContent']");
var title1 = document.body.querySelector("h1[data-testid='article-title']");

var data = header1.innerHTML.split("=");
data.shift();
data = data.join("=")

sendResponse({data: data, title: title1.textContent});
return true;

});
