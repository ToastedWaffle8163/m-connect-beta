import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import {pageDetails as aboutPageDetails} from "./components/About";
import {pageDetails as learnMorePageDetails} from "./components/LearnMore";
import { pageDetails as homePageDetails } from "./components/Home";


function App() {
  var pages = [
    learnMorePageDetails,
    aboutPageDetails, 
    homePageDetails,
  ]
  var pageRoutes = pages.map( (n) =>{
    return <Route key={n.pageName} path={n.location} component={n.component}/>
  })

  return (
    <Router>
      <div>
      <Header pageList={pages} companyName="MConnect" />
      <Switch> 
        {pageRoutes}
      </Switch>
      </div>
    </Router>
  );
}

export default App;
