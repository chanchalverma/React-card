import React from "react";
import Card from "./Card";
import "./CardList.css";
import Header from "../Header/Header";
import Model from "./Model";
import CircularProgress from "@material-ui/core/CircularProgress";

class CardList extends React.Component {
  state = {
    data: "",
    open: false,
    selectedId: 0,
    modalValue: null,
    isLodding: false
    // selectedName: "",
    // selectedEmail: ""
  };

  componentWillMount() {
    console.log("hi1 "); // 1st call
  }

  componentDidMount() {
    // 3rd call and fetch the data
    this.setState({
      isLodding: true
    });
    console.log("hi 2");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(res => {
        this.setState({
          data: res,
          isLodding: false
        });
      });
  }
  onCardDelete = id1 => {
    //spread
    let data1 = [...this.state.data]; // [...] {...}
    let FilterData = data1.filter(dataId => dataId.id !== id1);
    this.setState({ data: FilterData });
  };

  onModalHandler = (modalValue, id, name, email) => {
    console.log(name, email);
    this.setState({
      open: true,
      modalValue: modalValue,
      selectedId: id,
      selectedName: name,
      selectedEmail: email
    });
  };

  onModalClose = () => {
    this.setState({
      open: false
    });
  };

  onChangeHandler = event => {
    let textbox = event.target.value;

    this.setState({
      [event.target.name]: textbox
    });
  };

  onConfirmModalHandler = () => {
    let newName = this.state.selectedName;
    let newEmail = this.state.selectedEmail;
    let newData = [...this.state.data];
    console.log("name=", newName);

    // if (newName == null && newEmail == null) {
    //   alert("Enter all mandantory data");
    // } else
    {
      if (this.state.modalValue == "add") {
        console.log("if");
        let body = {};
        body.name = newName;
        body.email = newEmail;
        body.id = new Date(); // new id set by date and time bcoz its never repeat
        newData.unshift(body);
        // console.log(newData);
        this.setState({
          data: newData,
          open: false
        });
      } else {
        let id = this.state.selectedId;
        let updatedData = newData.map(data => {
          if (data.id === id) {
            data.name = newName;
            data.email = newEmail;
          }
          return data;
        });
        this.setState({
          data: updatedData,
          open: false
        });
      }
    }
  };

  render() {
    // 2nd call

    return (
      <div>
        <h2>Cards</h2>
        <hr />
        <Header color="rgb(2, 2, 51)" />
        <button
          className="newButton "
          onClick={() => this.onModalHandler("add", null, null, null)}
        >
          {" "}
          Add new Card
        </button>
        <br />
        {this.state.isLodding ? (
          <div>
            {" "}
            <h1>
              <CircularProgress />
              <CircularProgress />
              Loading.......
            </h1>
          </div>
        ) : (
          <div>
            {this.state.data &&
              this.state.data.map(data => (
                <Card
                  id={data.id}
                  name={data.name}
                  email={data.email}
                  contact={data.contact}
                  image={data.image} // data send to Card.jsx as a props
                  onCardDelete={id2 => this.onCardDelete(id2)} // selected data come from Card.jsx(child component)
                  onCardEdit={(id, name, email) =>
                    this.onModalHandler("edit", id, name, email)
                  }
                />
              ))}
          </div>
        )}
        <Model
          id={this.state.selectedId}
          name={this.state.selectedName}
          email={this.state.selectedEmail}
          open={this.state.open}
          onClose={this.onModalClose}
          OnUpdate={this.onChangeHandler}
          OnButtonClick={this.onConfirmModalHandler}
          modalValue={this.state.modalValue}
        />
      </div>
    );
  }
}
export default CardList;
