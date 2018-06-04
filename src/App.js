import React, {Component, Fragment} from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './App.css';
import {  AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import axios from 'axios';

class Recipe extends Component{
    render(){
        return(
            <Card style={{maxWidth: '22rem'}}>
                <CardImage  className="img-thumbnail" src={ this.props.image } />
                <CardBody>
                    <CardTitle>{ this.props.title }</CardTitle>
                    <CardText>{ this.props.description }</CardText>
                    <Button href="#">Cook</Button>
                </CardBody>
            </Card>
        )
    }
}

class App extends Component {
    state = {
        isLoading: false,
        options: [/*{id: 1, title: 'egg'}*/],
        api_host: 'http://localhost:3000',
        recipes: []
    }

    changeProductHandler = (products) => {
        const titles = products.map(product => product.title);
        const recipes = [];

        console.log(titles);
        if(titles.length == 0){
            this.setState({ recipes: recipes });
            return false;
        }

        console.log(titles);
        axios.get(this.state.api_host + '/recipes?products=' + titles.join(','))
             .then(response => {
                console.log(response);
                response.data.map(recipeData => {
                    let recipe = <Recipe
                        title={ recipeData.title }
                        description={ recipeData.description }
                        image={ recipeData.image }
                    />
                    recipes.push(recipe);
                })

                 this.setState({ recipes: recipes });
             })
            .catch(error => {
                console.error(error);
            })
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
                  onChange={this.changeProductHandler}
                  options={this.state.options}
              />
          </Fragment>

          <div id="recipes_wrapper">
              { this.state.recipes }
          </div>
      </div>
    );
  }
}

export default App;
