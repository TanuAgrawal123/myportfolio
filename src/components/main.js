import  React from 'react';
import Landingpage from './landingpage';
 import Aboutme from './aboutme';
 import Project from './project';
 import Contact from './contact';
 import Resume from './resume';
import {Switch, Route} from 'react-router-dom'; 
const Main = ()=>(
	<div>
	<Switch>
	<Route exact path ="/" component={Landingpage}/>
	<Route exact path ="/aboutme" component={Aboutme}/>
	<Route exact path ="/contact" component={Contact}/>
	<Route exact path ="/resume" component={Resume}/>
	<Route exact path ="/project" component={Project}/>
	
	
	</Switch>
</div>

);

export default Main;
