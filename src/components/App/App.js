import React ,{Component, Fragment} from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css'
import DashboardAuth from './../DashboardAuth'
import PrivateRoute from './../../routes/PrivateRoute'
import LoginContainer from '../../containers/LoginContainer/LoginContainer'
import WorkContainer from '../../containers/DeTailWorkContainer/WorkContainer'
import Main from './../../components/Status/Main'
// import AddPost from '../Status/NewStatus'
// import Post from '../Status/StatusItem'
// import Grid from '@material-ui/core/Grid'
// import Header from '../Layout/Header'
 
class App extends Component {
    
  render() {
   
    return (
        
        //  <Header/>
        //   <Grid container justify="center">
			  //     <Grid item xs={12} sm={6} style={{ marginTop: 30, fontSize: 30 }}> 
        //         <AddPost/>
        //         <Post/>
        //     </Grid>
        //   </Grid> 
         
        <Fragment>
            <Switch>
              <Main>
                  <Route path="/work" component={WorkContainer}/>
                  {/* <PrivateRoute path="/" component={DashboardAuth}/> */}
              </Main>
            </Switch>

        </Fragment>
         
    );
  }
}
 
export default  App;