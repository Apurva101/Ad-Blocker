chrome.webRequest.onBeforeRequest.addListener(

    //callback function
    function(details) {
        return     { cancel:true};
    },
    //filers urls
    {
        urls: defaultFilters
    },
  
    ["blocking"]

)

const defaultFilters = [
    "*://*.zedo.com/*",
    "*://*.doubleclick.net/*",
    "*://*.partner.googleadservices.com/*",
    "*://*.google.analytics.com/*"

]