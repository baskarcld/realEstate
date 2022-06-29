import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAdverts, searchProperties } from '../../actions/advert';
import BSRC from '../bsrc/BSRC';
import Banner from '../banner/Banner';
import { useLocation } from 'react-router-dom';
import ModernProperty from '../modernProperty/ModernProperty';
import FeaturedProperties from '../featuredProperties/FeaturedProperties';
import HomeVideo from '../homeVideo/HomeVideo';

import FooterSearch from '../footerSearch/FooterSearch';

const BannerContainer = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.fetchAdverts();
      props.searchProperties(1);
    }, 500);
  }, []);

  return (
    <>
      <Banner />
      <BSRC />
      <br />

      <FeaturedProperties />

      <HomeVideo />

      <FooterSearch />

      <a
        id="scrollUp"
        className="w-12 h-12 rounded-full bg-primary text-white fixed right-5 bottom-16 flex flex-wrap items-center justify-center transition-all duration-300 z-10"
        href="#"
        aria-label="scroll up"
      >
        <svg
          width="25"
          height="25"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z" />
        </svg>
      </a>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allAdverts: state.advertReducer.allAdverts,
    advertsCount: state.advertReducer.advertsCount,
    pageCount: state.advertReducer.pageCount,
    searchedData: state.advertReducer.searchedData,
    label: state.advertReducer.label,
  };
};

export default connect(mapStateToProps, { fetchAdverts, searchProperties })(
  BannerContainer
);
