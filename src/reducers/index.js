import { combineReducers } from 'redux'

const songReducer = () => {
	return [
		{ title: 'Selena', duration: '4:05' },
		{ title: 'Beliver', duration: '2:30' },
		{ title: 'Touch It', duration: '4:36' },
		{ title: 'Montero', duration: '5:10' },
	]
}

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload
	}

	return selectedSong
}

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer,
})
