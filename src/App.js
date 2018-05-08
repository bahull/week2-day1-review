import React, { Component } from "react";
import PeopleList from "./components/PeopleList";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        { name: "Bryce", age: 24 },
        { name: "Shea", age: "Not 24" },
        { name: "Steven", age: 25 },
        { name: "Erik", age: "No idea" },
        { name: "Zac", age: 19 }
      ],
      picked: []
    };
    this.handleConfirm = this.handleConfirm.bind(this);
    this.deletePicked = this.deletePicked.bind(this);
  }

  handleConfirm(person) {
    //Creates a copy of the people array. Take the chosen person out of the array
    let peopleCopy = this.state.people.slice();
    let currIndex = peopleCopy.findIndex(curr => curr.name === person.name);
    peopleCopy.splice(currIndex, 1);

    //Creates a copy of the picked array. Pushes in chosen person into the array
    let pickedCopy = this.state.picked.slice();
    pickedCopy.push(person);

    this.setState({
      people: peopleCopy,
      picked: pickedCopy
    });
  }
  deletePicked(person) {
    console.log(person);
    //Creates a copy of the people array. Take the chosen person out of the array
    let pickedCopy = this.state.picked.slice();

    pickedCopy.splice(
      pickedCopy.findIndex(curr => curr.name === person.name),
      1
    );

    //Creates a copy of the picked array. Pushes in chosen person into the array
    this.setState({
      picked: pickedCopy
    });
  }

  render() {
    const { people, picked } = this.state;

    let peopleList = people.map((curr, index) => {
      return (
        <PeopleList
          key={index}
          person={curr}
          handleConfirm={this.handleConfirm}
          currClass={"select"}
          text={"Add to team"}
        />
      );
    });

    let pickedList = picked.map((curr, index) => {
      return (
        <PeopleList
          key={index}
          person={curr}
          handleConfirm={this.deletePicked}
          currClass={"remove"}
          text={"Remove from team"}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Team Builder</h1>
        </header>
        <div className="flex-row">
          <section className="flexed">
            <h4>Team Options</h4>
            {peopleList}
          </section>

          <section className="flexed">
            <h4>Current Team</h4>
            {pickedList}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
