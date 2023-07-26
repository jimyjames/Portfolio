import React from "react";

import { Button, Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[65px] md:h-auto object-cover w-[67px]"
          src="images/img_afrowhite1.png"
          alt="afrowhiteOne"
        />
        <ul className="flex flex-row gap-5 sm:hidden items-center justify-center p-2.5 shadow-bs1 w-auto common-row-list">
          <li>
            <Text className="text-white-A700 text-xl" size="txtMuseo50020">
              Home
            </Text>
          </li>
          <li>
            <Text className="text-white-A700 text-xl" size="txtMuseo50020">
              About
            </Text>
          </li>
          <li>
            <Text className="text-white-A700 text-xl" size="txtMuseo50020">
              My Work
            </Text>
          </li>
          <li>
            <Text className="text-white-A700 text-xl" size="txtMuseo50020">
              Services
            </Text>
          </li>
        </ul>
        <Button className="border border-light_blue-600 border-solid cursor-pointer font-museo h-10 leading-[normal] py-2 rounded-[5px] shadow-bs1 text-center text-light_blue-600 text-xl w-[200px]">
          Get In Touch
        </Button>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
