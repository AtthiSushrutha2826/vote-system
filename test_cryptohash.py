from blockhash import blockhash


class TestBlockhash:
    def test_generates_sha256_hashed_output(self):
        assert (
            blockhash("foo")
            == "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae"
        )
