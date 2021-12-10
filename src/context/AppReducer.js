export default (state, action) =>{
    switch(action.type){
        
        case "ADD_POKEMON_TO_FAV":
            return{
                ...state,
                favMons:[action.payload,...state.favMons]
            }
        
        case "REMOVE_POKEMON_FROM_FAV":
            return{
                ...state,
                favMons:state.favMons.filter(pokemon => pokemon.id!==action.payload)
            }   

        default:
            return state;
    }
}