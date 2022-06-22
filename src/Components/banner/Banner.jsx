import React from 'react';
import cogs from '../../assets/images/hero/cogs.png';
import heroImg from '../../assets/images/hero/hero.png';
import shape2 from '../../assets/images/hero/shape2.svg';
import star from '../../assets/images/hero/star.png';

const Banner = () => {
  return (
    <section className="bg-[#FFF6F0] relative">
      <div className="hero-slider overflow-hidden pt-[130px] lg:pt-[80px] xl:pt-[0px] pb-[70px] lg:pb-[0px]">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide lg:h-[700px] xl:h-[960px] xs:h-[auto] flex flex-wrap items-center">
              <div className="container">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                    <div className="slider-content">
                      <div className="relative mb-5 sub_title">
                        <img
                          className="animate-animateSpin"
                          src={cogs}
                          width="62"
                          height="62"
                          alt="icon"
                        />
                        <span className="bg-[#FFF6F0] text-base text-secondary block absolute left-[28px] top-1/2 -translate-y-1/2">
                          A new way to find Properties
                        </span>
                      </div>
                      <h1 className="font-lora text-primary text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-2xl title font-medium">
                        <span>Find your Most Suitable Property</span>
                      </h1>

                      <p className="text-base text-[#494949] mt-5 mb-8 text max-w-[570px]">
                        Huge number of propreties availabe here for buy, and
                        sell, also you can find here co-living property, So you
                        have lots of opportunity
                      </p>
                      <div className="inline-block mb-7 hero_btn">
                        <a
                          href="contact-us.html"
                          className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all block"
                        >
                          Contact us
                        </a>
                      </div>
                      <span className="block font-lora hero_info">
                        <span className="text-[20px] sm:text-[22px] text-secondary">
                          Have a question?
                        </span>{' '}
                        <a
                          href="tel:9985254784"
                          className="text-[22px] sm:text-[32px] text-primary hover:underline font-semibold ml-2"
                        >
                          +0123456789
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-7 xl:col-span-6">
                    <div className="relative mt-10 md:mt-0 lg:absolute xl:right-[30px] 2xl:right-[130px] lg:top-1/2 lg:-translate-y-1/2 3xl:max-w-[830px] 2xl:max-w-[700px] xl:max-w-[630px] lg:max-w-[550px]">
                      <img
                        className="hero_image"
                        src={heroImg}
                        width="849"
                        height="739"
                        alt="hero image"
                      />

                      <svg
                        className="mysvg absolute top-[-20px] md:top-[0px] lg:top-[20px] xl:top-[38px] 2xl:top-[68px] 3xl:top-[133px] 3xl:left-[-50px] 2xl:left-[-40px] xl:left-[-40px] lg:left-[-40px] left-0"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 52 52"
                        width="52"
                        height="52"
                      >
                        <path
                          className="st0"
                          d="M2.96,30.53c-4.57,5.96,3.81,15.3,11.32,18.61c7.49,3.3,17.32,0.85,24.15-3.06  c13.78-7.89,15.38-21.63,6.69-34.15C39.86,4.34,29.33-3.09,20.4,3.8c-5.04,3.88-9.25,13.06-6.87,19.32  c1.57,4.13,11.66,10.45,14.59,4.17c2.45-5.24-7.77-5.94-8.2-10.79C19.3,9.5,28.7,8.86,32.96,10.95c8.35,4.08,9.53,19.1,2.7,25.09  c-5.01,4.39-16.54,4.55-22.15,0.92C11.34,35.55,7.83,26.66,2.96,30.53z"
                        />
                      </svg>

                      <div className="scene" data-relative-input="true">
                        <img
                          data-depth="0.2"
                          className="hero-star absolute bottom-[-55px] sm:bottom-0 lg:bottom-[150px] xl:bottom-[185px] 3xl:bottom-[250px] 3xl:left-[60px] 2xl:left-[50px] lg:left-[30px]"
                          src={shape2}
                          width="98"
                          height="74"
                          alt="icon"
                        />
                      </div>

                      <svg
                        className="orange-shape absolute bottom-[0%] lg:bottom-[120px] xl:bottom-[140px] 2xl:bottom-[150px] 3xl:bottom-[190px] 3xl:right-[135px] 2xl:right-[120px] xl:right-[110px] lg:right-[80px] right-[30px]"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 59 56"
                        width="59"
                        height="56"
                      >
                        <g>
                          <path
                            className=""
                            d="M25.76,1.27c-5.34,0-10.59,1.54-15.11,5.09C-0.23,14.91-1.08,29.98,3.7,42.08c1.32,3.35,2.95,7.45,5.62,10.18   c0.99,1.02,2.13,1.85,3.44,2.38c1.12,0.45,2.45,0.69,3.81,0.69c3.4,0,6.94-1.52,7.44-5.08c0.6-4.24-7.99-11.32-8.9-16.26   C13.16,23.47,19.02,18,25.97,18c4.89,0,10.32,2.7,13.96,8.25c2.28,3.46,7.05,9.61,11.65,9.61c1.6,0,3.18-0.74,4.63-2.6   c6.24-7.99-4.66-20.84-10.6-25.17C39.84,3.89,32.73,1.27,25.76,1.27L25.76,1.27z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-pagination"></div>
      </div>

      <img
        className="absolute left-0 bottom-0"
        src={star}
        width="112"
        height="138"
        alt="icon"
      />
    </section>
  );
};

export default Banner;
