// Importing react and destructuring component from 'react'
import React, { Component } from "react";
// Importing custom css
import "./App.css";
// Importing filter component from filter.js
import Filter from "./search";

// Creating the App component
class App extends Component {

  // Data is fetched from api after component is mounted
  async componentWillMount() {
    const url = "https://nut-case.s3.amazonaws.com/coursessc.json";
    const response = await fetch(url);
    const data = await response.json();
    // saving data in localStorage
    localStorage.setItem("data", JSON.stringify(data));
  }

  // Rendering the filter component
  render() {
    return (
      <div>
        <div className="heading">Courses</div>
        <Filter />
      </div>
    );
  }
}

export default App;
