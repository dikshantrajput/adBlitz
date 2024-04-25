// Retrieve ad count from local storage and update popup
chrome.storage.local.get('adCount', function(data) {
  const adCount = data.adCount || 0;
  document.getElementById('adCount').textContent = adCount;
});

chrome.storage.local.get('adSpeed', function(data) {
  const adSpeed = data.adSpeed || 0;
  document.getElementById('adSpeed').textContent = adSpeed;
});