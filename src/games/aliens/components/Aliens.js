
import React from "react";
import { connect } from "react-redux";

import Canvas from "./Canvas"

import "./Aliens.css"

const Aliens = (props) => {
  return (
    <div className="aliens">
      <div>ALIENS: {props.msg}</div>
      <Canvas />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    msg: state.aliens.msg
  }
}

export default connect(mapStateToProps)(Aliens);
