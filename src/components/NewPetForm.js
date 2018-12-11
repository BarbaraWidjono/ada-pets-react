import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: "",
      location: "",
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

  addAbout = (event) => {
    this.setState({about: event.target.value})
  }

  addLocation = (event) => {
    this.setState({location: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newPet = {
      name: this.state.name,
      images: this.state.images,
      species: this.state.species,
      location: this.state.location,
      about: this.state.about,
    }

    if(this.state.name.length > 0 && this.state.images.length > 0 && this.state.species.length > 0){
      this.setState({
        about: "",
        location: "",
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
        <div>
          <label htmlFor="about">About:</label>
            <input
              name="about"
              value={this.state.about}
              onChange={this.addAbout}
            />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
            <input
              name="location"
              value={this.state.location}
              onChange={this.addLocation}
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
