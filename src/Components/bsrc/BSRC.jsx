import React, { Component } from 'react';
import { withRouter } from 'react-router';
import location from '../../assets/images/icon/location.svg';
import property from '../../assets/images/icon/property.svg';
import dollarCircle from '../../assets/images/icon/dollar-circle.svg';
import area from '../../assets/images/icon/area.svg';

const initialState = {
  city: '',
  priceFrom: 1,
  priceTo: 10000000,
  forRent: true,
  forSale: true,
  noSearchTerm: false,
  minMoreThenMax: false,
  noRentNoSale: false,
};
class BSRC extends Component {
  state = initialState;

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  searchByCityname = (e) => {
    e.preventDefault();
    if (this.state.priceFrom > this.state.priceTo) {
      this.setState({
        ...this.state,
        minMoreThenMax: true,
      });
      return;
    }
    if (!this.state.forRent && !this.state.forSale) {
      this.setState({
        ...this.state,
        noRentNoSale: true,
      });
      return;
    }
    if (this.state.city === '') {
      this.props.history.push({
        pathname: `/search/city/any`,
        state: this.state,
      });
      return;
    }
    this.props.history.push({
      pathname: `/search/city/${this.state.city.trim()}`,
      state: this.state,
    });
  };

  forSaleOrRent = (action) => {
    switch (action) {
      case 'RENT':
        this.setState({
          ...this.state,
          forRent: !this.state.forRent,
        });
        break;
      case 'SALE':
        this.setState({
          ...this.state,
          forSale: !this.state.forSale,
        });
        break;
      default:
        break;
    }
  };

  componentWillUnmount() {
    this.setState(initialState);
  }
  render() {
    return (
      <div className="mt-[80px] lg:mt-[120px] xl:mt-[-160px] relative z-[2] pl-[40px] lg:pl-[50px] xl:pl-[0px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 relative">
              <ul className="tab-nav search-tab inline-flex px-[15px] sm:px-[30px] py-[22px] border-l border-t border-r border-solid border-[#016450] border-opacity-25 rounded-tl-[15px] rounded-tr-[15px] bg-white">
                <li
                  data-tab="buy"
                  className="mr-[5px] sm:mr-[10px] md:mr-[46px] my-1 active"
                >
                  <button className="font-lora leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-32px] before:w-0 before:h-[2px] before:content-[''] before:bg-secondary relative before:transition-all ease-out">
                    Advanced Search
                  </button>
                </li>
              </ul>

              <button
                className="tab-toggle-btn px-[10px] py-[15px] absolute bottom-[-56px] left-[-45px] border-l border-t border-b border-solid border-[#016450] bg-white text-primary border-opacity-25 rounded-tl-[10px] rounded-bl-[10px]"
                aria-label="svg icon"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 22V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 7V2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22V17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13V2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 22V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 7V2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 11H7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 11H21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 13H14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="col-span-12 selectricc-border-none">
              <div
                id="buy"
                className="tab-content bg-white border border-solid border-[#016450] border-opacity-25 rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px] px-[15px] sm:px-[30px] py-[40px] active"
              >
                <form
                  className="form-inline"
                  onSubmit={(e) => this.searchByCityname(e)}
                >
                  <div className="advanced-searrch flex flex-wrap items-center -mb-[45px]">
                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src={location}
                          width="24"
                          height="24"
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="location"
                          className="font-lora block capitalize text-primary text-[17px] xl:text-[24px] leading-none mb-1"
                        >
                          City Name
                        </label>

                        <input
                          className="form-control text-tiny placeholder:text-body leading-none font-light pr-3 focus:outline-none w-full"
                          type="search"
                          placeholder="Input City Name"
                          aria-label="Search"
                          name="city"
                          onChange={this.handleChange}
                          value={this.state.city}
                        />
                      </div>
                    </div>

                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src={property}
                          width="24"
                          height="24"
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="property"
                          className="font-lora block capitalize text-primary text-[17px] xl:text-[24px] leading-none mb-1"
                        >
                          Price From
                        </label>

                        <input
                          className="form-control  text-tiny placeholder:text-body leading-none font-light pr-3 focus:outline-none w-full"
                          type="number"
                          placeholder="Price From"
                          aria-label="Search"
                          name="priceFrom"
                          onChange={this.handleChange}
                          value={this.state.priceFrom}
                          min="1"
                        />
                      </div>
                    </div>

                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px]">
                      <div className="mr-4 self-start shrink-0">
                        <img
                          src={dollarCircle}
                          width="24"
                          height="24"
                          alt="svg icon"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor="price"
                          className="font-lora block capitalize text-primary text-[17px] xl:text-[24px] leading-none mb-1"
                        >
                          Price To
                        </label>
                        <input
                          className="form-control text-tiny placeholder:text-body leading-none font-light pr-3 focus:outline-none w-full"
                          type="number"
                          placeholder="Price To"
                          aria-label="Search"
                          name="priceTo"
                          onChange={this.handleChange}
                          value={this.state.priceTo}
                          min="10"
                        />
                      </div>
                    </div>

                    <div className="advanced-searrch-list flex items-center lg:border-r lg:border-[#D6D4D4] lg:mr-[40px] xl:mr-[50px] last:mr-0 last:border-r-0 mb-[45px] relative">
                      <div className="mr-4 self-start shrink-0">
                        <img src={area} width="24" height="24" alt="svg icon" />
                      </div>

                      <div className="flex-1">
                        <div className="d-flex align-items-end col-md-3">
                          <button
                            type="button"
                            className={`btnAlign btn ml-2 ${
                              this.state.forRent
                                ? 'btn-success'
                                : 'btn-outline-warning'
                            }`}
                            onClick={() => this.forSaleOrRent('RENT')}
                          >
                            For Rent
                          </button>
                          <button
                            type="button"
                            className={`btnAlign btn ml-2 ${
                              this.state.forSale
                                ? 'btn-success'
                                : 'btn-outline-warning'
                            }`}
                            onClick={() => this.forSaleOrRent('SALE')}
                          >
                            For Sale
                          </button>

                          <input
                            type="submit"
                            value="Search123"
                            className="btn btn-outline-primary ml-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BSRC);
