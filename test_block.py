from block import Block
from config import GENESIS
from blockhash import blockhash


class TestBlock:
    timestamp = "a-date"
    lasthash = "foo-hash"
    hash = "bar-hash"
    data = ["blockchain", "data"]
    block = Block(timestamp=timestamp, lasthash=lasthash, hash=hash, data=data)

    def test_has_all_properties(self):
        assert self.block.timestamp == self.timestamp
        assert self.block.lasthash == self.lasthash
        assert self.block.hash == self.hash
        assert self.block.data == self.data

    class TestGenesis:
        genesis = Block.genesis()

        def test_returns_block_instance(self):
            assert isinstance(self.genesis, Block)

        def test_returns_genesis_data(self):
            assert self.genesis.timestamp == GENESIS["timestamp"]
            assert self.genesis.lasthash == GENESIS["lasthash"]
            assert self.genesis.hash == GENESIS["hash"]
            assert self.genesis.data == GENESIS["data"]

    class TestMineBlock:
        lastblock = Block.genesis()
        data = "mined data"
        mined_block = Block.mine_block(lastblock=lastblock, data=data)

        def test_returns_block_instance(self):
            assert isinstance(self.mined_block, Block)

        def test_sets_the_lasthash_as_hash_of_the_lastblock(self):
            assert self.mined_block.lasthash == self.lastblock.hash

        def test_sets_the_data(self):
            assert self.mined_block.data == self.data

        def test_sets_a_timestamp(self):
            assert self.mined_block.timestamp is not None

        def test_creates_sha256_hash_based_on_the_proper_input(self):
            print(self.mined_block)
            assert self.mined_block.hash == blockhash(self.mined_block)
