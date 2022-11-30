import React from "react";
import { Link } from "react-router-dom";
import {
  FooterWrapper,
  FooterList,
  FooterItem,
  SocialMedia,
  SocialMediaItem,
  Ul,
  Li,
  FormEmail,
  InputEmail,
  SubFooter,
} from "./index";
// === Components ===
import Btn from "../../subComponents/Btn/Btn";
// ===Icons ===
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterList>
          <FooterItem className="col-12 col-md-6 col-lg-3">
            <h4>About us</h4>
            <p>
            The Furniture Standard is a furniture store that offers a wide range of furniture for your home.
             We have a wide range of furniture for your home, from living room furniture, bedroom furniture, dining room furniture, office furniture, and more. 

            </p>
         
            {/* phone number */}
            <div 
            className=" flex py-2"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className="flex-shrink-0 h-6 w-6 hover:text-orange animate-pulse mt-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
          </svg>
  <a href="tel:07066800620" className="ml-2 hover:text-orange text-2xl ">
          07066800620
            </a>
        </div>
        <SocialMedia>
              <SocialMediaItem>
                <Link to="/">
                  <BsFacebook />
                </Link>
              </SocialMediaItem>
              <SocialMediaItem>
                <Link to="/">
                  <BsTwitter />
                </Link>
              </SocialMediaItem>
              <SocialMediaItem>
                <Link to="/">
                  <BsLinkedin />
                </Link>
              </SocialMediaItem>
              <SocialMediaItem>
                <Link to="/">
                  <BsYoutube />
                </Link>
              </SocialMediaItem>
              <SocialMediaItem>
                <Link to="/">
                  <BsPinterest />
                </Link>
              </SocialMediaItem>
            </SocialMedia>

          </FooterItem>
          <FooterItem className="col-12 col-md-6 col-lg-3">
            <h4>Information</h4>
            <Ul>
              <Li>
                <Link to="/about">About Us</Link>
              </Li>
              <Li>
                <Link to="/">Manufactures</Link>
              </Li>
              <Li>
                <Link to="/">Tracking Order</Link>
              </Li>
              <Li>
                <Link to="/">Privacy & Policy</Link>
              </Li>
              <Li>
                <Link to="/">Terms & Conditions</Link>
              </Li>
            </Ul>
          </FooterItem>
          <FooterItem className="col-12 col-md-6 col-lg-3">
            <h4>MY ACCOUNT</h4>
            <Ul>
              <Li>
                <Link to="/signin">Login</Link>
              </Li>
              <Li>
                <Link to="/cart">My Cart</Link>
              </Li>
              <Li>
                <Link to="/wishlist">Wishlist</Link>
              </Li>
              <Li>
                <Link to="/Compare">Compare</Link>
              </Li>
              <Li>
                <Link to="/signin">My Account</Link>
              </Li>
            </Ul>
          </FooterItem>
          <FooterItem className="col-12 col-md-6 col-lg-3">
          <div   className="flex flex-col" >
             <h4
              className="text-orange text-lg font-medium"
             >VISIT OUR SHOWROOMS</h4>
                            <div                         className="pl-4">
                                <ul 
                                      className="pt-3 pl-0 pr-0" >
                                    <li    
                                    className="text-primary-200 font-medium">
                                       <h6
                                                             className="text-lg uppercase">
                                                               Main Showroom </h6>
        
                
                                        <p  className="text-gray-300 cursor-pointer flex text-xs leading-4 py-3" > 
                          <svg className="w-6 h-6 animate-pulse text-red-500  mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                      </svg>
                                      51, Urubi Street, Benin City, <br/> Edo State
                                          </p>
                                    </li>
                                    <li  className="text-primary-200  py-2 font-medium">
                                                            <h6
                                                             className=" text-base uppercase">
                                                               Mission Road Showroom </h6>
                                        <p className="flex cursor-pointer text-gray-300 text-xs leading-4 pt-3">
                                        <svg className="w-6 h-6 hover:animate-bounce text-red-500  mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                      </svg>
                                      27 Mission Rd, Avbiama 300102, <br/> Benin City
                                          </p>
                                    </li>
                                    <li  
                                        className="text-primary-200 py-2 font-medium">
                 <h6
                                className="text-base uppercase">
                                                               Sapele Road Showroom </h6>
                                        <p className="flex cursor-pointer text-gray-300 text-sm leading-4 pt-3">
                                        <svg className="w-6 h-6 hover:animate-bounce text-red-500  mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                      </svg>
                                      Suite 101, KU Plaza,, opposite PZ Road, Junction 300104,  <br/>  Benin City
                
                                         </p>
                                    </li>
                                </ul>

     

  </div>
  </div>
          </FooterItem>
        </FooterList>
      </div>
      <SubFooter>
        <p class="sc-eHfRjS cJkIkW">
          © 2023 all rights reserved by
          <Link class="company-name" to="https://github.com/andreyscott">
            {"Andrew"}
          </Link>
        </p>
      </SubFooter>
    </FooterWrapper>
  );
};

export default Footer;
