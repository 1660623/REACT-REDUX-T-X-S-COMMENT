 import React, { Component, Fragment, Suspense } from 'react'
 import {  routesMain } from './../routes/routesMain'
 import { Switch, Route } from 'react-router-dom'
 
 class DashboardAuth extends Component{


    _showRoutes =(routes)=>{
         let resuly = null;
         if(routes.length > 0){
              resuly = routes.map((item, index)=>
                 <Route key={index} path={item.path} exact={item.exact} conponent={item.main}/>
              )
         }
         return <Suspense fallback={<div>Loading...</div>}><Switch>{resuly}</Switch></Suspense>
    }
    render(){
        return(
            <Fragment>
                 
                    {this._showRoutes(routesMain)}
                
            </Fragment>
        )
    }
 }
 export default DashboardAuth;