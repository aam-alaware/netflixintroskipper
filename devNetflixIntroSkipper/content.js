// Function to check for the Skip Intro button and click it
function checkAndSkipIntro() {
  const skipButton = document.querySelector('[data-uia="player-skip-intro"]');
  if (skipButton && skipButton.offsetParent !== null) {
    console.log('Skip Intro button found, clicking it');
    skipButton.click();
    return true;
  }
  return false;
}

// Function to start observing for changes
function startObserver() {
  const observer = new MutationObserver((mutations) => {
    if (checkAndSkipIntro()) {
      observer.disconnect();
      setTimeout(startObserver, 5000); // Restart observer after 5 seconds
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

console.log('Netflix Intro Skipper is active');
startObserver();