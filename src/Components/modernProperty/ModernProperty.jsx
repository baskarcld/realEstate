import React from 'react';

import aboutImg from '../../assets/images/about/about.png';
import dollar from '../../assets/images/icon/doller.png';
import modernLocation from '../../assets/images/icon/location.png';
import trusted from '../../assets/images/icon/trusted.png';

const ModernProperty = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="scene" data-relative-input="true">
              <img
                data-depth="0.1"
                src={aboutImg}
                className="2xl:ml-[-130px] mx-auto lg:max-w-[500px] xl:max-w-[729px]"
                loading="lazy"
                width="729"
                height="663"
                alt="about Image"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <span className="text-secondary text-tiny inline-block mb-2">
              Why Choose us
            </span>
            <h2 className="font-lora text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-xl capitalize mb-3 font-medium">
              We Provide Right Choice of Properties that You need
              <span className="text-secondary">.</span>
            </h2>
            <p className="max-w-[448px]">
              Huge number of propreties availabe here for buy, sell and Rent.
              Also you find here co-living property so lots opportunity you have
              to choose here and enjoy huge discount.{' '}
            </p>

            <div className="-mb-10 mt-[45px]">
              <div className="flex flex-wrap mb-5 lg:mb-10">
                <img
                  src={dollar}
                  className="self-start mr-5"
                  loading="lazy"
                  width="50"
                  height="50"
                  alt="about Image"
                />
                <div className="flex-1">
                  <h3 className="font-lora text-primary text-[22px] xl:text-lg capitalize mb-2">
                    Budget Friendly
                  </h3>
                  <p className="max-w-[315px]">
                    Properties are most budget friendly so you have opportunity
                    to find the best one
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap mb-5 lg:mb-10">
                <img
                  src={modernLocation}
                  className="self-start mr-5"
                  loading="lazy"
                  width="50"
                  height="50"
                  alt="about Image"
                />
                <div className="flex-1">
                  <h3 className="font-lora text-primary text-[22px] xl:text-lg capitalize mb-2">
                    Prime Location
                  </h3>
                  <p className="max-w-[315px]">
                    Properties are most budget friendly so you have opportunity
                    to find the best one
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap mb-5 lg:mb-10">
                <img
                  src={trusted}
                  className="self-start mr-5"
                  loading="lazy"
                  width="50"
                  height="50"
                  alt="about Image"
                />
                <div className="flex-1">
                  <h3 className="font-lora text-primary text-[22px] xl:text-lg capitalize mb-2">
                    Trusted by Thousand
                  </h3>
                  <p className="max-w-[315px]">
                    Properties are most budget friendly so you have opportunity
                    to find the best one
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProperty;
