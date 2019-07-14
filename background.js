function activateDiscounts() {
  browser.tabs.executeScript({
    file: 'my-bread.js',
  });
}

browser.browserAction.onClicked.addListener(activateDiscounts);
