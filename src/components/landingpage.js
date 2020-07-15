import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import profile from './profile.jpg'
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
<hr/>
<p> Bootstrap | Python | Django | React | javascript | Github </p>
<div className="social-links">
<a href="https://github.com/TanuAgrawal123" rel="noopener noreferrer" target="_blank">
<i className="fa fa-github" aria-hidden="true"/>
</a>
<a href="http://google.com" rel="noopener noreferrer" target="_blank">
<i className="fa fa-linkedin" aria-hidden="true"/>
</a>
<a href="http://google.com" rel="noopener noreferrer" target="_blank">
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
