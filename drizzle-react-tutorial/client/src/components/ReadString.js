import React from "react";

class ReadString extends React.Component {
  state = 
  {
    myStringKey: null,
    ownerKey: null
  };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    // let drizzle know we want to watch the `myString` method
    const myStringKey = contract.methods["myString"].cacheCall();
    const ownerKey = contract.methods["owner"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ myStringKey, ownerKey });
  }

  render() {
    // get the contract state from drizzleState
    const { MyStringStore } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const myString = MyStringStore.myString[this.state.myStringKey];
    const owner = MyStringStore.owner[this.state.ownerKey];

    // if it exists, then we display its value
    return <div>
      <p>My stored string: {myString && myString.value}</p>
      <p>My owner: {owner && owner.value}</p>
    </div>;
  }
}

export default ReadString;

