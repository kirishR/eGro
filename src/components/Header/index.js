import React, { useEffect, useState } from "react";
import "./style.css";
import eGroLogo from "../../images/logo/eGro3.png";
// import goldenStar from "../../imaes/logo/golden-star.png";
import { IoIosArrowDown,IoIosCart, IoIosSearch } from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import { login, signout,getCartItems, signup as _signup } from "../../actions";
import Cart from "../UI/Cart";


/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // state cart value
  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="fullName">{auth.user.fullName}</a>}
        menus={[
          // { label: "My Profile", href: "", icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
          },
        
          // { label: "Wishlist", href: "", icon: null },

          
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
            className="more"
            onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}
            style={{color: "rgb(95, 95, 95)"}}

          >
            Account
          </a>
        }
        menus={[
          // { label: "My Profile", href: "", icon: null },
          // { label: "Flipkart Plus Zone", href: "", icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          // { label: "Wishlist", href: "/cart", icon: null },

        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: "#2874f0" }}
            >
              Sign Up
            </a>
          </div>
        }
      />
    );
  };

  return (
    <div className="header">
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={signup ? "Register" : "Login"}
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={userLogin}
                />
                <p style={{ textAlign: "center" }}>OR</p>
                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: "20px 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        {/* Logo  */}
        <div className="logo">
          <a href={"/"}>
            <img src={eGroLogo} className="logoimage" alt="" />
          </a>
          <a style={{ marginTop: "-10px" }}>
            {/* <span className="exploreText">Explore</span>
            <span className="plusText">Plus</span> */}
            {/* <img src="/home/kirish/Desktop/eGro/eGro.jpg" className="goldenStar" alt="" /> */}
          </a>
        </div> 
        {/* logo ends here

        {/* search component */}
        <div
          style={{
            padding: "0 10px",
          }}
        >
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={"search for products, brands and more"}
            />
            <div className="searchIconContainer">
              <IoIosSearch
                style={{
                  color: "#18421e",
                }}
              />
            </div>
          </div>
        </div>
        {/* search component ends here */}

        {/* right side menu */}
        
        <div className="rightMenu">
          {/* <div className="more">
            <a href={'/'}  >
               <span style={{ margin: "0 10px" }, {color: "rgb(95, 95, 95)"}}>Home</span>
              
            </a>
          </div> */}
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          {/* <DropdownMenu
            menu={
             
            }
            menus={[
              { label: "Delivery info", href: "/delivery", icon: null },
              { label: "supply on  eGro", href: "", icon: null },
              
            ]}
          /> */}
          <div>
          <a  href={'/info'}className="more" style={{color: "rgb(95, 95, 95)"}}>
                <span>About</span>
               
              </a>
          </div>
          <div>
          <a href={'/about'} className="more" >
               <span style={{ margin: "0 10px" },{color: "rgb(95, 95, 95)"}}>Contact</span>
              
            </a>
          </div>
          
          
          <div >
            <a href={`/cart`} className="cart" >
              <Cart count={Object.keys(cart.cartItems).length} />
              {/* <span style={{ margin: "0 10px" }}>Cart</span> */}
            </a>
          </div>
          
          
        </div>
        {/* right side menu ends here */}
      </div>
    </div>
  );
};

export default Header;