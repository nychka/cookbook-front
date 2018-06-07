import React, { Component } from "react";
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

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

export default Recipe;