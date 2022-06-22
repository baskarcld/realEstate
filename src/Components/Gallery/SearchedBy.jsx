import React, { Fragment, useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';

import AdvertCard from '../advertcard/AdvertCard';

import ViewMap from '../map/ViewMap';

import '../../seats.css';
const initialState = {
  offset: 0,
  limit: 12,
  search: {},
};
const MainPage = (props) => {
  //console.log(props.allAdverts);

  const [state, setState] = useState(initialState);
  const [seatAvailable, setSeatAvailable] = useState([]);
  const [seatReserved, setSeatReserved] = useState([]);
  const [seatSelected, setSeatSelected] = useState([]);
  const [bookState, setBookState] = useState(true);

  // console.log('seatAvailable', seatAvailable);
  // console.log('seatReserved', seatReserved);
  //console.log('reserveSite', reserveSite);
  const onClickData = (advert) => {
    if (seatReserved.indexOf(advert) > -1) {
      setSeatAvailable([...seatAvailable, advert]);
      let tempReserve =
        seatReserved && seatReserved.filter((res) => res != advert);
      setSeatReserved(tempReserve);
    } else {
      setSeatReserved([...seatReserved, advert]);
      let tempAvailable =
        seatAvailable && seatAvailable.filter((res) => res != advert);
      setSeatAvailable(tempAvailable);
    }
  };
  const checktrue = (row) => {
    if (seatSelected.indexOf(row) > -1) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmited = () => {
    setSeatSelected([...seatSelected, seatReserved]);
    setSeatReserved([]);
  };

  const onClickSeat = (advert) => {
    onClickData(advert);
  };

  useEffect(() => {
    setTimeout(() => {
      switch (props.match.params.keyword) {
        case 'city':
          const { keyword, value } = props.match.params;

          if (props.allAdverts) {
            if (props.allAdverts.length !== 0) {
              setState({
                ...state,
                offset: props.allAdverts.length,
              });
            } else {
              setState(initialState);
              props.fetchAdvertsBySearchTerm(
                state.offset,
                keyword,
                value,
                props.location.state
              );

              setState({ offset: state.offset + state.limit });
            }
          } else {
            props.fetchAdvertsBySearchTerm(
              0,
              keyword,
              value,
              props.location.state
            );
            setState({ offset: state.offset + state.limit });
          }
          break;
        default:
          break;
      }
    }, 500);
  }, []);
  useEffect(() => {
    setSeatAvailable(props.allAdverts);
  }, [props.allAdverts]);

  console.log(props.bookIdAdvert);

  const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const handleLanguage = (data) => {
    props.reserveAction(data.id);
  };

  return (
    <Fragment>
      <div className="container  py-[80px] lg:py-[120px]">
        <div className="grid cols-12 gap-[30px]">
          {props.allAdverts && (
            <ViewMap
              lat={props.allAdverts[1].lat}
              lon={props.allAdverts[1].lon}
              pointer={`${props.allAdverts[1].address}, ${props.allAdverts[1].city}, ${props.allAdverts[1].postcode}`}
            />
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {props.allAdverts &&
            props.allAdverts.map((advert, i) => {
              if (advert.advert_images && advert.advert_images.length !== 0) {
                advert.image = advert.advert_images[0].image.url;
              }

              return (
                <div
                  // className={
                  //   seatSelected.indexOf(advert) > -1
                  //     ? 'sold'
                  //     : seatReserved.indexOf(advert) > -1
                  //     ? 'reserved'
                  //     : 'available'
                  // }
                  // className={
                  //   props && props.bookIdAdvert == advert.id
                  //     ? 'sold'
                  //     : 'available'
                  // }
                  key={i}
                  // onClick={
                  //   checktrue(advert) ? (e) => onClickSeat(advert) : null
                  // }
                >
                  <AdvertCard
                    bookIdAdvert={props.bookIdAdvert}
                    onSelectLanguage={handleLanguage}
                    bookState={bookState}
                    advert={advert}
                    key={i}
                  />
                </div>
              );
            })}
        </div>
        <button
          className="btn btn-success btnmargin"
          onClick={() => handleSubmited()}
        >
          Confirm Booking
        </button>
      </div>
    </Fragment>
  );
};

export default MainPage;
