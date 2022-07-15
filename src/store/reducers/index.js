import { combineReducers } from 'redux';

const songsReducers = () => {
    return { songs: [
        { id: 1, title: 'No Scrubs', duration: '3:05', favoriteTitle: true},
        { id: 2, title: 'Macarena', duration: '1:45'},
        { id: 3, title: 'All Star', duration: '2:03'},
        { id: 4, title: 'Let me down slowly', duration: '3:45'}
    ], 
    favoriteTitle: 'All Star'
}
}

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type === 'SONG_SELECTED') {
        return action.payload 
    }
    return selectedSong;
}

const claimHistory = (oldListOfClaim = [], action) => {
    if(action.type === 'CREATE_CLAIM'){
        return [...oldListOfClaim, action.payload]
    }
    return oldListOfClaim
}

const accounting = (bagOfMoney = 100, action) => {
    if(action.type === 'CREATE_CLAIM'){
        return bagOfMoney - action.payload.amtOfMoneyToCollect
    } else if (action.type === 'CREATE_POLICY'){
        return bagOfMoney + action.payload.amount
    }
    return bagOfMoney;
}

const policies = (listOfPolicy = [], action) => {
    if(action.type === 'CREATE_POLICY') {
        return [...listOfPolicy, action.payload]
    } else if(action.type === 'DELETE_POLICY') {
        return listOfPolicy.filter(policy => policy.name !== action.payload.name)
    }
    return listOfPolicy
} 


export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
})

