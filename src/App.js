 
import './App.css';
import BlogDetails from './components/BlogDetails';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom/cjs/react-router-dom';
import Form from './components/Form';
import MyBlog from './components/Home';
import Navbar from './components/Navbar';



function App() {
  return (
   <Router>
    <div className='App'>
      <Navbar/>
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <MyBlog/>
          </Route>
          <Route path="/Form">
            <Form/>
          </Route>
          <Route path="/Blog-details/:id">
            <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </div>
   </Router>
  );
}

export default App;
