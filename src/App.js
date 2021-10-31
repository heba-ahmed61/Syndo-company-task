import { Application , Container} from './AppStyle.js';
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsPage from './Pages/PostsPage/PostsPage';
import PostDetails from './Pages/PostDetails/PostDetails.js';
import Footer from './Components/Footer/Footer.js';
import Navbar from './Components/Navbar/Navbar.js';


function App() {
  

  return (
    <Application>
      
    
      <BrowserRouter>
    
      <Switch>
      <Route exact path = "/"><Home/></Route>
      <Route path = "/posts">
      <PostsPage/>
      </Route>
      <Route path = "/postdetails/:id">
        <PostDetails/>
      </Route>
      </Switch>
  
      
      <Footer/>
      </BrowserRouter>
  


    </Application>
    
  );
}

export default App;
