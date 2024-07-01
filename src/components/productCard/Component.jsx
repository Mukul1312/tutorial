import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = ({
  width = 300,
  image1 = images.image1,
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
}) => {
  const ref = useRef(null);
  const updateWidth = (width) => {
    if (ref.current) {
      ref.current.style.setProperty("--custom-width", `${width}px`);
    }
  };
  useEffect(() => {
    updateWidth(width);
    runAnimations();
  }, [ref]);

  return (
    <div
      className="wrapper-div-11092840 relative overflow-hidden m-auto p-[0px] box-border"
      ref={ref}
    >
      <div className=" absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden rounded-tl-[16.666664123535156px] rounded-tr-[16.666664123535156px] rounded-br-[16.666664123535156px] rounded-bl-[16.666664123535156px] bg-[#ffffffff]  ">
        <img
          src={`${image1}`}
          className="absolute bg-transparent bg-center bg-no-repeat w-full h-full bg-cover nodeBg-11092840 object-cover "
          alt="Product Listing Nike Shoes Image"
        />
        {/* bottom-card-body1 */}
        <section className=" absolute w-[100%] h-[33.71%] top-[66.29%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   bg-[#000000ff]  ">
          <div className=" absolute w-[73.56%] h-[36.67%] top-[-18.33%] left-[26.44%] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden  ">
            <div className=" absolute w-[13.98%] h-[76.9%] top-[11.55%] left-[45.2%] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden rounded-tl-[38.56531524658203px] rounded-tr-[38.56531524658203px] rounded-br-[38.56531524658203px] rounded-bl-[38.56531524658203px] bg-[#f2f2f2ff]  ">
              <div className=" absolute w-[45.02%] h-[45.09%] top-[27.45%] left-[27.49%] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden  ">
                <div className=" absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                  <div className="nodeBg-11092903  absolute top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" absolute w-[33.35%] h-[33.3%] top-[33.24%] left-[33.29%] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden  ">
                  <div className="nodeBg-11092904  absolute top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
            <div className=" absolute w-[13.98%] h-[76.9%] top-[11.55%] left-[62.3%] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden rounded-tl-[38.56531524658203px] rounded-tr-[38.56531524658203px] rounded-br-[38.56531524658203px] rounded-bl-[38.56531524658203px] bg-[#f2f2f2ff]  ">
              <div className=" absolute w-[49.13%] h-[39.9%] top-[30.05%] left-[25.43%] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                <div className="nodeBg-11092906  absolute top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
            </div>
            <div className=" absolute w-[13.98%] h-[76.9%] top-[11.55%] left-[79.41%] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden rounded-tl-[38.56531524658203px] rounded-tr-[38.56531524658203px] rounded-br-[38.56531524658203px] rounded-bl-[38.56531524658203px] bg-[#f2f2f2ff]  ">
              <div className=" absolute w-[45%] h-[45%] top-[27.5%] left-[27.5%] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                <div className="nodeBg-11092908  absolute top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>
          <div className=" absolute w-[39.06%] h-[55.4%] top-[25.71%] left-[6.94%] opacity-[1] z-[0]  rotate-[0deg]    ">
            <div className=" absolute w-[99.85%] h-[44.54%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-right leading-[0px]  ">
              <span className="nike-shoes-11092843-0 ">{text1}</span>
            </div>
            <div className=" absolute w-[64.01%] h-[44.54%] top-[53.37%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-right leading-[0px]  ">
              <span className="c-9770-11092844-0 ">{text2}</span>
            </div>
          </div>
          <div className=" absolute w-[34.72%] h-[35.83%] top-[32.92%] left-[60.49%] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[3.3333330154418945px] rounded-tr-[3.3333330154418945px] rounded-br-[3.3333330154418945px] rounded-bl-[3.3333330154418945px] box-border border-l-[1.6666665077209473px] border-l-[#ffffffff] border-r-[1.6666665077209473px] border-r-[#ffffffff] border-t-[1.6666665077209473px] border-t-[#ffffffff] border-b-[1.6666665077209473px] border-b-[#ffffffff]  ">
            <div className=" absolute w-[74.87%] h-[33.16%] top-[33.72%] left-[12.8%] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]  ">
              <span className="add-to-cart-11092917-0 ">{text3}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Component;
