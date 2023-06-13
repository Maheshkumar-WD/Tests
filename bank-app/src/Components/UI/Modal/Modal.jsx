import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import Card from "../Card/Card";
let Overlay = () => {
  return <div className={classes.overlay} />;
};
let ModelContent = ({ children, className }) => {
  return <Card className={className}>{children}</Card>;
};

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("root-modal")
      )}
      {ReactDOM.createPortal(
        <ModelContent className={classes["modal-content"]}>
          {children}
        </ModelContent>,
        document.getElementById("root-modal")
      )}
    </>
  );
};

export default Modal;
