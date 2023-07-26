import React from "react";

import { Button, Img, Text } from "components";
import Header1 from "components/Header1";

const AboutTwoPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-museo h-[1024px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_aboutone.png')" }}
      >
        <div className="flex flex-col items-center justify-start mb-10 w-full">
          <Header1 className="bg-light_blue-500_0c flex md:flex-col md:gap-[51px] items-center justify-between md:px-5 px-[50px] py-5 shadow-bs w-full" />
          <div className="bg-black-900_05 flex flex-col items-start justify-start max-w-[1340px] mt-[42px] mx-auto p-[50px] md:px-5 rounded-[10px] shadow-bs w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between w-full">
                    <Text
                      className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      Graphic Design
                    </Text>
                    <Text
                      className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      Adobe Creative Suite
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-start justify-between mt-[5px] w-full">
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between mt-3.5 w-full">
                    <Text
                      className="bg-white-A700_4c h-10 justify-center pb-0.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      User Research
                    </Text>
                    <Text
                      className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      MS Office
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-start justify-between mt-[5px] w-full">
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between mt-[13px] w-full">
                    <Text
                      className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      Prototyping
                    </Text>
                    <Text
                      className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      Corel draw
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-start justify-between mt-[5px] w-full">
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between mt-[13px] w-full">
                    <Text
                      className="bg-white-A700_4c h-10 justify-center pb-0.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      Video Editing
                    </Text>
                    <Text
                      className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      Figma
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-start justify-between mt-[5px] w-full">
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="md:gap-5 gap-[18px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-3.5 w-full">
                    <div className="bg-white-A700_4c flex flex-1 flex-col justify-start rounded-[5px] w-full">
                      <Text
                        className="ml-2.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                        size="txtMuseo50032Black90099"
                      >
                        Brand & Marketing Strategy
                      </Text>
                      <div className="h-px mt-[3px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-yellow_800"></div>
                        <div
                          className="h-full absolute bg-light_blue_500"
                          style={{ width: "79%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white-A700_4c flex flex-1 flex-col justify-start rounded-[5px] w-full">
                      <Text
                        className="ml-2.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                        size="txtMuseo50032Black90099"
                      >
                        Lunacy
                      </Text>
                      <div className="h-px mt-[3px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-yellow_800"></div>
                        <div
                          className="h-full absolute bg-light_blue_500"
                          style={{ width: "79%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white-A700_4c flex flex-1 flex-col justify-start rounded-[5px] w-full">
                      <Text
                        className="ml-2.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                        size="txtMuseo50032Black90099"
                      >
                        Event Planning and Management
                      </Text>
                      <div className="h-px mt-[3px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-yellow_800"></div>
                        <div
                          className="h-full absolute bg-light_blue_500"
                          style={{ width: "79%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white-A700_4c flex flex-1 flex-col justify-start rounded-[5px] w-full">
                      <Text
                        className="ml-2.5 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 text-shadow-ts6"
                        size="txtMuseo50032Black90099"
                      >
                        Sony Vegas
                      </Text>
                      <div className="h-px mt-[3px] overflow-hidden relative w-full">
                        <div className="w-full h-full absolute bg-yellow_800"></div>
                        <div
                          className="h-full absolute bg-light_blue_500"
                          style={{ width: "79%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between mt-[19px] w-full">
                    <Text
                      className="bg-white-A700_4c h-10 justify-center pb-0.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      Advertising
                    </Text>
                    <Text
                      className="bg-white-A700_4c h-[41px] justify-center pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                      size="txtMuseo50032Black90099"
                    >
                      HTML & CSS
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-start justify-between mt-1 w-full">
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                    <div className="h-px overflow-hidden relative w-1/2">
                      <div className="w-full h-full absolute bg-yellow_800"></div>
                      <div
                        className="h-full absolute bg-light_blue_500"
                        style={{ width: "79%" }}
                      ></div>
                    </div>
                  </div>
                  <Text
                    className="bg-white-A700_4c h-[41px] justify-center mt-3.5 pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                    size="txtMuseo50032Black90099"
                  >
                    Research & Insights
                  </Text>
                  <div className="h-px mt-[5px] overflow-hidden relative w-1/2">
                    <div className="w-full h-full absolute bg-yellow_800"></div>
                    <div
                      className="h-full absolute bg-light_blue_500"
                      style={{ width: "79%" }}
                    ></div>
                  </div>
                  <Text
                    className="bg-white-A700_4c h-10 justify-center mt-3.5 pb-0.5 pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                    size="txtMuseo50032Black90099"
                  >
                    Web Content Development
                  </Text>
                  <div className="h-px mt-[5px] overflow-hidden relative w-1/2">
                    <div className="w-full h-full absolute bg-yellow_800"></div>
                    <div
                      className="h-full absolute bg-light_blue_500"
                      style={{ width: "79%" }}
                    ></div>
                  </div>
                  <Text
                    className="bg-white-A700_4c h-[41px] justify-center mt-3.5 pb-[3px] pl-2.5 sm:pr-5 pr-[35px] rounded-[5px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_99 w-[615px]"
                    size="txtMuseo50032Black90099"
                  >
                    Social Media Management
                  </Text>
                  <div className="h-px mt-[5px] overflow-hidden relative w-1/2">
                    <div className="w-full h-full absolute bg-yellow_800"></div>
                    <div
                      className="h-full absolute bg-light_blue_500"
                      style={{ width: "79%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-light_blue-500_0c cursor-pointer font-semibold leading-[normal] min-w-[1438px] md:min-w-full mt-[65px] py-[18px] shadow-bs text-4xl sm:text-[32px] md:text-[34px] text-center text-light_blue-500">
            Skills & Tools
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutTwoPage;
