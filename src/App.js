import React, {Component} from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import About from './component/About';
import Home from './component/Home';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import {Switch, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userService from './services/userService';
import Logout from './component/Logout';


class App extends Component {

  state = {}

  componentDidMount(){
    const user  = userService.getCurrentUser();
    this.setState({user});
  }

  render(){
    const {user} = this.state;
    return (
      <div className="d-flex flex-column min-vh-100">
        <ToastContainer />
        <header>
          <NavBar user={user} />
        </header>
        <main className='container-fluid flex-fill'>
          <Switch>
            <Route path='/logout' component={Logout} />
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/about' component={About} />
            <Route path='/' exact component={Home} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
    );
  }
}


export default App;
