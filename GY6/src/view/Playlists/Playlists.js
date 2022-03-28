import TrackDetails from './TrackDetails';
import Playlist from './Playlist';
import PlaylistList from './PlaylistList';
import { examplePlaylists } from '../../domain/playlist';
import { exampleTracks } from '../../domain/track';
import { useState } from 'react';

const Playlists = () => {
    const playlists = examplePlaylists;
    const tracks = exampleTracks;

    const defaultId = playlists[0].id;
    const [chosenPlaylistId, setChosenPlaylistId] = useState(defaultId); // Az ilyen mindig egy változó és a settere, a paraméter a kezdőérték
    const chosenPlaylist = playlists.find(
        playlist => playlist.id === chosenPlaylistId
    );

    const [chosenTrackId, setChosenTrackId] = useState(defaultId);
    const chosenTrack = tracks.find(
        track => track.id === chosenTrackId
    );

    const handleChosenPlaylist = id => {
        setChosenPlaylistId(id);
        setChosenTrackId(null);
    }

    const handleChosenTrack = id => {
        setChosenTrackId(id);
    }

    return (
        <>
            <div className="ui container">
                <h1>My Playlists</h1>
                <div className="ui stackable two column grid">
                    <PlaylistList
                        playlists={playlists}
                        chosenPlaylistId={chosenPlaylistId}
                        onChosePlaylist={handleChosenPlaylist}
                    ></PlaylistList>
                    <Playlist
                        chosenPlaylist={chosenPlaylist}
                        chosenTrackId={chosenTrackId}
                        onChoseTrack={handleChosenTrack}
                    ></Playlist>
                </div>
                <div className="ui divider"></div>
                <TrackDetails chosenTrack={chosenTrack}></TrackDetails>
            </div>

            <div className="ui modal">
                <i className="close icon"></i>
                <div className="header">Add new Playlist</div>
                <div className="image content">
                    <div className="description">
                        <div className="ui form">
                            <div className="field">
                                <label>Name</label>
                                <input required type="text" placeholder="My Playlist" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <div className="ui black deny button">
                        Cancel
                    </div>
                    <div className="ui positive right labeled icon button">
                        Add
                        <i className="plus icon"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Playlists;