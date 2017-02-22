// //Action constant Names
// const SELECT_BAND = 'SELECT_BAND';

// {
// 	type: SELECT_BAND,
// 	payload: band
// }

//Above was 12.5, below is 12.6

const SELECT_BAND = 'SELECT_BAND';

export function selectBand(band) {
	//selectBand is an ActionCreator, it needs to return an action 
	//which is an object that must have a type property
	return {
		type: SELECT_BAND,
		payload: band
	};
}