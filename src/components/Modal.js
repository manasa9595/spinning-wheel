import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const BackgroundStyle = {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 1,
      transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      zIndex: 999
    };

    const ModalStyle = {
      position: "relative",
      maxWidth: 828,
      minHeight: 320,
      backgroundColor: "#fff",
      margin: "273px 41px auto",
      borderRadius: "4px",
      boxShadow: "0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)"
    }; 

    const HeaderStyle = {
      position: "absolute",
      right: "46%",
      top: '108%'
    };

    const CloseBtnStyle = {
      cursor: "pointer",
      display: "block",
      paddingLeft: "8px",
      fontSize: "17px",
      width: "29px",
      height: "29px",
      zIndex: "9999",
      color: "#fff6f6",
      border: "2px solid #fff6f6",
      borderRadius: "100%",
      fontWeight: "bold"
    };
    return (
      <div style={BackgroundStyle}>
        <div style={ModalStyle}>
          <div className="close-button" style={HeaderStyle}>
            <span style={CloseBtnStyle} onClick={this.props.onClose}>
              X
            </span>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes  = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
