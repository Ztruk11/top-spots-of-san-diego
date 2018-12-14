import React, { Component } from "react";
import Axios from "axios";

import TopSpot from "./topspots";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }
  componentWillMount() {
    Axios.get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className="App container">
        <h1 className="display-4 text-white text-center">
          San Diego Top Spots
        </h1>
        <h5 className="text-white text-center">
          A list of the top 30 destinations in San Diego
        </h5>
        <hr className="border border-white" />
        <div className="text-center text-white">
          {this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
