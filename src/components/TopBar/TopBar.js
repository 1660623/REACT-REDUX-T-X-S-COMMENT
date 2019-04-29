import React, { Component, Fragment } from 'react';
import SetupUser from './SetupUser';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';


// const propTypes = {

// };


class TopBar extends Component {
   render() {
      return (
         <Fragment>
            {/* Top Bar Start */}
            <div className="topbar">
               {/* LOGO */}
               <div className="topbar-left">
                  <Link to="/instance" className="logo">
                     <span><img src="assets/images/iotHutech.png" alt="" height={60} /> </span><i>
                        <img src="assets/images/logo-sm.png" alt="" height={22} /></i>
                  </Link>
               </div>
               <nav className="navbar-custom">
                  <ul className="navbar-right d-flex list-inline float-right mb-0">
                     {/* Searching */}
                     {/* <SearchTopBar /> */}

                     {/* Notification */}
                     {/* <NotificationTopBar /> */}

                     {/* SetTing user */}
                     <SetupUser />
                  </ul>

                  <ul className="list-inline menu-left mb-0">
                     <li className="float-left"><button className="button-menu-mobile open-left waves-effect">
                        <i className="mdi mdi-menu"></i></button></li><li className="d-none d-sm-block">
                        {/* <div className="dropdown pt-3 d-inline-block">
									<Link className="btn btn-light dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Create</Link>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuLink"><Link className="dropdown-item" to="#">Action</Link>
										<Link className="dropdown-item" to="#">Another action</Link>
										<Link className="dropdown-item" to="#">Something else here</Link>
										<div className="dropdown-divider"></div><Link className="dropdown-item" to="#">Separated link</Link>
									</div>
								</div> */}
                     </li>
                  </ul>
               </nav>
            </div>
            {/* Top Bar End */}
         </Fragment>
      );
   }
}


// TopBar.propTypes = propTypes;


export default TopBar;
