import React , {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import profile from './myself1.jpg'
class Contact extends Component{
	render(){
		return(
			<div className="contact-body">
			<Grid className="contact-grid">
			<Cell col={6}>
			<h2 className="text-danger"> Tanu Agrawal</h2>
			<img src={profile} alt="avtar" className="rounded-circle"
			style={{height:'250px'}}

			/>
			<p style={{width:'75',margin:'auto', paddingTop:'1em'}}>Myself Tanu Agrawal. I am from Mathura, Uttar Pradesh. I have done my graduation from <b>BIET Jhansi</b> in  <b>CSE</b> field with an aggregate of 80%. I love designing website and writing backend logics.
I am an executive member of college's <b>technical club (CODE)</b> where we guide our juniors. I have participated in Global <b>Hacktoberfest </b> from Last three year and contributed in open source repository. I have secured AIR 1855 in Gate exam that help me to boost my core subject Knowledge.
Coming to my strength i am good learner and have positive attitude and committed to my work

			</p>

			</Cell>
			<Cell col={6}>
			<h2>Contact Me</h2>
			<hr/>
<div className="contact-list">
			<List>
  <ListItem>
    <ListItemContent style={{fontSize:'17px', color:"blue"}}>

<i className="fa fa-phone-square" style={{ color:"black"}} aria-hidden="true"/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(91)8476935639

    </ListItemContent>
  </ListItem>

  <ListItem>
    <ListItemContent  style={{fontSize:'15px', color:"blue"}} >
    <i className="fa fa-envelope-square" style={{color:"black"}} aria-hidden="true"/>   
    tanuagrawal1389@gmail.com
    </ListItemContent>
  </ListItem>

  
  <ListItem>
    <ListItemContent  style={{fontSize:'15px', color:"blue"}} >
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
