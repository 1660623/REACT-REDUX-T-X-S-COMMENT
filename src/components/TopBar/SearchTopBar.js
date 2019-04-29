import React, { Component, Fragment } from 'react';

class SearchTopBar extends Component {
    render() {
        return (
            <Fragment>
                <li className="dropdown notification-list d-none d-sm-block">
                    <form role="search" className="app-search">
                        <div className="form-group mb-0">
                            <input type="text" className="form-control" placeholder="Search.." />
                            <button type="submit"><i className="fa fa-search" /></button>
                        </div>
                    </form>
                </li>
            </Fragment>
        );
    }
}

export default SearchTopBar;
