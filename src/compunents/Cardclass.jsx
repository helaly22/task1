import React, { Component } from "react";

export default class Cardclass extends Component {
  render() {
    return (
      <>
        <img src={this.props.logo} width={'150px'} alt="" />
        <h3>{this.props.text2}</h3>
        <h5>{this.props.text3}</h5>
      </>
    );
  }
}
