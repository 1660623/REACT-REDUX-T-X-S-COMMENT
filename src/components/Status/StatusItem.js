import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoreVert from '@material-ui/icons/MoreVert'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'

const styles = {
	paper: {
		padding: 10,
		display: 'flex',
		marginTop: 10,
	},
	paper1: {
		padding: 10,
		display: 'flex',
		marginTop: 10,
	},
	avatar: {
		minWidth: 10,
		margin: '4px 10px 4px 4px'
	},
	actions: {
		display: 'flex',
		marginLeft: 20
	  },
	login: {
		marginBottom: 5
	},
	time: {
		marginLeft: 10,
		color: '#bbb',
		fontSize: 14
	},
	textField: {
		width: '100%',
		 
	},
	button: {
		width: '20%',
		marginTop: 35,
		marginBottom: 10,
		backgroundColor: '#800080',
		color: '#fff',
		'&:hover': {
			color: '#800080'
		}
	},
	button_new: {
		width: '20%',
		marginTop: 35,
		marginBottom: 10,
		marginLeft: 5,
		backgroundColor: '#800080',
		color: '#fff',
		'&:hover': {
			color: '#800080'
		}
	}
}

class Post extends Component {
	constructor (props) {
		super(props);
		this.state = {
			anchorEl: null,
			trangthai: true,
			ten: this.props.work.tenSinhVien,
			id: this.props.work.id
		}
		// this.handleLogout = this.handleLogout.bind(this)
	}
	
	// componentWillReceiveProps(nextProps){

	// 	// console.log(nextProps.tenSinhVien);
	// 	const {detail} = this.props;
	// 	console.log(nextProps.detail);
		
	// 	// console.log(nextProps.detail);
	// 	this.setState({
	// 		ten: nextProps.detail.tenSinhVien,
	// 		id         : nextProps.detail.id
	// 	})

	// }
	handleMenu = (event) => { this.setState({ anchorEl: event.currentTarget })}

	handleCloseDelete = () => {
						this.props.deleteHandlePost(this.props.work.id)
						this.setState({ anchorEl: null })
						this.setState({ trangthai:true })
						
						}
	handleCloseUpdate = () => { 
							// e.preventDefault()
							this.props.editHandle(this.props.work.id);
							// const post = {
							//    tenSinhVien: this.state.tenSinhVien
							// }
							// this.props.updateHandlePost(this.props.work.id, post)
							this.setState({ anchorEl: null })
							this.setState({ trangthai: false })
							
							  }
	// handleCloseUpdate = (e) =>{
	// 	e.preventDefault();
	// 	this.props.edit(this.props.work.id);
	// 	this.setState({ anchorEl: null })
	// 	this.setState({ trangthai: false })
	// }

	handleCancel = () =>{
						this.setState({ trangthai: true})
						}

	handleSave	= () =>	{
					// e.preventDefault()
					//  this.props.updateHandlePost(this.props.item.id);
					const {id, ten} = this.state;
					const post = {
						 tenSinhVien: ten
					}
					this.props.updateHandlePost(this.props.work.id, post)
					this.setState({ trangthai: true})
					
						}				
	handleChange =(e) => {
		this.setState({ ten: e.target.value })
		console.log(this.state.ten);
	}

	// handleSubmit = (e) => {
	// 	e.preventDefault()

	// 	const postData = {
	// 		text: this.state.text
	// 	}

	// 	// this.props.addPost(postData)
	// 	this.setState({ text: ''})
	// }

	render () {
		const { classes, isAuthenticated, user } = this.props;
		const { anchorEl, trangthai } = this.state
		const open = Boolean(anchorEl)
		const {work} = this.props;
		// const { classes  } = this.props
    // trangthai ? 
		 const editStatus = (
					<Paper className={classes.paper1}>
							<TextField
								multiline
								rowsMax="4"
								// label="What's is new?"
								className={classes.textField}
								onChange={this.handleChange}
								value={this.state.ten}
								// name="tenSinhVien"
							/>
							<Button 
								variant="outlined" 
								className={classes.button}
								onClick={this.handleCancel}
							>
								Hủy
							</Button>
							<Button 
								variant="outlined" 
								className={classes.button_new}
								onClick={this.handleSave}
							>
								Lưu
							</Button>
					</Paper>)


			const status = (
				<Paper className={classes.paper}>

					<div 
						className={classes.avatar}
						style={{
							backgroundColor:'#800080'
						}}
					/>
					<div>
						<h3 className={classes.login}>
							<Link to="/fdgff">{work.tenSinhVien}</Link>
							<span className={classes.time}>adagsahdasdasd</span>
						</h3>
						{/* {work.tenSinhVien} */}
					</div>
	
					<div>
						<IconButton
						className ={classes.actions}
						aria-owns={ open ? 'menu-appbar': undefined }
						aria-haspopup="true"
						color="inherit"
						onClick={this.handleMenu}
						>
						<MoreVert />
						</IconButton>
				
					<Menu
						id="menu-appbar"
						open={open}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						anchorEl={anchorEl}
						onClose={this.handleClose}
					>
						<MenuItem onClick={this.handleCloseUpdate}>
							 
								Sữa
							 
						</MenuItem>
						<MenuItem onClick={this.handleCloseDelete}>
							 
								Xóa 
							 
						</MenuItem>
					</Menu>
				
					</div>
			</Paper>
			)	
		 
		return (
			<div>
				 {trangthai ? status : editStatus}
			</div>
		)
	}
}


export default withStyles(styles)(Post)