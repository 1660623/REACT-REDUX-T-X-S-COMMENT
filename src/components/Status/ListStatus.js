import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import AddPost from './NewStatus'
import Post from './StatusItem'
import { connect } from 'react-redux'
// import { getPosts, getPostsByFollowingUsers } from '../../actions/postActions'
import LoadingPosts from './LoadingStatus'


class ListPost extends Component {
	constructor (props) {
		super(props)

		this.state = {
			allPosts: true
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({ allPosts: event.target.checked })
	}

	componentDidMount() {
		// this.props.getPosts()
	}

	componentDidUpdate(prevProps, prevState) {
		// if (prevState.allPosts !== this.state.allPosts) {
		// 	this.state.allPosts 
		// 		? this.props.getPosts()
		// 		: this.props.getPostsByFollowingUsers()

		// }
	}
	

	render () {
		// const { list, loading } = this.props 
		const { allPosts } = this.state 
        // const items = list && list.map(el => <Post key={el._id} post={el} />)
        
		return (
			<div>
				{/* <AddPost /> */}
				{this.props.adPost()}
				<FormControlLabel
					control={
						<Switch checked={allPosts} onChange={this.handleChange} />
					}
					label={allPosts ? 'All posts' : 'From following users'}
				/>
				{/* { loading ? <LoadingPosts /> : items} */}
				
                 {/* <Post/>
                 <Post/>
				 <Post/> */}
				 
				 {this.props.allPost}
			</div>
		)
	}
}

// const mapStateToProps = (state) => ({
// 	// list: state.post.list,
//     // loading: state.post.loading
//     instances: state.instances
//     loading: state.loading
// })


// export default connect(mapStateToProps,null)(ListPost)

export default ListPost