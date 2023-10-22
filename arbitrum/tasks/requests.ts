import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

task("read-url", "Read contract request URL").setAction(
  async (_, { ethers, network, deployment }) => {
    const contractAddr = deployment.contractAddress;
    const networkName = network.name;
    console.log(
      `Calling contract '${contractAddr}' on network '${networkName}'`
    );
    // Get signer information
    const [account] = await ethers.getSigners();
    // Create connection to contract and call the createRequestTo function
    const TableStateContract = await ethers.getContractFactory(
      "TableState",
      account
    );
    const tableStateContract = await TableStateContract.attach(contractAddr);
    // Retrieve the request URL (e.g., Tableland gateway)
    await tableStateContract.url().then(function (data: any) {
      console.log(`Url: ${data.toString()}`);
    });
  }
);

task("read-path", "Read contract request path").setAction(
  async (_, { ethers, network, deployment }) => {
    const contractAddr = deployment.contractAddress;
    const networkName = network.name;
    console.log(
      `Calling contract '${contractAddr}' on network '${networkName}'`
    );
    // Get signer information
    const [account] = await ethers.getSigners();
    // Create connection to contract and call the createRequestTo function
    const TableStateContract = await ethers.getContractFactory(
      "TableState",
      account
    );
    const tableStateContract = await TableStateContract.attach(contractAddr);
    // Retreive the request "path" the was set during deployment
    await tableStateContract.path().then(function (data: any) {
      console.log(`Path: '${data.toString()}'`);
    });
  }
);

task("request-data", "Calls contract to request external data").setAction(
  async (_, { ethers, network, deployment }) => {
    console.log("50");
    const contractAddr = deployment.contractAddress;
    console.log("52");
    const networkName = network.name;
    console.log(
      `Calling contract '${contractAddr}' on network '${networkName}'`
    );
    // Get signer information
    const [account] = await ethers.getSigners();
    console.log("53");
    // Create connection to contract and call the createRequestTo function
    const TableStateContract = await ethers.getContractFactory(
      "TableState",
      account
    );
    console.log("54");
    const tableStateContract = await TableStateContract.attach(contractAddr);
    // Make a request to Chainlink to fetch the Tableland table data
    
    const tx = await tableStateContract.requestData();
    console.log("55");
    const rec = await tx.wait();
    console.log("56");
    const event = rec.events?.find(
      (e: any) => e.event === "ChainlinkRequested"
    );
    console.log("57");
    const [id] = [...(event?.args || [])];
    console.log(
      `Contract '${contractAddr}' external data request successfully called at tx '${rec.transactionHash}'.\nRequest ID: '${id}'\n`
    );
    console.log(`Run the following to read the returned result:`);
    console.log(`npx hardhat read-data --network ${networkName}`);
  }
);

task(
  "read-data",
  "Calls contract to read data obtained from an external API"
).setAction(async (_, { ethers, network, deployment }) => {
  const contractAddr = deployment.contractAddress;
  console.log("58");
  const networkName = network.name;
  console.log(
    `Reading data from contract '${contractAddr}' on network '${networkName}'`
  );
  // Get signer information
  const [account] = await ethers.getSigners();
  console.log("59");
  // Create connection to contract and call the createRequestTo function
  const TableStateContract = await ethers.getContractFactory(
    "TableState",
    account
  );
  console.log("60");
  const tableStateContract = await TableStateContract.attach(contractAddr);
  console.log("61");
  // Read the on-chain table state data
  const data = await tableStateContract.data();
  console.log(`Data: ${data.toNumber()}`);
});
