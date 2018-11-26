import React from "react";

const utf8 = require('utf8');
const MyStringStore = require("../contracts/MyStringStore.json");

class ReadContractTest extends React.Component {

  componentDidMount() {
    var Web3 = require('web3');
    var web3 = new Web3('ws://localhost:8545');

    web3.eth.getAccounts()
    .then((accounts) => {
        if(accounts.length != 0)
            web3.eth.defaultAccount = accounts[0];
        console.log(web3.eth.defaultAccount);
    });

    const contract = new web3.eth.Contract(MyStringStore.abi, "0xfafe5000050058dd1186941746c84284dfea647f");
    contract.methods.getCandidateNamesForBallot(0).call({from: web3.eth.defaultAccount}, (error, result) => 
    {
        console.log("name: " + result[0]);
    });

    // contract.methods.ballots(0).call({from: web3.eth.defaultAccount}, (error, result) => 
    // {
    //     const candSize = result.candidatesSize;
    //     for(var i = 0; i < candSize; i++)
    //     {
    //         contract.methods.ballots(0).candidates(i).call({from: web3.eth.defaultAccount}, (error, result) =>
    //         {
    //             console.log("Result for cand" + i + " " + JSON.stringify(result));
    //         });
    //     }
    // })
  }

  render() {
    return <p>
                Rendered
          </p>;
    
  }
}

export default ReadContractTest;

