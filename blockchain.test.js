const Blockchain = require('./blockchain');
const Block = require('./block');
 describe('Blockchain',()=>{
    let blockchain,newChain;
    beforeEach(()=>{
        blockchain = new Blockchain();
        newChain = new Blockchain();
        originalChain = blockchain.chain;
    });
    it ('contains a `chain` Array instance', ()=>{
        expect(blockchain.chain instanceof Array).toBe(true);
    });
    it('start with the genesis block',()=>{
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });
 it('adds a new block to the chain', ()=>{
    const newData = 'foo bar';
    blockchain.addBlock({data:newData});
    expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(newData);
 });
   describe('isValidChain()',()=>{
      describe('when the chain does not start with the genesis block',()=>{
        it('return false', ()=>{
            blockchain.chain[0] = {data: 'fake-genesis'};
            expect(blockchain.isValidChain(blockchain.chain)).toBe(false);
        });
      });
      describe('when the chain starts with the genesis block and has multiple blocks',()=>{
         beforeEach(()=>{
            blockchain.addBlock({data: 'Bears'});
            blockchain.addBlock({data: 'Beets'});
            blockchain.addBlock({data: 'Battlestar Galactica'});
         })
        describe('and a lasthash reference has changed', ()=>{
            it('return false', ()=>{
                blockchain.addBlock({data: 'Bears'});
                blockchain.addBlock({data: 'Beets'});
                blockchain.addBlock({data:'Battlestar Galactica'});
                blockchain.chain[2].lastHash = 'broken-lastHash';
                expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);;
            });
         });
         describe('and the chain contains a block with an invalid field',()=>{
            it('return false',()=>{
    
                blockchain.chain[2].data = 'some-bad-and-evil-data';
                expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
            });
         });
         describe('and the chain does not contain any invalid blocks',  ()=>{
            it('return true', () => {
                
                expect(Blockchain.isValidChain(blockchain.chain)).toBe(true);
            });
         });
         describe('replaceChain()',()=>{
            describe('when the new chain is not longer',()=>{
                it('does not replace the chain',()=>{
                   newChain.chain[0] = {new: 'chain'};
                   blockchain.replaceChain(newchain.chain);
                   expect(blockchain.chain).toEqual(originalChain);
                });
            
         });
         describe('when the chain is longer',()=>{
            beforeEach(()=>{
                blockchain.addBlock({data: 'Bears'});
                blockchain.addBlock({data: 'Beets'});
                blockchain.addBlock({data:'Battlestar Galactica'});
            });
            describe('and the chain is invalid',()=>{
                it('does not replace the chain',()=>{
                    newChain.chain[2].hash = 'some-fake-hash';
                    blockchain.replaceChain(newChain.chain);
                    expect(blockchain.chain).toEqual(originalChain);
                });
            });
            describe('and the chain is valid',()=>{
                it('replaces the chain ',()=>{
                blockchain.replaceChain(newChain.chain);
                expect(blockchain.chain).toEqual(newChain.chain);
                });

            });
           
         });
         
         });
      });
   });
 
 });