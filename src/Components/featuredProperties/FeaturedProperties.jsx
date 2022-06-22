import React from 'react';

import AdvertCard from '../advertcard/AdvertCard';

const FeaturedProperties = (props) => {
  return (
    <section className="featured-properties py-[80px] lg:py-[120px]">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <span className="text-secondary text-tiny inline-block mb-2">
              Newly Added
            </span>
          </div>
          <div className="col-span-12 flex flex-wrap flex-col md:flex-row items-start justify-between mb-[50px]">
            <div className="mb-5 lg:mb-0">
              <h2 className="font-lora text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize font-medium">
                Featured Properties<span className="text-secondary">.</span>
              </h2>
            </div>
            <ul className="all-properties flex flex-wrap lg:pt-[10px]">
              <li
                data-tab="all-properties"
                className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none active"
              >
                <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                  All Properties
                </button>
              </li>
              <li
                data-tab="ForBuy"
                className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none"
              >
                <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                  For Buy
                </button>
              </li>
              <li
                data-tab="ForSale"
                className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none"
              >
                <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                  For Sale
                </button>
              </li>
              <li
                data-tab="ForRent"
                className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none"
              >
                <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                  For Rent
                </button>
              </li>
              <li
                data-tab="co-living2"
                className="md:mr-[0px] mb-4 lg:mb-0 leading-none"
              >
                <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                  Co-living
                </button>
              </li>
            </ul>
          </div>
          <div className="col-span-12">
            <div id="all-properties" className="properties-tab-content active">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {props.allAdverts &&
                  props.allAdverts.map((advert, i) => {
                    if (advert.featured === true) {
                      return <AdvertCard advert={advert} key={i} />;
                    }
                  })}
              </div>
            </div>

            <div id="ForBuy" className="properties-tab-content">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                AAA
              </div>
            </div>

            <div id="ForSale" className="properties-tab-content">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                BBB
              </div>
            </div>
            <div id="ForRent" className="properties-tab-content">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                CCC
              </div>
            </div>
            <div id="co-living2" className="properties-tab-content">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                DDD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
