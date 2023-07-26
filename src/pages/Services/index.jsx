import React from "react";

import { Button, Img, Text } from "components";

const ServicesPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-museo h-[1024px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_services.png')" }}
      >
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <div className="flex flex-col md:gap-10 gap-[247px] items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                  <div className="overflow-x-auto w-full">
                    <div className="h-[119px] md:px-5 px-[50px] py-5 relative w-[1432px] md:w-full">
                      <div className="h-[119px] my-auto pr-2 w-full">
                        <div className="absolute h-[119px] inset-y-[0] my-auto right-[7%] w-[92%] md:w-full">
                          <div className="bg-light_blue-500_0c h-[119px] m-auto shadow-bs w-full"></div>
                          <Img
                            className="absolute h-[65px] inset-y-[0] left-[3%] my-auto object-cover w-[67px]"
                            src="images/img_afrowhite1.png"
                            alt="afrowhiteOne"
                          />
                        </div>
                        <div className="absolute flex flex-row gap-5 h-max inset-y-[0] items-center justify-center left-[0] my-auto p-2.5 shadow-bs1 w-auto">
                          <Text
                            className="text-white-A700 text-xl w-auto"
                            size="txtMuseo50020"
                          >
                            Home
                          </Text>
                          <Text
                            className="text-white-A700 text-xl w-auto"
                            size="txtMuseo50020"
                          >
                            About
                          </Text>
                          <Text
                            className="text-white-A700 text-xl w-auto"
                            size="txtMuseo50020"
                          >
                            My Work
                          </Text>
                          <Text
                            className="text-light_blue-500 text-xl w-auto"
                            size="txtMuseo70020"
                          >
                            Services
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bg-light_blue-500_0c flex flex-row h-max inset-[0] items-center justify-center m-auto md:px-10 sm:px-5 px-[608px] py-[18px] shadow-bs w-auto">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-light_blue-500 text-shadow-ts7 w-auto"
                            size="txtMuseo70036"
                          >
                            Skills & Tools
                          </Text>
                          <Button className="border border-light_blue-600 border-solid cursor-pointer h-10 leading-[normal] py-2 rounded-[5px] shadow-bs1 text-center text-light_blue-600 text-xl w-[200px]">
                            Get In Touch
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center max-w-[1439px] py-2.5 w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-shadow-ts5 text-white-A700 w-auto"
                      size="txtMuseo50048WhiteA700"
                    >
                      <>&quot;Everything you can imagine is real.&quot;</>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center max-w-[1439px] py-2.5 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-light_blue-500 text-shadow-ts8 sm:text-xl"
                    size="txtMuseo50024"
                  >
                    <>
                      It&#39;s always amazing to be in this space and from void,
                      we make something <br />
                      that never existed before this very moment. <br />
                      Creation is how we are here and also why we are here.
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between max-w-[1438px] p-2.5 w-full">
              <Text
                className="text-center text-shadow-ts6 text-white-A700 text-xl"
                size="txtMuseo50020"
              >
                <span className="md:text-[22px] sm:text-xl text-gray-900 font-museo text-2xl font-normal">
                  <>
                    On Screen?
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-museo font-normal">
                  <>
                    UI /UX Design, Digital Wallpapers, Social media imagery, E
                    cards, Static and Motion graphics
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-900 font-museo text-2xl font-normal">
                  <>
                    Anything paper?
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-museo font-normal">
                  <>
                    Posters, flyers, brochures, letterheads, magazines, cards
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-900 font-museo text-2xl font-normal">
                  <>
                    Out of Home media?
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-museo font-normal">
                  <>
                    Banners, outdoor street Furniture, Transit Advertising (all
                    vehicles)
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-900 font-museo text-2xl font-normal">
                  <>
                    Premise Branding Assets?
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-museo font-normal">
                  <>
                    Window graphics, Signage, Point of Sale Displays, Floor
                    Graphics, Directories, Light boxes
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-900 font-museo text-2xl font-normal">
                  <>
                    Event logistics?
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-museo font-normal">
                  <>
                    Backdrop banners, Roll up banners, Telescopic banners,
                    Tickets, Booths , Tyvek bands
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-900 font-museo text-2xl font-normal">
                  <>
                    Collateral?
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-museo font-normal">
                  <>
                    Pens, Keyholders, Mugs, USB drives, power banks, Mouse pads,
                    wristbands, wall clocks, coasters, lanyards
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-900 font-museo text-2xl font-normal">
                  <>
                    Fabrics and Textiles?
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-museo font-normal">
                  T-shirts, Flags, Jerseys, Lesos, Caps & Hats, Aprons,
                  Overalls, Bandanas, Headwraps
                </span>
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="absolute bottom-[0] h-[523px] object-cover right-[0]"
          src="images/img_polygon1.png"
          alt="polygonOne"
        />
        <Img
          className="absolute h-[136px] right-[9%] top-[22%] w-[136px]"
          src="images/img_rectangle9.svg"
          alt="rectangleNine"
        />
        <div className="absolute border-[5px] border-dashed border-white-A700_87 h-[380px] left-[4%] md:px-5 rounded-[50%] top-[19%] w-[380px]"></div>
      </div>
    </>
  );
};

export default ServicesPage;
