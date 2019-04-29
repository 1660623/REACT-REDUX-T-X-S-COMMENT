import React, { Component, Fragment, Suspense } from 'react'
import PropTypes from 'prop-types'
import ListPost from './../../components/Status/ListStatus'
import Post     from './../../components/Status/StatusItem'
import AddPost  from './../../components/Status/NewStatus'
import {fetchInstancesRequest, getInstanceByIDRequest, actAddProductRequest, actDeleteProductRequest, changeStatusRequest} from '../../actions/work'
import { connect } from 'react-redux'
import LoadingStatus from '../../components/Status/LoadingStatus'

class WorkContainer extends Component{

    componentWillMount(){
        this.props.fetchInstances();
    }
    componentDidMount(){
           this.props.fetchInstances();
        //    console.log('anhyeuem');
             console.log("didmount");

    
    }
    // componentDidMount(){
    //     this.props.fetchInstances();
    //  //    console.log('anhyeuem');
    // }
    // componentDidUpdate(){   
    //     // setTimeout(this.props.fetchInstances(), 5000);
    //     this.props.fetchInstances();
    //     console.log("componentDidUpdate");
    // }
    componentDidUpdate(prevProps){
        // if (prevProps.id !== this.props.id) {
        //     this.props.loadThingThenFrames(this.props.id)
        // }
        // console.log(prevProps.listWork[0])
        // console.log(this.props.listWork[0]);
        if(prevProps.listWork[0] !== this.props.listWork[0] ){
            this.props.fetchInstances();
        }
       
        // this.props.fetchInstances();
    }
    // componentWillReceiveProps(){
    //     this.props.fetchInstances();
    // }
    // componentDidUpdate(){
    //       this.props.fetchInstances();
          
    //     //   console.log('em chia tay');
    // }
   _deleteHandlePost = (id) =>{
    //    console.log(id);
       this.props.delete(id);
      
   }
    _updateHandlePost = (id,post) =>{
   
    //    console.log(id);
        // this.props.fetchInstances();
    //    console.log(post);
      console.log(id); 
         this.props.update(id, post);
         this.props.fetchInstances();
   }

   _edit=(id)=>{
        // this.props.fetIdWork(id)
        console.log(id);
    //    this.props.fetIdWork(id);
   }
   
    _showPost= (listWork, detailwork) =>{
    //    const {detailwork} = this.props;
        var result = null;
        let arrTemp = [...listWork];
        if(arrTemp.length > 0){
            result = arrTemp.map((item, index)=>
             
              <Post
                key     = {index}
                work    = {item}
                history = {this.props.history}
                deleteHandlePost  = {(id)=>this._deleteHandlePost(id)}
                updateHandlePost  = {(id, post)=>this._updateHandlePost(id, post)}
                editHandle        = {(id)=>this._edit(id)}
                //  edit             = {(id)=>this.props.onEdit(id)}
                 detail            = {detailwork}
              />
            )
        }
        return result;
    }

    //hien thi ID
    

        _createNewPost = (tenSinhVien)=>{
            console.log(tenSinhVien);
             this.props.addWork(tenSinhVien);
        }
    _showAddPost =() =>{
        return ( <AddPost
                    createNewPost = {(tenSinhVien)=>this._createNewPost(tenSinhVien)}
                />)
    }

    
   render(){
    const { listWork , loading, detailwork}  = this.props;
       return(
           <Fragment>
                {/* <div>WorkContainer</div> */}
                {/* <ListPost/> */}
               
        <ListPost 
            allPost =   {this._showPost(listWork,detailwork)}
            adPost  =   {this._showAddPost} 
            GetId   =   {this._getId}
            // onEdit  =   {(id)=>this._onEditId(id)}
        // getDetail   =   {this._getDetail(detailwork,listWork)}
             
            />
           </Fragment>
       )
   }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listWork: state.works,
        detailwork: state.work
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        fetchInstances : ()=>{
             dispatch(fetchInstancesRequest())
         },
        // fetIdWork: (id)=>{
        //     dispatch(getInstanceByIDRequest(id))
        // },
        addWork: (tenSinhVien)=>{
            dispatch(actAddProductRequest(tenSinhVien))
        },
        delete: (id)=>{
            dispatch(actDeleteProductRequest(id))
        },
        update: (id, data) =>{
            dispatch(changeStatusRequest(id, data))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(WorkContainer)