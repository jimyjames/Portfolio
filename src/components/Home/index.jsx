import React from "react";

const Home = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_landingpagefive.png')" }}
      >
        <div className="h-[178px] mt-[746px] w-[14%]"></div>
      </div>
    </>
  );
};

Home.defaultProps = {};

export default Home;
