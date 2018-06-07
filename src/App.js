import React, {Component} from 'react';
import './App.css';
import Home from './Home/Home';
import { Route, Link } from 'react-router-dom';
import { Navbar, NavLink, NavItem, NavbarNav } from 'mdbreact';


class App extends Component {

  render() {
    return (
          <div className="App">
              <Navbar color="gray" expand="md" scrolling>
                  <NavbarNav left>
                      <NavItem>
                          <NavLink to="/" className='navbar-brand'><strong>CookBook</strong></NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/products">Products</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/recipes">Recipes</NavLink>
                      </NavItem>
                  </NavbarNav>
              </Navbar>

              <Route path="/" exact component={Home} />
              <Route path="/products" render={() => <h1>Products</h1>} />
              <Route path="/recipes" render={() => <h1>Recipes</h1>} />
          </div>
    );
  }
}

export default App;
