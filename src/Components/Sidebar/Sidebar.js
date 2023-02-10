import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HexagonFill, CaretDownFill, List } from "react-bootstrap-icons";
import logo from "../../Images/FCA_logo-removebg-preview.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import{faBars} from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <SIDEBAR className="position-fixed">
     
      <samp
        className="Sidebar-toggle"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#multiCollapseExample2"
        aria-expanded="true"
        aria-controls="multiCollapseExample2"
      >
        <List className="list" />
      </samp>

      <div
        className="content position-sticky collapse multi-collapse show "
        id="multiCollapseExample2"
      >
        {/* <div className="logo">
          <img src={logo} alt="" />
        </div> */}

        <Link className="link" to="admin-dashboard">
          <h4>
            <HexagonFill className="icon" /> Dashboard
          </h4>
        </Link>
        {/* <form className="d-flex" role="search">

                    <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light btn-sm" type="button">Search</button>
                </form> */}

        <div
          className="btn-group-vertical"
          role="group"
          aria-label="Vertical button group"
        >
          <div className="content-child">
            <Link
              className="nav-link active"
              aria-current="page"
              to="admin-dashboard"
            >
              Vehicle_History
            </Link>
          </div>

          <div className="content-child">
            <Link className="nav-link" to="new-defects">
              New Defects
            </Link>
          </div>

          <div className="content-child">
            <Link className="nav-link " to="segement-managenent">
              Segement Management
            </Link>
          </div>

          {/* <div className="content-child">
            <button>Quote Submission</button>
          </div>

          <div className="content-child">
            <button>Comparison</button>
          </div>

          <div className="content-child">
            <button>Approval note submission</button>
          </div> */}
        </div>
      </div>
    </SIDEBAR>
  );
}

export default Sidebar;

/////////////////---Styled component start from here---/////////////////

const SIDEBAR = styled.section`
  /* width: 220px;   */
  background-color: #1a1a27;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* margin-top: 56px; */

  input {
    border-radius: 20px;
    background-color: #181c32;
    position: relative;
  }

  .Sidebar-toggle {
    font-size: 1.5rem;
  }

  /* input:focus {
    background-color: #181c32;
    color: #ffff;
  } */

  content:focus {
    display: none;
  }

  /* .search {
    position: absolute;
  } */

  /* form {
    margin: 20px 10px;
  } */

  h4 {
    color: #ffff;
    margin: 20px 20px 30px 20px;
    display: flex;
    align-items: center;
  }

  button {
    width: 220px;
    background-color: #181c32;
    color: #ffff;
    outline-style: none;
    border: none;
    text-align: left;
    padding: 10px 10px 10px 20px;
  }

  .link {
    text-decoration: none;
    color: black;
    width: 220px;
  }

  .icon {
    margin: auto 3px;
    color: #ffff;
  }

  .content {
    padding-top: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;

    .logo {
      display: flex;
      margin: 0 0 10px 0;
      img {
        width: 180px;
        height: 50px;
        margin: auto;
      }
    }
  }

  .content::-webkit-scrollbar {
    display: none;
  }

  .content-child {
    height: 100%;
    /* display: flex; */
    color: #ffff;
    background-color: #181c32;
    width: 220px;
    align-items: center;
    text-align: left;
    padding: 10px 5px 0 0;
    /* padding-bottom:10px; */
    padding: 10px 0 10px 20px;
    border-top: solid black 1px;
    /* border-top: solid #ffff 1px;  */
    :hover {
      background-color: #2e386eb0;
    }
  }

  .Master-child {
    text-align: left;
    /* background-color:lightgray; */
    border-bottom: solid black 1px;
    color: #ffff;
    padding: 10px 10px 10px 40px;
  }

  samp {
    margin: 5px;
    margin-top: 10px;
    /* width: 32px; */
    color: aliceblue;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    .list{
        font-size: 2rem;
    }
  }
`;
