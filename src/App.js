import "./App.css";
import React from "react";
import lottery from "./Lottery.js";
import web3 from "./web3.js";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = { manager : 'nawa'}
  }
 async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    this.setState({ manager})
    
  }
  render() {
    console.log(web3.eth.getAccounts().then(console.log))
    return (
         <div>
          <h2> Lottery contract</h2>
          <p> this contract is created by {this.state.manager}</p>
         </div>
    );
  }
}
export default App;
