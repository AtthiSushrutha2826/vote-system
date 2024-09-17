const crypto =require('crypto');
const cryptoHash=(...inputs)=>{
 const hash=crypto.createHash('sha256');
 hash.update(inputs.sort().join(''));
 let res = hash.digest('hex');
 return res;
};
module.exports=cryptoHash;
