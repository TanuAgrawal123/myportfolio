import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Education extends Component{
	render()
	{
		return(
<div>
<Grid>
<Cell col={8}>
	
					<div className="media mb-2">
										<i className="fa fa-university fa-3x fa-fw mr-2 text-white"></i>
										
										
										<div className="media-body">
											<p className="  h4 mb-1 text-white">{this.props.Degree}</p>
												 <div className="d-sm-flex justify-content-sm-between align-item-sm-baseline "><h5 className="mb-0 text-primary"><a href={this.props.link} className="text-primary">{this.props.collegeName}</a></h5> 

                  </div>
                <div className="d-sm-flex justify-content-sm-between align-item-sm-baseline "><h5 className="mb-0 text-white">{this.props.Percentage}</h5></div>
                       </div>
                       </div>      
                </Cell>
                <Cell col={4}>
                 <small className="d-block text-uppercase font-weight-bold text-muted">{this.props.startyear}-{this.props.endyear}</small>
</Cell>
                 
                
                
                
</Grid>
</div>
			)
	}
} 

export default Education;