import React , {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component{
	render(){
		return(
			<div className="contact-body">
			<Grid className="contact-grid">
			<Cell col={6}>
			<h2 className="text-danger"> Tanu Agrawal</h2>
			<img src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/10-512.png" alt="avtar"
			style={{height:'250px'}}

			/>
			<p style={{width:'75',margin:'auto', paddingTop:'1em'}}>I am Tanu Agrawal currently a student of 3rd Yr pursuing for my B.Tech degree in Computer Science and Engineering 
			from Bundelkhand Institute of Engineering and Technology Jhansi.
			I love Coding and designing Website. 

			</p>

			</Cell>
			<Cell col={6}>
			<h2>Contact Me</h2>
			<hr/>
<div className="contact-list">
			<List>
  <ListItem>
    <ListItemContent style={{fontSize:'20px', color:"blue"}}>

<i className="fa fa-phone-square" style={{ color:"black"}} aria-hidden="true"/>
8476935639

    </ListItemContent>
  </ListItem>

  <ListItem>
    <ListItemContent  style={{fontSize:'20px', color:"blue"}} >
    <i className="fa fa-envelope-square" style={{color:"black"}} aria-hidden="true"/>   
    tanuagrawal1389@gmail.com
    </ListItemContent>
  </ListItem>

  
  <ListItem>
    <ListItemContent  style={{fontSize:'20px', color:"blue"}} >
    <i className="fa fa-envelope-square" style={{color:"black"}} aria-hidden="true"/>   
    tanucseintern@outlook.com
    </ListItemContent>
  </ListItem>
  
</List>
</div>


			</Cell>


			</Grid></div>
			

			)
	}
}

export default Contact
