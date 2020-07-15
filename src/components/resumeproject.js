import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class ResumeProject extends Component{
	render()
	{
		return(
<div>
<Grid>
<Cell col={8}>
	
					<div className="media mb-2">
										<i className="fa fa-code fa-3x fa-fw mr-2 text-white"></i>
										
										
										<div className="media-body">
										<h4 className="mb-1 text-white">{this.props.topic}</h4>
											
												<div className="d-sm-flex justify-content-sm-between align-item-sm-baseline "><a className="text-primary" href="{this.props.link}">Github <i className="fa fa-icon"></i></a></div>
										<p className="  mb-1 ">{this.props.discription}</p>
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

export default ResumeProject;
