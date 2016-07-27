/* eslint-disable global-require */
import React from "react";
import Radium, { Style, StyleRoot } from "radium";
import { Header, Footer } from "formidable-landers";

import stylesheet from "../playbook-stylesheet";
import theme from "../playbook-theme";

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const styleRootStyles = {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    };

    return (
      <StyleRoot style={styleRootStyles}>
        <Header
          background={theme.white}
          linkStyles={{
            color: theme.charcoal,
            fontFamily: theme.serif,
            textDecoration: "none",
            ":hover": {
              color: theme.red
            }
          }}
        />
        {this.props.children}
        <Footer background={`${theme.white} url('./static/footer.jpg') no-repeat top center`} />
        <Style rules={stylesheet} />
      </StyleRoot>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
  location: React.PropTypes.object.isRequired
};

export default Radium(App);
