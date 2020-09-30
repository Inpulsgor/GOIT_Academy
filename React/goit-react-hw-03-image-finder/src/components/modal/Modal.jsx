import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeOnPressEsc);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeOnPressEsc);
  }

  closeOnPressEsc = ({ code }) => code === "Escape" && this.props.onClose();
  
  closeOnClickOverlay = ({ target: { nodeName } }) =>
    nodeName !== "IMG" && this.props.onClose();

  render() {
    const { largeImage } = this.props;
    const {Overlay, Modal} = styles;
    return (
        <div onClick={this.closeOnClickOverlay} className={Overlay}>
          <div className={Modal}>
            <img src={largeImage} alt="" />
          </div>
        </div>
    );
  }
}

export default Modal;
