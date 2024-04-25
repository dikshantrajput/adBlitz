chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  switch(message.action){
    case "adSkipped":
      chrome.storage.local.get('adCount', function(data) {
        const adCount = data.adCount || 0;
        chrome.storage.local.set({ 'adCount': adCount + 1 });
      });
    case "adSpeeded":
      chrome.storage.local.get('adSpeed', function(data) {
        const adSpeed = data.adSpeed || 0;
        chrome.storage.local.set({ 'adSpeed': adSpeed + 1 });
      });
    default:
      console.log("Action not defined");
  }
});
