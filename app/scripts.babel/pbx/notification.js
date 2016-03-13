class Notifications {
    constructor(){
        
    };
    
    notifyCall(number){
        const opt = {
            type: 'basic',
            title: 'Calling Number',
            message: 'You are calling the number: ' + number,
            iconUrl: 'images/icon-128.png'
        };
        
        chrome.notifications.create('calling', opt, function() { });
    };
    
    notifyInvalid(){
        const opt = {
            type: 'basic',
            title: 'Invalid Number',
            message: 'You are trying to call an invalid number.',
            iconUrl: 'images/icon-128.png'
        };
        
        chrome.notifications.create('invalidNumber', opt, function() { });
    }
};

export default new Notifications();