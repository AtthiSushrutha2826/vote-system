import hashlib


def blockhash(obj):
    hash = hashlib.sha256()
    hash.update(str(obj).encode())
    return hash.hexdigest()
