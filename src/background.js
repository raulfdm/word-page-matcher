chrome.runtime.onInstalled.addListener(() => {
  // Set the color property in chrome storage.
  // chrome.storage.sync.set({ color: "#3aa757" }, () =>
  // );

  console.log("BACKGROUND INSTALLED");

  // Upon navigation, check if on the correct page. If so, show action.
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, () =>
  //   chrome.declarativeContent.onPageChanged.addRules([
  //     {
  //       conditions: [true],
  //       actions: [new chrome.declarativeContent.ShowPageAction()],
  //     },
  //   ])
  // );
});
