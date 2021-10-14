import './App.css';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import About from './component/About';
import Home from './component/Home';
import SignUp from './component/SignUp';
import {Switch, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <NavBar />
      </header>
      <main className='container-fluid flex-fill'>
        <Switch>
          <Route path='/signup' component={SignUp} />
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

export default App;
