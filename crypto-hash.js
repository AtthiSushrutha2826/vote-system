const crypto =require('crypto');
const cryptoHash=(...inputs)=>{
 const hash=crypto.createHash('sha256');
 console.log(inputs);
 console.log(inputs.sort().join(''));
 hash.update(inputs.sort().join(''));
 let res = hash.digest('hex');
 console.log(res);
 return res;
};
module.exports=cryptoHash;
