import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import profile from './myself1.jpg'
class Landingpage extends Component{
	render(){
		return(
			<div style={{ width: '100%', margin: 'auto' }}>

			<Grid className="Landing-grid">
			<Cell col={12}>
			<div className="banner-text">
			<img className="avatar-img rounded-circle mt-4"  src={profile}/>
			
<h3>Tanu Agrawal</h3>
<h4>Student</h4>
<p> I am currently a student of Final Year pursuing for my B.Tech degree in Computer Science and Engineering from Bundelkhand Institute of Engineering and Technology, Jhansi.
I love coding and designing websites. I am very much passionate about my work and have big dreams.
My strength is my family and the people around me.</p>
<br/> 
<hr/>
<br/>
<p> Bootstrap | Python | Django | React | javascript | Github | RestAPI  </p>
<div className="social-links">
<a href="https://github.com/TanuAgrawal123" rel="noopener noreferrer" target="_blank">
<i className="fa fa-github" aria-hidden="true"/>
</a>
<a href="https://www.linkedin.com/in/tanuagrawal/" rel="noopener noreferrer" target="_blank">
<i className="fa fa-linkedin" aria-hidden="true"/>
</a>
<a href="https://twitter.com/TanuAgr63491772" rel="noopener noreferrer" target="_blank">
<i className="fa fa-twitter" aria-hidden="true"/>
</a>
<a href="https://www.youtube.com/channel/UCDAOvX2Q5eKwDd3XY5vJixQ?view_as=subscriber" rel="noopener noreferrer" target="_blank">
<i className="fa fa-youtube" aria-hidden="true"/>
</a>
</div>
</div>
</Cell>
</Grid>

			</div>

			)
	}
}

export default Landingpage
