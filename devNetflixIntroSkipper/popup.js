document.addEventListener('DOMContentLoaded', function() {
  var skipIntro = document.getElementById('skipIntro');
  var continueWatching = document.getElementById('continueWatching');

  // Load saved settings
  chrome.storage.sync.get(['skipIntro', 'continueWatching'], function(items) {
    skipIntro.checked = items.skipIntro !== false;  // Default to true if not set
    continueWatching.checked = items.continueWatching !== false;  // Default to true if not set
  });

  // Save settings when changed
  skipIntro.addEventListener('change', function() {
    chrome.storage.sync.set({skipIntro: this.checked});
  });

  continueWatching.addEventListener('change', function() {
    chrome.storage.sync.set({continueWatching: this.checked});
  });
});