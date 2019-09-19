export default (state = 3, action) => {
	switch (action.type) {
		case 'CHANGE_TILE_SIZE':
			return action.payload
		default:
			return state
	}
}