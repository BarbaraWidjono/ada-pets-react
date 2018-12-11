import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      images: "",
      species: "",
    };
  }

  addPetName = (event) => {
    this.setState({name: event.target.value})
  }

  addImage = (event) => {
    this.setState({images: event.target.value})
  }

  addSpecies = (event) => {
    this.setState({species: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newPet = {
      name: this.state.name,
      images: this.state.images,
      species: this.state.species
    }

    if(this.state.name.length > 0 && this.state.images.length > 0 && this.state.species.length > 0){
      this.setState({
        name: "",
        images: "",
        species: "",
      })

      this.props.createPet(newPet);
    }
  }

  render() {
    return (
      <form
        className="new-pet-form"
        onSubmit={this.onFormSubmit}>
        <h3>Add a Pet</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.addPetName}
          />
        </div>
        <div>
          <label htmlFor="images">Image Link:</label>
            <input
              name="images"
              value={this.state.images}
              onChange={this.addImage}
            />
        </div>
        <div>
          <label htmlFor="species">Species:</label>
            <input
              name="species"
              value={this.state.species}
              onChange={this.addSpecies}
            />
        </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
