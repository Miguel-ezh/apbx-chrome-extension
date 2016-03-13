class Validator{
    
    isValidPhone(text){
        const re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g;
        
        return re.test(text);
    };
};

export default new Validator();