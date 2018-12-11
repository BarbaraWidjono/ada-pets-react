import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {
  let pets = props.petInfo;
  let petDetailsCallback = props.petDetails;

  // detailsCallback = {() => details(pet)}/> is a 'closure', therefore 'pet' from petCollection is accessible and can be passed as an argument to details()
  const details = (pet) => {
    console.log("Inside the PetList");
    console.log(pet);
    petDetailsCallback(pet)
  }

  const petCollection = pets.map((pet, i) => {
    return <PetCard
      key={i}
      id={pet.id}
      name={pet.name}
      species={pet.species}
      about={pet.about}
      location={pet.location}
      detailsCallback = {() => details(pet)}/>
  })

  return (
    <div className="card-group">
      <li>
        {petCollection}
      </li>
    </div>
  )
}


PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
