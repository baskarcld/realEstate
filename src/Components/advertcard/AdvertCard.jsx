import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { brokerAction, searchProperties } from '../../actions/advert';
import { NavLink } from 'react-router-dom';
import Modal from '../../Components/Form/Modal';
import video from '../../assets/images/icon/video.png';
import camera from '../../assets/images/icon/camera.png';
import properties1 from '../../assets/images/properties/properties1.jpg';

const AdvertCard = (props) => {
  const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const { advert, bookIdAdvert } = props;

  const dateFunc = (arg) => {
    var date = new Date(advert.created_at);
    return date.toDateString();
  };

  const [isOpen, setIsOpen] = useState(false);

  const bookHandler = (id, type) => {
    props.brokerAction(id, type, props.location, props.label);
  };

  return (
    <>
      {isOpen && <Modal advert={advert} setIsOpen={setIsOpen} />}
      <div className={advert.status == 2 ? 'booked' : ''}>
        <div className={advert.status == 1 ? 'reserved' : ''}>
          <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
            <div className="relative">
              <img
                src={properties1}
                className="w-full h-full"
                loading="lazy"
                width="370"
                height="266"
                alt={`${advert.isForRent ? 'For rent:' : 'For Sale:'} ${
                  advert.address
                }, ${advert.city}, ${advert.postcode}`}
              />

              <div className="flex flex-wrap flex-col absolute top-5 right-5">
                <button className="flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white mb-[5px] text-xs">
                  <img
                    className="mr-1"
                    src={camera}
                    loading="lazy"
                    width="13"
                    height="10"
                    alt="camera icon"
                  />
                  0
                </button>
                <button className="center flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white mb-[5px] text-xs">
                  <img
                    className="mr-1"
                    src={video}
                    loading="lazy"
                    width="14"
                    height="10"
                    alt="camera icon"
                  />
                  0
                </button>
                {props.authToken && props.logout && (
                  <>
                    <button
                      className="flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white mb-[5px] text-xs"
                      onClick={() => setIsOpen(true)}
                    >
                      Edit / Delete
                    </button>
                  </>
                )}
              </div>
              <span className="absolute bottom-5 left-5 bg-[#FFFDFC] p-[5px] rounded-[2px] text-secondary leading-none text-[14px] font-normal capitalize">
                {advert.status == 2 ? 'Booked' : ''}
                {advert.status == 1 && advert.status !== 2 ? 'Reserved' : ''}
                {advert.status == 0 ? 'Available' : ''}
              </span>
            </div>

            <div className="py-[20px] px-[20px]">
              <h3>
                <NavLink
                  activeClassName="active"
                  to="/home"
                  className="font-lora leading-tight text-[22px] xl:text-[26px] text-primary font-medium"
                >
                  {advert.siteName}
                </NavLink>
              </h3>
              <h4>
                <b>Address :</b> {advert.address}
                <br />
                <b>City :</b> {advert.city}
              </h4>
              <span className="font-light text-sm">
                <b>Added : </b> {dateFunc(advert.created_at)}{' '}
              </span>
              <div className="before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-full before:z-[-1] before:bg-[#E0E0E0] relative">
                <span className="font-lora text-base text-primary px-[15px] bg-white font-medium">
                  <b>Price : </b> {numberWithSpaces(advert.price)}
                  {advert.isForRent ? 'INR/month' : 'INR'}
                </span>
              </div>
              <p className="font-light">
                <b>Sqft : </b>
                {advert.sqft}
              </p>

              <div
                className="cardBtnAlign"
                style={{ margin: '20px 0px 20px 0px' }}
              >
                {props.authToken && props.logout && advert.status !== 2 && (
                  <>
                    <button
                      className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all"
                      onClick={() => bookHandler(advert.id, 'reserve')}
                    >
                      Reserve
                    </button>{' '}
                    <button
                      style={{ marginRight: '4px' }}
                      className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all"
                      onClick={() => bookHandler(advert.id, 'book')}
                    >
                      Book
                    </button>
                    <button
                      className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all"
                      onClick={() => bookHandler(advert.id, 'cancel')}
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>

              <NavLink to={`/advert/${advert.id}`} className="borderBtn">
                READ MORE
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authToken: state.authReducer.token,
    logout: state.authReducer.logout,
  };
};

export default connect(mapStateToProps, { brokerAction, searchProperties })(
  AdvertCard
);
