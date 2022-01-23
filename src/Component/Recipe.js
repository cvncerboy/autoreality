import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import RecipeCard from "./Component/RecipeCard";
class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: "",
    };
  }
  componentDidMount() {
    const URL = "https://61e96b407bc0550017bc628a.mockapi.io/kookinary/v1/kookinary";
    Axios.get(URL)
      .then((res) => {
        const meal = res.data;
        if (typeof meal === "object") {
          this.setState({ meal });
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    var data = this.state.meal;
    return <div className="App">{data.length > 0 && <RecipeCard meal={data} />}</div>;
  }
}
export default Recipe;
