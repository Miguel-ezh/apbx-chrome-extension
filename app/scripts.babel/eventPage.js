var menuItem = {
  'id': 'callNumber',
  'title': 'Call Number',
  'contexts':['selection']
}

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == 'callNumber' && clickData.selectionText) {

  }
});
