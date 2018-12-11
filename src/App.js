import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: null,
      }
  }

  removesPet = (id) => {
    let index = this.state.petList.findIndex(obj => obj.id === id);
    let newList = [...this.state.petList.slice(0,index), ...this.state.petList.slice(index+1)];
    this.setState({petList: newList})

    if(this.state.currentPet && this.state.currentPet.id === id){
      this.setState({currentPet: null})
    }
  }

  setCurrentPet = (pet) => {
    this.setState({currentPet: pet})
  }

  createNewPet = (newPet) => {
    const pets = this.state.petList;
    let newID = pets[pets.length - 1]["id"] + 1;
    newPet["id"] = newID;

    pets.push(newPet);
    this.setState({petList: pets});
  }

  render() {
    const { currentPet } = this.state;

    let pet;
    if(currentPet){
      pet = <PetDetails currentPet={this.state.currentPet} />;
    }

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
        <section>
          {pet}
        </section>
        <section className="pet-list-wrapper">
          <PetList petInfo = {this.state.petList} petDetails = {this.setCurrentPet}removingPet = {this.removesPet}/>
        </section>
        <section className="new-pet-form-wrapper">
          <NewPetForm createPet = {this.createNewPet}/>
        </section>
      </main>
    );
  }
}

export default App;
