import { Button, Container, Navbar } from "react-bootstrap";
import "./NavigationBar.css";
import { FaSearch } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";
const NavigationBar = () => {
  const [searchHidden, setSearchHidden] = useState(true);
  return (
    <>
      <Navbar
        className="back-color-white "
        sticky="top"
        style={{ "box-shadow": "rgb(0 0 0 / 40%) 0px 2px 15px -3px" }}
      >
        <Container>
          <div>
            <div className="nav-links">
              <div className="p-10 hover-class nav-items">Coins</div>
              <div className="p-10 hover-class nav-items">Exchanges</div>
              <div className="p-10 hover-class nav-items">Swaps</div>
            </div>
          </div>
          <div>
            <img
              alt=""
              src="https://coincap.io/static/logos/black.svg"
              className="d-inline-block align-top"
              width={80}
              height={32}
            />
          </div>
          <div>
            <div className="nav-links">
              <div className="p-10 nav-links search ">
                <input placeholder="Search...." hidden={searchHidden} />
                <FaSearch
                  onClick={() => {
                    setSearchHidden(!searchHidden);
                  }}
                />
              </div>
              <div className="p-10 ">
                <AiFillSetting />
              </div>
              <div className="p-10 connect-button">
                <Button className="connect">Connect Wallet</Button>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
