import React, { Component, Fragment } from 'react';

class NotificationTopBar extends Component {
   render() {
      return (
         <Fragment>
            {/* eslint-disable-next-line */}
            <li className="dropdown notification-list"><a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"><i className="ti-bell noti-icon" /> <span className="badge badge-pill badge-danger noti-icon-badge">3</span></a>
               <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                  {/* item*/}
                  <h6 className="dropdown-item-text">Notifications (258)</h6>
                  <div className="slimscroll notification-item-list">
                     {/* item*/}{/* eslint-disable-next-line */}
                     <a href="javascript:void(0);" className="dropdown-item notify-item active">
                        <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline" /></div>
                        <p className="notify-details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                     </a>
                     {/* item*/}{/* eslint-disable-next-line */}
                     <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon bg-warning"><i className="mdi mdi-message" /></div>
                        <p className="notify-details">New Message received<span className="text-muted">You have 87 unread messages</span></p>
                     </a>
                     {/* item*/}{/* eslint-disable-next-line */}
                     <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon bg-info"><i className="mdi mdi-martini" /></div>
                        <p className="notify-details">Your item is shipped<span className="text-muted">It is a long established fact that a reader will</span></p>
                     </a>
                     {/* item*/}{/* eslint-disable-next-line */}
                     <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon bg-primary"><i className="mdi mdi-cart-outline" /></div>
                        <p className="notify-details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                     </a>
                     {/* item*/}{/* eslint-disable-next-line */}
                     <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <div className="notify-icon bg-danger"><i className="mdi mdi-message" /></div>
                        <p className="notify-details">New Message received<span className="text-muted">You have 87 unread messages</span></p>
                     </a>
                  </div>{/* eslint-disable-next-line */}
                  {/* All*/}<a href="javascript:void(0);" className="dropdown-item text-center text-primary">View all <i className="fi-arrow-right" /></a></div>
            </li>
         </Fragment>
      );
   }
}

export default NotificationTopBar;
