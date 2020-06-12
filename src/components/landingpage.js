import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Landingpage extends Component{
	render(){
		return(
			<div style={{ width: '100%', margin: 'auto' }}>

			<Grid className="Landing-grid">
			<Cell col={12}>
			<img className="avatar-img rounded-circle" src="data:image/jpeg;base64,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"/></Cell>
<div className="banner-text">
<h3>Tanu Agrawal</h3>
<h4>Student</h4>
<hr/>
<p>HTML | CSS | Bootstrap | Python | Django | React | javascript | Github </p>
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
</Grid>

			</div>

			)
	}
}

export default Landingpage
