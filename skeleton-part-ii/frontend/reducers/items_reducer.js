import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from './../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    switch (action.type){
    case RECEIVE_ALL_POKEMON:

      let items = {};
      console.log(action)
    //   action.pokemon.forEach(poke => {
    //       items[poke.item.id] = poke.item;
    //   })

      return Object.assign({}, items, state);

    case RECEIVE_ONE_POKEMON:
      return Object.assign({}, action.poke.item, state)
    default:
      return state;
    }
  }


  export default itemsReducer