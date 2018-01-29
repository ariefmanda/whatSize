const crypto    = require('crypto')
const algorithm = 'aes192'
const password  = 'whatSize'

function encrypt(text) {
  let cipher  = crypto.createCipher(algorithm, password)
  let crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text) {
  let decipher = crypto.createDecipher(algorithm, password)
  let dec      = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

 function comparePassword(password, originPassword){
  return encrypt(password) == originPassword
}

module.exports = {
  encrypt,
  decrypt,
  comparePassword
};
