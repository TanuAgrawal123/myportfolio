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
<h4>Software Developer</h4>
<p> Myself Tanu Agrawal. I am from Mathura, Uttar Pradesh. I have done my graduation from <b>BIET Jhansi</b> in  <b>CSE</b> field with an aggregate of 80%. I love designing website and writing backend logics.
I am an executive member of college's <b>technical club (CODE)</b> where we guide our juniors. I have participated in Global <b>Hacktoberfest </b> from Last three year and contributed in open source repository. I have secured AIR 1855 in Gate exam that help me to boost my core subject Knowledge.
Coming to my strength i am good learner and have positive attitude and committed to my work.</p>
<p>That was all about me.</p>
Thankyou:)

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
