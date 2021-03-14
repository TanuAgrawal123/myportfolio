import React , {Component} from 'react';
import { Grid,Cell, Button, CardMenu, IconButton} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'
import Project from './resumeproject';
import profile from './myself1.jpg'
class Resume extends Component{
	render(){
		return(
			<div>
			<Grid>
			<Cell col={4}>
			<div style={{textAlign:'Center'}}>
			<img src={profile} className="rounded-circle"
			style={{height:'200px'}}	/>



			</div>
			<h3 style={{paddingTop:'20px',  color:'blue'}}>Tanu Agrawal</h3>
			<h4 style={{color:'grey'}}>Programmer</h4>
			<hr style={{borderTop:'3px solid 833fb2', width:'50%'}}/>
			<p>I am Tanu Agrawal currently a student of Final Year pursuing for my B.Tech degree in Computer Science and Engineering 
			from Bundelkhand Institute of Engineering and Technology Jhansi.
			I love Coding and designing Website. </p>
			<hr style={{borderTop:'3px solid 833fb2', width:'50%'}}/>
			<h5>Address</h5>
			<p>Vishwa Laxmi Nagar ,Mathura </p>
			<h5> Mobile</h5>
			<p>8476935639</p>
			<h5>Email</h5>
			<p>tanuagrawal1389@gmail.com</p>
			<hr style={{borderTop:'3px solid 833fb2', width:'50%'}}/>
			<h5> Languages</h5>
			<p> English and Hindi</p>
			
		<hr style={{borderTop:'3px solid 833fb2', width:'50%'}}/>
			<h5><a  className="btn btn-info" href="https://github.com/TanuAgrawal123/Resume/blob/master/resume%20(8).pdf"><i className="fa fa-link  mr-2 text-white"></i>
			Resume  Link</a></h5>
<hr style={{borderTop:'3px solid 833fb2', width:'50%'}}/>

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
 progress={75}/>

 
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

			<p><i className="fa fa-copyright"> </i> 2020 Tanu Agrawal. All rights reserved	</p>		</Cell>
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
position=" Executive Member and Mentor"
startyear="October 2020"
endyear="Present"
Company="CODE- Club Of DEvelopers"
details="CODE is an initiative of the Computer Science Department, BIET Jhansi, focuses on providing better learning and career opportunities"

/>
<hr style={{ borderTop: '2px solid white', width: '100%'}}/>
<h2> Projects</h2>
<Project
topic="GCS(Study App)"
startyear="May 2020"
endyear="June 2020"
link="https://github.com/TanuAgrawal123/StudyApp"
discription="Django Based Website in order to provide study material to college student"

/>
<Project
topic="Ayurveda Site"
startyear="April 2019"
endyear="April 2019"
link="#"
discription="Django Based Website in order to define scope of Ayurveda"

/>
<Project
topic="Blog App"
startyear="December 2019"
endyear=" January 2019"
link=""
discription="Django Based Person Blog Website"


/>

<Project
topic="Weather App"
startyear="January 2020"
endyear=" January 2020"
link="https://github.com/TanuAgrawal123/weather_app"
discription="React Based Weather Site giving temperature and Weather condition of an area"


/>
<Project
topic="Portfolio"
startyear="june 2020"
endyear=" june 2020"
link="https://github.com/TanuAgrawal123/myportfolio"
discription="React Based Portfolio describing all about me"



/>

<Project
topic="Bootstrap4 Projects"
startyear="jan 2019"
endyear="jan 2019"
link="https://github.com/TanuAgrawal123/100DaysOfCode/tree/master/bootstrappractice/project"
discription="React Based Portfolio describing all about me"



/>
<hr style={{ borderTop: '2px solid white', width: '100%'}}/>
<h3> Other Acheivements</h3>
<h6>Completed 100 Days of Coding Challenge. <a href="https://github.com/TanuAgrawal123/100DaysOfCode"> Github Link</a></h6>
<h6>Awarded with Tablet by state government to be in Top 100 girls in UPSEE exam 2017.</h6>
<h6> Got a HackerRank Skills verification test certificate for Problem Solving(Intermediate)! <a href="https://www.hackerrank.com/certificates/cf7d76f1c2c8">Credentials Link !</a>
</h6>
<h6>Solved 200+ questions on Leetcode. <a href="https://leetcode.com/tanuagrawal/">Leetcode Profile</a></h6>
			</Cell>
			</Grid>

			</div>

			)
	}
}

export default Resume
