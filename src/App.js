 
import './App.css';
import BlogDetails from './components/BlogDetails';

import Form from './components/Form';
import MyBlog from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom/cjs/react-router-dom';


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
          <Route path="/BlogDetails/:id">
            <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </div>
   </Router>
  );
}

export default App;
