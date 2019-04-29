function validateEmail(email) {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
/**
 * Hàm chuyển xác nhận mail
 * @param {*} plainText
 * @returns {string} 
 */
exports.checkValidateMail = function(plainText)
{
    const checkMail = validateEmail(plainText);
    return checkMail;
}