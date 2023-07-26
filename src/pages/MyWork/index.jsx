import React from "react";

import { Button, Img, Text } from "components";

const MyWorkPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-museo items-center justify-start mx-auto w-full">
        <header className="bg-light_blue-500_0c flex md:flex-col md:gap-[51px] items-center justify-between mb-[918px] md:px-5 px-[50px] py-5 shadow-bs w-full">
          <Img
            className="h-[65px] md:h-auto object-cover w-[67px]"
            src="images/img_afrowhite1.png"
            alt="afrowhiteOne"
          />
          <ul className="flex flex-row gap-5 sm:hidden items-center justify-center p-2.5 shadow-bs1 w-auto common-row-list">
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold hover:text-light_blue-500 text-white-A700 text-xl"
              >
                <Text size="txtMuseo50020">Home</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold hover:text-light_blue-500 text-white-A700 text-xl"
              >
                <Text size="txtMuseo50020">About</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-light_blue-500 text-xl"
              >
                <Text size="txtMuseo70020">My Work</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold hover:text-light_blue-500 text-white-A700 text-xl"
              >
                <Text size="txtMuseo50020">Services</Text>
              </a>
            </li>
          </ul>
          <Button className="border border-light_blue-600 border-solid cursor-pointer h-10 leading-[normal] py-2 rounded-[5px] shadow-bs1 text-center text-light_blue-600 text-xl w-[200px]">
            Get In Touch
          </Button>
        </header>
      </div>
    </>
  );
};

export default MyWorkPage;
