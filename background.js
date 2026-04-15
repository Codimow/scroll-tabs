browser.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "switchTab") {
    const direction = message.direction;
    console.log("Switch tab:", direction);
    
    browser.tabs.query({ currentWindow: true }).then(tabs => {
      const currentTab = tabs.find(t => t.active);
      const currentIndex = tabs.indexOf(currentTab);
      
      let newIndex;
      if (direction === "up") {
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
      } else {
        newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
      }
      
      console.log("Switching to tab:", newIndex);
      return browser.tabs.update(tabs[newIndex].id, { active: true });
    }).catch(err => console.error("Tab switch error:", err));
  }
});

browser.runtime.onInstalled.addListener(() => {
  console.log("Tab Scroll Switcher installed");
});