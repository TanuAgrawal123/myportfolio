import React , {Component} from 'react';
import {Tabs, Tab, Grid,Cell, Card,CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';



class Project extends Component{
	constructor(props){
		super(props);
		this.state={
			activeTab:0
		}

	}
toggleCategory(){
if (this.state.activeTab==1){
	return(
		<div className="projects-grid">
		<Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
		<CardTitle style={{color:'#fff', height:'176px',  background: 'url(https://www.xda-developers.com/files/2018/05/android-weather-apps-810x298_c.png) center / cover'}}></CardTitle>
		<CardText>React Based Weather App</CardText>
		<CardActions border>
		<Button colored>Github</Button>
		<Button colored>LiveDemo</Button>

		</CardActions>
		<CardMenu style={{ color:"#fff"}}>
		<IconButton name="share"/>
		</CardMenu>

		</Card>

		
		<Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
		<CardTitle style={{color:'#fff', height:'176px',  background: 'url(https://www.xda-developers.com/files/2018/05/android-weather-apps-810x298_c.png) center / cover'}}></CardTitle>
		<CardText>React Based Weather App</CardText>
		<CardActions border>
		<Button colored>Github</Button>
		<Button colored>LiveDemo</Button>

		</CardActions>
		<CardMenu style={{ color:"#fff"}}>
		<IconButton name="share"/>
		</CardMenu>

		</Card>
		</div>
		)}
else if (this.state.activeTab==0){
	return(
		<div className="projects-grid">
		<Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
		<CardTitle style={{color:'#fff', height:'176px',  background: 'url(https://libreshot.com/wp-content/uploads/2016/07/red-background-book-861x646.jpg) center / cover'}}></CardTitle>
		<CardText><h6 className="text-primary">GCS(Study App)</h6> Providing a platform to students and faculty of our college for sharing study material</CardText>
		<CardActions border>
		<Button colored><a href="https://github.com/TanuAgrawal123/StudyApp">Github</a></Button>
		<Button colored><a href="http://gcsstudyapp.pythonanywhere.com/">LiveDemo</a></Button>

		</CardActions>
		<CardMenu style={{ color:"#fff"}}>
		<IconButton name="share"/>
		</CardMenu>

		</Card>

		
		<Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
		<CardTitle style={{color:'#fff', height:'176px',  background: 'url(https://clickfirstmarketing.com/wp-content/uploads/blog-for-business.jpg) center / cover'}}></CardTitle>
		<CardText><h6 className="text-primary">Blog App</h6>Personal Blog App having technical blogs in it.</CardText>
		<CardActions border>
		<Button colored>Github</Button>
		<Button colored>LiveDemo</Button>

		</CardActions>
		<CardMenu style={{ color:"#fff"}}>
		<IconButton name="share"/>
		</CardMenu>

		</Card>
		<Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
		<CardTitle style={{color:'#fff', height:'176px',  background: 'url(https://previews.123rf.com/images/aamulya/aamulya1806/aamulya180600128/103724288-traditional-indian-drink-turmeric-golden-milk-with-ingredients-ginger-curcuma-honey-on-a-rustic-wood.jpg) center / cover'}}></CardTitle>
		<CardText><h6 className="text-primary"> Ayurveda Site</h6> Ayurveda site describing the future scope of ayurveda</CardText>
		<CardActions border>
		<Button colored>Github</Button>
		<Button colored>LiveDemo</Button>

		</CardActions>
		<CardMenu style={{ color:"#fff"}}>
		<IconButton name="share"/>
		</CardMenu>

		</Card>
		</div>
		)
}
else if (this.state.activeTab==2){
	return(
		<div><h1>This is Bootstrap</h1></div>)
	
}
}
	render()
	{
		return(
			<div className="category">
			<Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
			<Tab>Django</Tab>
			<Tab>React</Tab>
			<Tab>Bootstrap</Tab>
			</Tabs>
			
			<Grid>
			<Cell col={12}>
			<div className="content">{this.toggleCategory()}</div>
			</Cell>
			</Grid>
			
			


			</div>

			)
	}
}

export default Project
