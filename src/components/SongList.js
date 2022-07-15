import React from "react";
import { connect } from "react-redux/es/exports";
import { selectSong } from '../store/actions'

const SongList = (props) => {
    console.log(props.selectSong)
    return <div>
        {
            
            props.songs.map(song => {
                console.log(song)
                return (
                    <div className="ui divided list" key={song.title}>
                        <div className="item" >
                        <div className="right floated content">
                            <button
                            className="ui button primary"
                            onClick={() => props.selectSong(song)}
                            >
                            Select
                            </button>
                        </div>
                        <div className="content" >{song.title} {song.favoriteTitle ? 'Favorite!' : ''}</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
}

const mapStateToProps = (state) => {
    console.log(state)
    return { songs: state.songs.songs, favoriteTitle: state.favoriteTitle}
}
export default connect(
    mapStateToProps,
    { selectSong }
)(SongList)