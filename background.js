function activateDiscounts() {
  browser.tabs.executeScript({
    file: 'bread.js',
  });
}

browser.browserAction.onClicked.addListener(activateDiscounts);
