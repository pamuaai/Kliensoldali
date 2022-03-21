import cn from 'classnames'
const PlaylistList = (props) => {
    const { playlists, chosenPlaylistId, onChosePlaylist, } = props;
    return (
        <div className="ui six wide column">
            <h3>Playlists</h3>
            <div className="ui very relaxed selection list">
                {playlists.map((playlist) => (
                    <div
                        key={playlist.id}
                        className={cn("item", {
                            active: playlist.id === chosenPlaylistId
                        })}
                        onClick={() => onChosePlaylist(playlist.id)}>
                        <i className="large compact disc middle aligned icon"></i>
                        <div className="content">
                            <a className="header">{playlist.title}</a>
                            <div className="description">{`${playlist.tracks.length} songs`}</div>
                        </div>
                    </div>
                ))}
                <div className="item" id="newPlaylist">
                    <i className="large green plus middle aligned icon"></i>
                    <div className="content">
                        <a className="header">New</a>
                        <div className="description">Create a new playlist</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function selectItem(itemId) {

}

export default PlaylistList;