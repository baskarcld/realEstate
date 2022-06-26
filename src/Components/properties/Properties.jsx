import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchAdverts, searchProperties } from '../../actions/advert';
import AdvertCard from '../advertcard/AdvertCard';
import BSRC from '../bsrc/BSRC';

const Properties = (props) => {
  const [cityName, setCityName] = useState(props.label);
  useEffect(() => {
    setTimeout(() => {
      props.fetchAdverts();
      props.searchProperties(props.location);
      setCityName(props.label);
    }, 500);
  }, []);
  return (
    <section className="featured-properties py-[80px] lg:py-[120px]">
      <div
        style={{
          marginTop: '200px',
          marginBottom: '50px',
          position: 'relative',
        }}
      >
        <BSRC allAdverts={props.searchedData} />{' '}
        {props.searchedData && (
          <div className="container">
            <div className="row">
              <ul className="legend_booking">
                <li>
                  <span className="booked">&nbsp;</span>Booked
                </li>
                <li>
                  <span className="reserved">&nbsp;</span>Reserved
                </li>{' '}
              </ul>
            </div>
          </div>
        )}
        <div
          className="container"
          style={{
            border: '1px solid #333',
            width: '100%',
            display: 'block',
            minHeight: '47px',
            marginTop: '50px',
          }}
        >
          {props.searchedData && (
            <div className="row">
              {props.searchedData &&
                props.searchedData.map((advert, i) => {
                  return (
                    <div
                      key={i}
                      className={advert.status == 2 ? 'bookedBg' : ''}
                    >
                      <div
                        key={i}
                        className={advert.status == 1 ? 'reservedBg' : ''}
                      >
                        <div
                          key={i}
                          className={advert.status == 0 ? 'availabledBg' : ''}
                        >
                          <div key={i}>{advert.siteName}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>

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
                <button className="leading-none capitalize text-primary hover:text-secondary transition-all text-[16px] ease-out">
                  All Properties
                </button>
              </li>
            </ul>
          </div>
          <div className="col-span-12">
            <div id="all-properties" className="properties-tab-content active">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {props.searchedData &&
                  props.searchedData.map((advert, i) => {
                    return <AdvertCard advert={advert} key={i} />;
                  })}
                {!props.searchedData &&
                  props.allAdverts.map((advert, i) => {
                    return <AdvertCard advert={advert} key={i} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    allAdverts: state.advertReducer.allAdverts,
    searchedData: state.advertReducer.searchedData,
    dropdown: state.advertReducer.dropdown,
    location: state.advertReducer.location,
    label: state.advertReducer.label,
  };
};

export default connect(mapStateToProps, { fetchAdverts, searchProperties })(
  Properties
);
