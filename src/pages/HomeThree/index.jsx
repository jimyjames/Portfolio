import React from "react";

import { Button, Img, Text } from "components";
import Header2 from "components/Header2";

const HomeThreePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-museo h-[1024px] items-center justify-start mx-auto pb-[203px] w-full"
        style={{ backgroundImage: "url('images/img_homeeight.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[179px] justify-start w-full">
          <div className="flex flex-col md:gap-10 gap-[131px] justify-start w-full">
            <Header2 className="bg-white-A700_0c flex md:flex-col md:gap-[51px] items-center justify-between md:px-5 px-[50px] py-5 shadow-bs w-full" />
            <div className="flex h-48 md:h-[182px] justify-end md:ml-[0] ml-[509px] pt-2.5 md:px-5 relative w-[61%] md:w-full">
              <Text
                className="mt-auto mx-auto md:text-5xl text-[80px] text-right text-shadow-ts text-white-A700"
                size="txtMuseo50080"
              >
                <>
                  Transforming the way <br />
                  is defined.
                </>
              </Text>
              <div className="absolute bottom-[0] h-[87px] left-[23%] w-[32%]">
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto md:text-5xl text-[80px] text-light_blue-500 text-right text-shadow-ts1 w-max"
                  size="txtMuseo50080Lightblue500"
                >
                  Design
                </Text>
                <Img
                  className="absolute bottom-[2%] h-7 right-[0] w-7"
                  src="images/img_ticket.svg"
                  alt="ticket"
                />
                <Img
                  className="absolute h-7 left-[0] top-[9%] w-7"
                  src="images/img_vector1.svg"
                  alt="vectorOne"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[50px] p-2.5 md:px-5 w-auto md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-500_cc text-shadow-ts2"
              size="txtMuseo50032"
            >
              <>
                Connecting strategy with agile technology delivery <br />
                to bring your organization the most valuable <br />
                design experience.
              </>
            </Text>
            <Button className="border border-light_blue-500 border-solid cursor-pointer h-[60px] leading-[normal] py-[11px] rounded-[5px] shadow-bs2 md:text-3xl sm:text-[28px] text-[32px] text-center text-light_blue-500 w-[280px]">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeThreePage;
