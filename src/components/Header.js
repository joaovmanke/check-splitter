import React from "react";

// TODO: THIS
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Calc />
        <Display prefix="$" />
      </div>
    );
  }
}
