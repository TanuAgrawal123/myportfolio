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
		<Button colored><a href="https://github.com/TanuAgrawal123/weather_app">Github</a></Button>
		<Button colored><a href="">LiveDemo</a></Button>

		</CardActions>
		<CardMenu style={{ color:"#fff"}}>
		<IconButton name="share"/>
		</CardMenu>

		</Card>

		
		<Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
		<CardTitle style={{color:'#fff', height:'176px',  background: 'url(https://miro.medium.com/max/1400/1*NW5Hhpv4Gckxynr5U-MZwA.jpeg) center / cover'}}></CardTitle>
		<CardText>Portfolio: describing about me</CardText>
		<CardActions border>
		<Button colored><a href="https://github.com/TanuAgrawal123/myportfolio">Github</a></Button>
		<Button colored><a href="#">LiveDemo</a></Button>

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
		<CardTitle style={{color:'#fff', height:'176px',  background: 'url(https://github.com/TanuAgrawal123/StudyApp/blob/master/Notes/static/Notes/images/background.jpg?raw=true) center / cover'}}></CardTitle>
		<CardText><h6 className="text-primary">GCS(Study App)</h6> Providing a platform to students and faculty of our college for sharing study material</CardText>
		<CardActions border>
		<Button colored><a href="https://github.com/TanuAgrawal123/StudyApp">Github</a></Button>
		<Button colored><a href="http://gcsstudysite.pythonanywhere.com/">LiveDemo</a></Button>

		</CardActions>
		<CardMenu style={{ color:"#fff"}}>
		<IconButton name="share"/>
		</CardMenu>

		</Card>

		
		<Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
		<CardTitle style={{color:'#fff', height:'176px',  background: 'url(https://github.com/TanuAgrawal123/BlogApp/blob/master/blog/static/images/background.jpg?raw=true) center / cover'}}></CardTitle>
		<CardText><h6 className="text-primary">Blog App</h6>Personal Blog App having technical blogs in it.</CardText>
		<CardActions border>
		<Button colored><a href="https://github.com/TanuAgrawal123/BlogApp">Github</a></Button>
		<Button colored><a href="http://tanuagrawal.pythonanywhere.com/">LiveDemo</a></Button>

		</CardActions>
		<CardMenu style={{ color:"#fff"}}>
		<IconButton name="share"/>
		</CardMenu>

		</Card>
		<Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
		<CardTitle style={{color:'#fff', height:'176px',  background: 'url(https://previews.123rf.com/images/aamulya/aamulya1806/aamulya180600128/103724288-traditional-indian-drink-turmeric-golden-milk-with-ingredients-ginger-curcuma-honey-on-a-rustic-wood.jpg) center / cover'}}></CardTitle>
		<CardText><h6 className="text-primary"> Ayurveda Site</h6> Ayurveda site describing the future scope of ayurveda</CardText>
		<CardActions border>
		<Button colored><a href="https://github.com/TanuAgrawal123/Ayurveda-site">Github</a></Button>
		<Button colored><a href="#">LiveDemo</a></Button>

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
		<div className="projects-grid">
		<Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
		<CardTitle style={{color:'#fff', height:'176px',  background: 'url(https://github.com/TanuAgrawal123/100DaysOfCode/blob/master/bootstrappractice/project/images/background.jpg?raw=true) center / cover'}}></CardTitle>
		<CardText><h6 className="text-primary">Cameo Landing Page</h6></CardText>
		<CardActions border>
		<Button colored><a href="https://github.com/TanuAgrawal123/100DaysOfCode/blob/master/bootstrappractice/project/project1.html">Github</a></Button>
		
		</CardActions>
		<CardMenu style={{ color:"#fff"}}>
		<IconButton name="share"/>
		</CardMenu>

		</Card>

		
		<Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
		<CardTitle style={{color:'#fff', height:'176px',  background: 'url(https://www.ostraining.com/cdn/images/coding/bootstrap-hq.jpg) center / cover'}}></CardTitle>
		<CardText><h6 className="text-primary">Online Forum website</h6></CardText>
		<CardActions border>
		<Button colored><a href="https://github.com/TanuAgrawal123/100DaysOfCode/blob/master/bootstrappractice/project/online%20forum.html">Github</a></Button>
		

		</CardActions>
		<CardMenu style={{ color:"#fff"}}>
		<IconButton name="share"/>
		</CardMenu>

		</Card>
		
		</div>)
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
