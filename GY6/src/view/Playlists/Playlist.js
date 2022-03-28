
import cn from 'classnames'
const Playlist = (props) => {
    const { chosenPlaylist, chosenTrackId, onChoseTrack } = props;
    return (
        <div className="ui ten wide column">
            <h3>{chosenPlaylist?.title || "Még nincs"}</h3>
            <div className="ui very relaxed selection list">
                {chosenPlaylist.tracks.map(track => {
                    return (<div className={cn("item", {
                        active: track.id === chosenTrackId
                    })}
                        onClick={() => onChoseTrack(track.id)}
                    >
                        {track.thumbnailURL ? <img src={track.thumbnailURL} /> : <i className="large music middle aligned icon"></i>}

                        <div className="content">
                            <a className="header">{track.title}</a>
                            <div className="description">{track.artist}</div>
                        </div>
                    </div>);
                })}

            </div>
        </div>
    );
};

export default Playlist;