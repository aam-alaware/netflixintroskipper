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

// Function to check for the Continue Watching button and click it
function checkAndContinueWatching() {
  const buttons = document.querySelectorAll('button');
  for (const button of buttons) {
    if (button.textContent.toLowerCase().includes('continue') && button.offsetParent !== null) {
      console.log('Continue Watching button found, clicking it');
      button.click();
      return true;
    }
  }
  return false;
}

// Function to start observing for changes
function startObserver() {
  const observer = new MutationObserver((mutations) => {
    if (checkAndSkipIntro() || checkAndContinueWatching()) {
      observer.disconnect();
      setTimeout(startObserver, 1000); // Restart observer after 1 seconds
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

console.log('Netflix Intro Skipper and Auto-Continue is active');
startObserver();
