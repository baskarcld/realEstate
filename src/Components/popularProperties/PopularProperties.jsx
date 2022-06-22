import React from 'react';

import AdvertCard from '../advertcard/AdvertCard';

const PopularProperties = (props) => {
  return (
    <section className="popular-properties py-[80px] lg:py-[120px]">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            {' '}
            <span className="text-secondary text-tiny inline-block mb-2">
              Best Choice
            </span>
          </div>
          <div className="col-span-12">
            <div className="flex flex-col sm:flex-row items-start justify-between mb-[50px]">
              <div>
                <h2 className="font-lora text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize font-medium">
                  Popular Properties<span className="text-secondary">.</span>
                </h2>
              </div>
              <div>
                <a
                  href="properties-v1.html"
                  className="flex flex-wrap items-center text-secondary text-tiny"
                >
                  Explore all
                  <svg
                    className="ml-[10px]"
                    width="26"
                    height="11"
                    viewBox="0 0 26 11"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0877 0.69303L24.2075 5.00849H0V5.99151H24.2075L20.0877 10.307L20.7493 11L26 5.5L20.7493 0L20.0877 0.69303Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {props.allAdverts &&
            props.allAdverts.map((advert, i) => {
              if (advert.popular === true) {
                return <AdvertCard advert={advert} key={i} />;
              }
            })}
        </div>
      </div>
    </section>
  );
};

export default PopularProperties;
