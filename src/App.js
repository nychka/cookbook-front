import React, {Component, Fragment} from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './App.css';
import { Button} from 'react-bootstrap';
import {  AsyncTypeahead } from 'react-bootstrap-typeahead';

class App extends Component {
    state = {
        isLoading: false,
        options: [{id: 1, title: 'egg'}]
    }

  render() {
    return (
      <div className="App">
          <h2>Cookbook</h2>
          <Fragment>
              <AsyncTypeahead
                  multiple
                  clearButton
                  placeholder='Search products..'
                  labelKey={(option) => `${option.title}`}
                  isLoading={this.state.isLoading}
                  onSearch={query => {
                      this.setState({isLoading: true});
                      fetch(`http://localhost:3000/products?q=${query}`)
                          .then(resp => resp.json())
                          .then(json => this.setState({
                              isLoading: false,
                              options: json,
                          }));
                  }}
                  options={this.state.options}
              />
          </Fragment>
      </div>
    );
  }
}

export default App;
