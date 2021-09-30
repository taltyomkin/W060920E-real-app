import './App.css';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import {Switch, Route} from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <NavBar />
      </header>
      <main className='container-fluid flex-fill'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
  </div>
  );
}

export default App;
