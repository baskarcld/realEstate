import $ from 'jquery';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { logoutHandler } from '../../actions/auth';
import AddModal from '../../Components/Form/AddModal';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.svg';
import avatar from '../../assets/images/user/avater.png';
import ResponseModal from './ResponseModal';

const Navbar = (props) => {
  let isLoggedIn = props.authToken;

  useEffect(() => {
    var $window = $(window),
      $body = $('body');

    var activeSticky = $('#sticky-header'),
      $winDow = $($window);
    $winDow.on('scroll', function () {
      var scroll = $($window).scrollTop(),
        isSticky = activeSticky;

      if (scroll < 1) {
        isSticky.removeClass('is-sticky');
      } else {
        isSticky.addClass('is-sticky');
      }
    });

    //  Off Canvas toggler Function
    var $offCanvasToggle = $('.offcanvas-toggle'),
      $offCanvas = $('.offcanvas'),
      $offCanvasOverlay = $('.offcanvas-overlay'),
      $mobileMenuToggle = $('.mobile-menu-toggle');
    $offCanvasToggle.on('click', function (e) {
      e.preventDefault();
      var $this = $(this),
        $target = $this.attr('href');
      $body.addClass('offcanvas-open');
      $($target).addClass('offcanvas-open');
      $offCanvasOverlay.fadeIn();

      if ($this.parent().hasClass('mobile-menu-toggle')) {
        $this.addClass('close');
      }
    });
    $('.offcanvas-close, .offcanvas-overlay').on('click', function (e) {
      e.preventDefault();
      $body.removeClass('offcanvas-open');
      $offCanvas.removeClass('offcanvas-open');
      $offCanvasOverlay.fadeOut();
      $mobileMenuToggle.find('a').removeClass('close');
    });

    // Off Canvas Menu

    function mobileOffCanvasMenu() {
      var $offCanvasNav = $('.offcanvas-menu, .overlay-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.offcanvas-submenu');
      /*Add Toggle Button With Off Canvas Sub Menu*/

      $offCanvasNavSubMenu
        .parent()
        .prepend('<span class="menu-expand"></span>');
      /*Category Sub Menu Toggle*/

      $offCanvasNav.on('click', 'li a, .menu-expand', function (e) {
        var $this = $(this);

        if ($this.attr('href') === '#' || $this.hasClass('menu-expand')) {
          e.preventDefault();

          if ($this.siblings('ul:visible').length) {
            $this.parent('li').removeClass('active');
            $this.siblings('ul').slideUp();
            $this.parent('li').find('li').removeClass('active');
            $this.parent('li').find('ul:visible').slideUp();
          } else {
            $this.parent('li').addClass('active');
            $this
              .closest('li')
              .siblings('li')
              .removeClass('active')
              .find('li')
              .removeClass('active');
            $this.closest('li').siblings('li').find('ul:visible').slideUp();
            $this.siblings('ul').slideDown();
          }
        }
      });
    }

    mobileOffCanvasMenu();

    $.fn.elExists = function () {
      return this.length > 0;
    };

    if ($('.nice-select').elExists()) {
      $('.nice-select').selectric();
    }
  }, []);

  const removeToken = () => {
    props.logoutHandler(false);
  };

  useEffect(() => {
    if (!props.logout) {
      isLoggedIn = null;
    }
  }, [props.logout]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenApi, setIsOpenApi] = useState(false);

  useEffect(() => {
    if (props.authErr) {
      setIsOpenApi(!isOpenApi);
    }
  }, [props.authErr]);
  return (
    <Fragment>
      {isOpen && <AddModal setIsOpen={setIsOpen} />}
      {isOpenApi && (props.authErr == 400 || props.signUpstatus) && (
        <ResponseModal setIsOpenApi={setIsOpenApi} authErr={props.authErr} />
      )}
      <header
        id="stic ky-header"
        className="absolute left-0 top-[15px] lg:top-[30px] xl:top-[45px] w-full z-10"
      >
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="flex flex-wrap items-center justify-between">
                <NavLink activeClassName="active" to="/home">
                  <img
                    className="w-full h-full"
                    src={logo}
                    loading="lazy"
                    width="99"
                    height="46"
                    alt="brand logo"
                  />
                </NavLink>
                <nav className="flex flex-wrap items-center">
                  <ul className="hidden lg:flex flex-wrap items-center font-lora text-[16px] xl:text-[18px] leading-none text-black">
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                      <NavLink
                        activeClassName="active"
                        to="/home"
                        className="transition-all hover:text-secondary"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                      <NavLink
                        activeClassName="active"
                        to="/home"
                        className="transition-all hover:text-secondary"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                      <NavLink
                        activeClassName="active"
                        to="/properties"
                        className="transition-all hover:text-secondary"
                      >
                        Properties
                      </NavLink>
                    </li>
                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                      <NavLink
                        activeClassName="active"
                        to="/home"
                        className="transition-all hover:text-secondary"
                      >
                        Serives
                      </NavLink>
                      <ul
                        className="list-none bg-white drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)] rounded-[12px] flex flex-wrap flex-col w-[220px] absolute top-[120%] left-1/2 -translate-x-1/2 transition-all
            group-hover:top-[100%] invisible group-hover:visible opacity-0 group-hover:opacity-100
            
            "
                      >
                        <li className="border-b border-dashed border-primary border-opacity-40 last:border-b-0 hover:border-solid transition-all">
                          <NavLink
                            activeClassName="active"
                            to="/home"
                            className="font-lora leading-[1.571] text-[14px] text-primary p-[10px] capitalize block transition-all hover:bg-primary hover:text-white text-center my-[-1px] rounded-t-[12px]"
                          >
                            Service 1
                          </NavLink>
                        </li>

                        <li className="border-b border-dashed border-primary border-opacity-40 last:border-b-0 hover:border-solid transition-all">
                          <NavLink
                            activeClassName="active"
                            to="/home"
                            className="font-lora leading-[1.571] text-[14px] text-primary p-[10px] capitalize block transition-all hover:bg-primary hover:text-white text-center my-[-1px] rounded-t-[12px]"
                          >
                            Service 2
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                      <NavLink
                        activeClassName="active"
                        to="/home"
                        className="transition-all hover:text-secondary"
                      >
                        Contact
                      </NavLink>
                    </li>

                    {!props.logout && (
                      <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                        <NavLink
                          activeClassName="active"
                          to="/auth"
                          className="transition-all hover:text-secondary"
                        >
                          Login
                        </NavLink>
                      </li>
                    )}
                    {props.logout && (
                      <>
                        <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                          <button onClick={removeToken}>Logout</button>
                        </li>
                        <li className="mr-7 xl:mr-[40px] relative group py-[20px]">
                          <button onClick={() => setIsOpen(true)}>
                            Add New Property
                          </button>
                        </li>
                      </>
                    )}
                  </ul>

                  <ul className="flex flex-wrap items-center">
                    <li className="sm:mr-5 xl:mr-[20px] relative group">
                      <NavLink
                        activeClassName="active"
                        to="/home"
                        className="transition-all hover:text-secondary"
                      >
                        <img
                          src={avatar}
                          loading="lazy"
                          width="62"
                          height="62"
                          alt="avater"
                        />
                      </NavLink>
                    </li>

                    <li className="ml-2 sm:ml-5 lg:hidden">
                      <a
                        href="#offcanvas-mobile-menu"
                        className="offcanvas-toggle flex text-[#016450] hover:text-secondary"
                      >
                        <svg
                          width="24"
                          height="24"
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="offcanvas-overlay hidden fixed inset-0 bg-black opacity-50 z-50"></div>
      <div
        id="offcanvas-mobile-menu"
        className="offcanvas left-0 transform -translate-x-full fixed font-normal text-sm top-0 z-50 h-screen xs:w-[300px] lg:w-[380px] transition-all ease-in-out duration-300 bg-white"
      >
        <div className="py-12 pr-5 h-[100vh] overflow-y-auto">
          <button
            className="offcanvas-close text-primary text-[25px] w-10 h-10 absolute right-0 top-0 z-[1]"
            aria-label="offcanvas"
          >
            x
          </button>

          <nav className="offcanvas-menu mr-[20px]">
            <ul>
              <li className="relative block border-b-primary border-b first:border-t first:border-t-primary">
                <span className="menu-expand"></span>

                <NavLink
                  activeClassName="active"
                  to="/home"
                  className="block capitalize font-normal text-black hover:text-secondary text-base my-2 py-1 px-5"
                >
                  Home
                </NavLink>
              </li>
              <li className="relative block border-b-primary border-b">
                <span className="menu-expand"></span>
                <NavLink
                  activeClassName="active"
                  to="/home"
                  className="block capitalize font-normal text-black hover:text-secondary text-base my-2 py-1 px-5"
                >
                  About
                </NavLink>
              </li>
              <li className="relative block border-b-primary border-b">
                <span className="menu-expand"></span>
                <NavLink
                  activeClassName="active"
                  to="/home"
                  className="block capitalize font-normal text-black hover:text-secondary text-base my-2 py-1 px-5"
                >
                  Properties
                </NavLink>
              </li>
              <li className="relative block border-b-primary border-b">
                <span className="menu-expand"></span>

                <NavLink
                  activeClassName="active"
                  to="/home"
                  className="relative block capitalize font-normal text-black hover:text-secondary text-base my-2 py-1 px-5"
                >
                  Services
                </NavLink>

                <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100 capitalize">
                  <li>
                    <NavLink
                      activeClassName="active"
                      to="/home"
                      className="text-sm pt-3 px-10 pb-1 text-black font-light block transition-all hover:text-secondary"
                    >
                      Service 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      to="/home"
                      className="text-sm pt-3 px-10 pb-1 text-black font-light block transition-all hover:text-secondary"
                    >
                      Service 2
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="relative block border-b-primary border-b">
                <span className="menu-expand"></span>

                <NavLink
                  activeClassName="active"
                  to="/home"
                  className="relative block capitalize text-black hover:text-secondary text-base my-2 py-1 px-5"
                >
                  Blog
                </NavLink>
              </li>
              <li className="relative block border-b-primary border-b">
                <NavLink
                  activeClassName="active"
                  to="/home"
                  className="relative block capitalize text-black hover:text-secondary text-base my-2 py-1 px-5"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="px-5 flex flex-wrap mt-3 sm:hidden">
            <NavLink
              activeClassName="active"
              to="/home"
              className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all"
            >
              Add Property
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    authToken: state.authReducer.token,
    isSignUp: state.authReducer.isSignUp,
    isSignIn: state.authReducer.isSignIn,
    logout: state.authReducer.logout,
    authErr: state.authReducer.authErr,
  };
};

export default connect(mapStateToProps, { logoutHandler })(Navbar);
