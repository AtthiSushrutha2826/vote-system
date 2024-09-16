const { GENESIS_DATA } = require("./config");
const cryptoHash =require('./crypto-hash')

 class Block{  
    constructor({timestamp,lastHash,hash,data}){
        
        this.timestamp=timestamp;
        this.lastHash=lastHash;
        this.hash=hash;
        this.data=data;
    }
    static genesis(){
        return new Block(GENESIS_DATA);
    }
    static mineBlock({lastBlock, data}) {
        let block = new Block({
            timestamp: Date.now(),
            lastHash: lastBlock.hash,
            data
        });
        block.hash = cryptoHash(block.timestamp, block.lastHash, block.data);
        return block;
    }
   }
    
module.exports=Block;