from datetime import datetime
from config import GENESIS
from blockhash import blockhash


class Block:
    def __init__(self, timestamp: datetime, lasthash: str, hash: str, data) -> None:
        self.timestamp = timestamp
        self.lasthash = lasthash
        self.hash = hash
        self.data = data

    @classmethod
    def genesis(cls):
        return cls(**GENESIS)

    @classmethod
    def mine_block(cls, lastblock, data):
        block = cls(datetime.now(), lastblock.hash, None, data)
        block.hash = blockhash(block)
        return block

    def __str__(self) -> str:
        return f"{self.lasthash}{self.timestamp}{self.data}"
