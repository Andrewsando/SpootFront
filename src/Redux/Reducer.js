const initialState={
    generalUsers:[],
    copyusers:[],
    generalSongs:[],
    copySongs:[],
    detailSongs:[],
    generalPlaylists:[],
    copyPlaylists:[],
}

const rootReducer=(state= initialState, action)=>{
    switch(action.payload){
        default: return {...state}
    }
}

export default rootReducer