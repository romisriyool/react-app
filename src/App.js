import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, HashRouter  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Review from './pages/Review';
import Comparison from './pages/Comparison';
import Blog from './pages/Blog';
import Single_Blog from './pages/Single_Blog';



class App extends React.Component {

  render() {
    return (
      <Router basename="/react-app">
        <Route path={"/"} exact component={Home} />
        <Route path={"/home"} exact component={Home} />
        <Route path={"/about"} exact component={About} />
        <Route path={"/recipes"} exact component={Recipes} />
        <Route path={"/review"} exact component={Review} />
        <Route path={"/comparison"} exact component={Comparison} />
        <Route path={"/blog"} exact component={Blog} />
        <Route path={"/single_blog/:id"} exact component={Single_Blog} />
      </Router>
    );
  }
}



export default App;