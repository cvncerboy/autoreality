import React, { Component } from "react";
import Title from "./Title";
import Image from "./Image";
export default class RecipeCard extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((item, index) => {
          return (
            <a key={index} href={item.null}>
              <Image source={item.foodImgUrl} text={item.foodName} />
              <Title title={item.foodName} />
            </a>
          );
        })}
      </div>
    );
  }
}
