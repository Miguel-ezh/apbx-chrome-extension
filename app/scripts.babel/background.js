'use strict';

chrome.webNavigation.onCompleted.addListener(function(details){
  chrome.tabs.executeScript(null, {file:'/bower_components/jquery/dist/jquery.min.js'}, function(){
    chrome.tabs.executeScript(details.tabId, {
      code: '(function() { var re = /\\(?([0-9]{3})\\)?([ .-]?)([0-9]{3})\\2([0-9]{4})/g;' +
      `var listOfNumbers = document.body.innerText.match(re);

       console.log(listOfNumbers);
       listOfNumbers.forEach(function(item){
          //$('a:contains(' + item + ')').each(function(item){
          //    console.log($(item));
          //});
          $.each($('a:contains(' + item + ')'), function(item){
            console.log(item);
          });
       });
      })();`
    });
  });
});
