const fs = require('fs')
const { ethers } = require("hardhat")

async function main() {
    const [deployer] = await ethers.getSigners()
    console.log(`Deploying contracts with the account: ${deployer.address}`)
    
    const balance = await deployer.getBalance();
    console.log(`Account balance: ${balance.toString()}`)

    const Voting = await ethers.getContractFactory('voting')
    const voting = await Voting.deploy(
        "Dummy vote",
        ["vote1", "vote2", "vote3", "vote4", "vote5"]
    );
    await voting.deployed()
    
    console.log(`Token address: ${voting.address}`)

    const data = {
        address: voting.address,
        abi: JSON.parse(voting.interface.format('json'))
    }
    // console.log(JSON.stringify(data))
    fs.writeFileSync('./src/Voting.json', JSON.stringify(data))
}

main()
    .then(()=> process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })