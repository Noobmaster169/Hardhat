async function main(){
    var factory = await ethers.getContractFactory("Verify");
    var contract = await factory.deploy();

    console.log("Contract Address: ", await contract.getAddress());
 
}

main().then(() => process.exit(0))
.catch((error) => {
    console.error(error)
    process.exit(1)
});