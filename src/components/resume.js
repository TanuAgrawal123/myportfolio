import React , {Component} from 'react';
import {Tabs, Tab, Grid,Cell, Card,CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'
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
			<h5> Languages</h5>
			<p> English and Hindi</p>
			
		<hr style={{borderTop:'3px solid 833fb2', width:'50%'}}/>
			<h5><a  className="btn btn-info" href="https://github.com/TanuAgrawal123/Resume/blob/master/tanuresume-converted%20(3).pdf"><i className="fa fa-link  mr-2 text-white"></i>
			Resume  Link</a></h5>
			
			</Cell>
			<Cell className="resume-right-col" col={8}> 
			<h2> Education</h2>
			<Education
			startyear='August 2017'
			endyear='May 2021'
			Degree="Bachelor of Technology in Computer Science And Engineering"
			link="http://bietjhs.ac.in/"

			collegeName="BIET, Jhansi"
			Percentage="80%"
			color="1px solid white"

			/>

			<Education
			startyear="April 2015"
			endyear='March 2016'
			Degree="Intermediate"
			collegeName="St. Paul's Senior Secondary School, Mathura"
			link="#"
			Percentage="86.7%"
			color="1px solid white"
			


			/>
			<Education
			startyear='April 2013'
			endyear='March 2014'
			Degree="High School"
			collegeName="St. Paul's Senior Secondary School, Mathura"
			link="#"
			Percentage="85.5%"
			color="1px solid #27221f"


			/>
			<hr style={{ borderTop: '2px solid white', width: '100%'}}/>

<h2> Work Experience</h2>
<Experience
icon="fa-building"
position="Summer Interns"
startyear="22 May 2020"
endyear="22 july 2020"
Company="Volsko Infotech Pvt Ltd"
details="Back end Developer . Worked on Rest Api and Django Framework "

/>
<Experience
icon=""
position="Member of Technical Club"
startyear="January 2020"
endyear="present"
Company="R Cubed"
details="R Cubed is technical club of our college"

/>
<hr style={{ borderTop: '2px solid white', width: '100%'}}/>

<h2>Skills</h2>

<h4>Languages</h4>
<Skills
 skill="Python" 
 progress={75}/>

 <Skills
 skill="C" 
 progress={75}/>

<Skills
 skill="Javascript" 
 progress={50}/>

<Skills
 skill="C++" 
 progress={50}/>

 
<h4> FrontEnd</h4>
 <Skills
 skill="HTML5" 
 progress={75}/>


 <Skills
 skill="CSS" 
 progress={75}/>



 <Skills
 skill="Bootstrap4" 
 progress={75}/>

<Skills
 skill="React" 
 progress={50}/>


<h4>Backend </h4>

 <Skills
 skill="Django" 
 progress={75}/>

 <h4> API </h4>
 <Skills
 skill="RESTFULL API (DRF)" 
 progress={75}/>

 
 <h4> Other </h4>

<Skills
 skill="Git" 
 progress={75}/>

<Skills
 skill="Github" 
 progress={75}/>

			</Cell>
			</Grid>

			</div>

			)
	}
}

export default Resume
