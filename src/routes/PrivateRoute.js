import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

function PrivateRoute({component: Component, ...rest}){
    return (
        <Route
            {...rest}
            render = {props =>{
                return rest.auth.authenticated || (rest.token !== undefined && rest.token)?(
                <Component {...props}/>)
                :(
                    <Redirect
                        to={{
                            pathname: "login",
                            state: {from: props.location}
                        }}
                    />
                )
            }}
        />
    )
}
const mapStateToProps = (state)=>{
        return {
            auth: state.auth,
            token: state.auth.token
        }
}
export default connect(mapStateToProps, null)(PrivateRoute)