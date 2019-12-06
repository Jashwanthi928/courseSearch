// Importing react and destructuring component from 'react'
import React, { Component } from "react";
// Importing getData function from the 'courseData.js' file
import { getData } from "./helpers/coursedata";
// Importing custom style
import "./App.css";

const data = getData(); // Getting the data in the data variable using getData() function
const coursedata = JSON.parse(data); // Parsing the received json data

// Function to search according to the child subject
function searchingForChildSubject(childsubject) {
  return function(x) {
    return (
      x["Child Subject"].toLowerCase().includes(childsubject.toLowerCase()) ||
      !childsubject
    );
  };
}

// Function to search according to the provider
function searchingForProvider(provider) {
  return function(x) {
    return (
      x["Provider"].toLowerCase().includes(provider.toLowerCase()) || !provider
    );
  };
}

// Component to display course details
class Filter extends Component {
  constructor(props) {
    super(props);
    // Setting the initial state
    this.state = {
      data: coursedata,
      childsubject: "",
      provider: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  //   Setting the state according to the value entered in the input box
  searchHandler(event) {
    this.setState({ childsubject: event.target.value });
    this.setState({ provider: event.target.value });
  }

  //   Rendering the DOM elements through react
  render() {
    return (
      // Rendering the search bar
      <div>
        <form>
          <input
            type="text"
            className="form-control textbox"
            onChange={this.searchHandler}
            placeholder="Search..."
          />
        </form>

        {/* Filtering the course data according to the user input - provider */}
        {this.state.data
          .filter(searchingForProvider(this.state.childsubject))
          .map(function(data) {
            return (
              <div key={data["Course Id"]}>
                <div
                  className="card coursedetails"
                  style={{ width: 18 + "rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title title">
                      {data["Child Subject"]}({data["Parent Subject"]}):{" "}
                      {data["Course Name"]}
                    </h5>
                    <p className="card-text time">
                      <li>No of videos: {data.Length}</li>
                      <li>Next Session Date: {data["Next Session Date"]}</li>
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item provider">
                      {data["Provider"]}
                    </li>
                    <li className="list-group-item">
                      This course is offered by{" "}
                      {data["Universities/Institutions"]}
                    </li>
                  </ul>
                  <div className="card-body button">
                    <button type="button" class="btn btn-primary visitbutton">
                      <a href="{data.Url}" className="card-link visitlink">
                        Visit site
                      </a>
                    </button>
                    <button type="button" class="btn btn-primary videobutton">
                      <a
                        href="{data.Video(Url)]}"
                        className="card-link videolink"
                      >
                        Watch Video
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        {/* Filtering the data based on the user search - Child SUbject */}
        {this.state.data
          .filter(searchingForChildSubject(this.state.childsubject))
          .map(function(data) {
            return (
              <div key={data["Course Id"]}>
                <div
                  className="card coursedetails"
                  style={{ width: 18 + "rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title title">
                      {data["Child Subject"]}({data["Parent Subject"]}):{" "}
                      {data["Course Name"]}
                    </h5>
                    <p className="card-text time">
                      <li>No of videos: {data.Length}</li>
                      <li>Next Session Date: {data["Next Session Date"]}</li>
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item provider">
                      {data["Provider"]}
                    </li>
                    <li className="list-group-item">
                      This course is offered by{" "}
                      {data["Universities/Institutions"]}
                    </li>
                  </ul>
                  <div className="card-body button">
                    <button type="button" class="btn btn-primary visitbutton">
                      <a href="{data.Url}" className="card-link visitlink">
                        Visit site
                      </a>
                    </button>
                    <button type="button" class="btn btn-primary videobutton">
                      <a
                        href="{data.Video(Url)]}"
                        className="card-link videolink"
                      >
                        Watch Video
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

// Exporting the filter component
export default Filter;
