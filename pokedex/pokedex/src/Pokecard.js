import React, {Component} from 'react';
import './Pokecard.css'

// const Poke_API= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Poke_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)



class Pokecard extends Component {

  render() {
      let imgSrc = `${Poke_API}${padToThree(this.props.id)}.png`
      return (
      <div className="Pokecard">
          <h1 className='Pokecard-title'>{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <p className='Pokecard-data'>Type: {this.props.type}</p>
        <p className='Pokecard-data'>EXP: {this.props.exp}</p>


      </div>
      )
      
    }
//props names are coming from the props defined on the Pokemon component within the Pokedex component
    
}

export default Pokecard;