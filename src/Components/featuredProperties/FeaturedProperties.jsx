import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchAdverts, searchProperties } from '../../actions/advert';
import { NavLink } from 'react-router-dom';

import AdvertCard from '../advertcard/AdvertCard';

const FeaturedProperties = (props) => {
  const search = useLocation().search;
  const cityName = new URLSearchParams(search).get('cityQStr');
  const [qValue, setqValue] = useState(cityName);
  useEffect(() => {
    setTimeout(() => {
      // props.fetchAdverts();
      // props.searchProperties(props.location);
      setqValue(cityName ? cityName : props.label);
    }, 500);
  }, []);
  console.log(props.searchedData);
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
                All Properties : {props.label}
                <span className="text-secondary">.</span>
              </h2>
            </div>
            <ul className="all-properties flex flex-wrap lg:pt-[10px]">
              <li
                data-tab="ForBuy"
                className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none"
              >
                <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                  Only Featured
                </button>
              </li>
              <li
                data-tab="all-properties"
                className="mr-[30px] md:mr-[45px] mb-4 lg:mb-0 leading-none active"
              >
                <NavLink
                  activeClassName="active"
                  to="/properties"
                  className="transition-all hover:text-secondary"
                >
                  All Properties
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-span-12">
            <div id="all-properties" className="properties-tab-content active">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {props.searchedData &&
                  props.searchedData.map((advert, i) => {
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

const mapStateToProps = (state) => {
  console.log(state.advertReducer.label);
  return {
    searchedData: state.advertReducer.searchedData,

    location: state.advertReducer.location,
    label: state.advertReducer.label,
  };
};

export default connect(mapStateToProps, { fetchAdverts, searchProperties })(
  FeaturedProperties
);
