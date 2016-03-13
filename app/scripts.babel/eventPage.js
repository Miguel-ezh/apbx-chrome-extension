import notifications from './pbx/notification';
import validator from './pbx/validation';

var menuItem = {
  'id': 'callNumber',
  'title': 'Call Number',
  'contexts':['selection']
}

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == 'callNumber' && clickData.selectionText) {
      if(validator.isValidPhone(clickData.selectionText)){
          notifications.notifyCall(clickData.selectionText);
      }else{
          notifications.notifyInvalid();
      }
      
  }
});
