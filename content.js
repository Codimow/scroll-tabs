(function() {
  function findTabBar() {
    return document.querySelector('#tabbrowser-tabs') || 
           document.querySelector('.tabbrowser-tabs') ||
           document.querySelector('#TabsToolbar');
  }
  
  document.addEventListener('wheel', (e) => {
    const tabBar = findTabBar();
    if (!tabBar) return;
    
    const target = e.target;
    const isOverTabBar = tabBar.contains(target);
    
    console.log('Scroll detected:', e.deltaY, 'Over tab bar:', isOverTabBar);
    
    if (isOverTabBar) {
      e.preventDefault();
      e.stopPropagation();
      
      browser.runtime.sendMessage({
        action: 'switchTab',
        direction: e.deltaY > 0 ? 'down' : 'up'
      });
    }
  }, { passive: false });
})();