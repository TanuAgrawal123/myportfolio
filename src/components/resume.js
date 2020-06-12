import React , {Component} from 'react';
import {Tabs, Tab, Grid,Cell, Card,CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Resume extends Component{
	render(){
		return(
			<div>
			<Grid>
			<Cell col={4}>
			<div style={{textAlign:'Center'}}>
			<img src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/10-512.png"
			style={{height:'200px'}}	/>



			</div>
			<h3 style={{paddingTop:'20px',  color:'blue'}}>Tanu Agrawal</h3>
			<h4 style={{color:'grey'}}>Programmer</h4>
			<hr style={{borderTop:'3px solid 833fb2', width:'50%'}}/>
			<p>I am Tanu Agrawal currently a student of 3rd Yr pursuing for my B.Tech degree in Computer Science and Engineering 
			from Bundelkhand Institute of Engineering and Technology Jhansi.
			I love Coding and designing Website. </p>
			<hr style={{borderTop:'3px solid 833fb2', width:'50%'}}/>
			<h5>Address</h5>
			<p>G-62 Kalpana Chawla Hostel BIET Jhansi </p>
			<h5> Mobile</h5>
			<p>8476935639</p>
			<h5>Email</h5>
			<p>tanuagrawal1389@gmail.com</p>
			<hr style={{borderTop:'3px solid 833fb2', width:'50%'}}/>
			</Cell>
			<Cell className="resume-right-col" col={8}> Right Side</Cell>
			</Grid>

			</div>

			)
	}
}

export default Resume
