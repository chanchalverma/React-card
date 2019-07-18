import React from "react";
import MediaCard from "../CardByMaterialUi/Card";
import "./CardList.css";
import Header from "../Header/Header";

class CardList1 extends React.Component {
  state = {
    data: ""
  };
  componentWillMount() {
    console.log("hi1 "); // 1st call
  }

  componentDidMount() {
    // 3rd call and fetch the data
    console.log("hi 2");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(res => {
        this.setState({
          data: res
        });
      });
  }
  render() {
    // 2nd call
    console.log(this.state.data);
    return (
      <div>
        <h1>Cards</h1>
        <hr />
        <Header color="darkred" />
        {this.state.data !== "" &&
          this.state.data.map(data => (
            <MediaCard
              id={data.id}
              name={data.name}
              email={data.email}
              contact={data.contact}
              image={data.image}
            />
          ))}
      </div>
    );
  }
}
export default CardList1;
