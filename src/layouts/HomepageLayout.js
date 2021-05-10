import React from "react";
import Header from "../components/Header/index";
import Footer from '../components/Footer/index'

const HomepageLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header />
          {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
