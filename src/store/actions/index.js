
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}



const createPolicy = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name, amount
        }
    }
}

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    }
}

const claimPolicy = (name, amtOfMoneyToCollect) => {
    return {
        type: 'CLAIM_POLICY',
        payload: {
            name, amtOfMoneyToCollect
        }
    }
}