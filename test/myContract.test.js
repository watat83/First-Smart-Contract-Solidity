const MyContract = artifacts.require("MyContract"); // 1️⃣

contract("MyContract", () => { // 2️⃣   
    it("Contract Deployed Successfully!", async () => { // 3️⃣
        const myContract = await MyContract.deployed();
        assert(myContract, "Contract Deployment Failed!"); // 4️⃣
    });

    describe("getString()", () => {
        it("returns 'String'", async () => {
            const myContract = await MyContract.deployed();
            const expected = "String";
            const actual = await myContract.getString();

            assert.equal(actual, expected, "getString returned 'String' and did not update");
        })
    })
});


contract("MyContract: Owner", (accounts) => {
    describe("owner()", () => {
        it("returns the address of the owner", async () => {
            const myContract = await MyContract.deployed();
            const owner = await myContract.owner();

            assert(owner, "The Current Owner");
        })

        it("matches the address that originally deployed the contract", async () => {
            const myContract = await MyContract.deployed();
            const owner = await myContract.owner();
            const expected = accounts[0];

            assert.equal(owner, expected, "matches the address that deployed the contract");
        })

    })
})


contract("MyContract: Set String", (accounts) => {
    describe("setString(string)", () => {
        it("sets the new string", async () => {
            const myContract = await MyContract.deployed();
            const expected = "New String";

            await myContract.setString(expected);
            const actual = await myContract.getString();
            assert.equal(actual, expected, "setString did not update to 'New String'");
        })
    })
    describe("message sent by another account", () => {

        it("does not set the new string", async () => {
            const myContract = await MyContract.deployed();
            const expected = await myContract.getString();
            try {
                await myContract.setString("Not the owner", {
                    from: accounts[1]
                });
            } catch (err) {
                const errorMessage = "Ownable: caller is not the owner";
                await assert.equal(err.reason, errorMessage, "The string should not update");
                return;
            }

            assert(false, "string should not update");
        })

    })
})