import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Experience extends Component{
	render()
	{
		return(
<div>
<Grid>
<Cell col={8}>
	
					<div className="media mb-2">
										<i className="fa fa-building fa-3x fa-fw mr-2 text-white"></i>
										
										
										<div className="media-body">
										<h4 className="mb-1 text-white">{this.props.position}</h4>
											<p className="  h4 mb-1 text-primary">{this.props.Company}</p>
												 <div className="d-sm-flex justify-content-sm-between align-item-sm-baseline ">{this.props.details}
										
                  </div>
                
                       </div>     </div> 
                </Cell>
                <Cell col={4}>
                 <small className="d-block text-uppercase font-weight-bold text-muted">{this.props.startyear}-{this.props.endyear}</small>
</Cell>
                 
                </Grid>
</div>
			)
	}
} 

export default Experience;