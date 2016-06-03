export default function(state = [], action){
  switch(action.type){
    case 'symbols':
      return action.payload;
  	case 'deleteStock':
		return action.payload;	
	 case 'addStock':
		return action.payload;		

	}
    return state;
  
}

//TODO::::> REFORMAT SO ENTIRE STATE DOESNT HAVE TO BE RENDERED EACH TIME!!

// export default function(state = [], action) {
//   switch(action.type) {
//   	case FETCH_STOCKS:
//   		return [...state, action.payload];
//   	case DELETE_STOCK:
//   		return [...state.slice(0, action.payload), ...state.slice(action.payload + 1 )]		
//   		//http://stackoverflow.com/questions/34582678/is-this-the-correct-way-to-delete-an-item-using-redux
//   }
//   return state;
// }