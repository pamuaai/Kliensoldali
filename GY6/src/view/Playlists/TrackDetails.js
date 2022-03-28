
const TrackDetails = (props) => {
    const { chosenTrack } = props;
    return (
        <div className="ui segment">
            <div className="ui items">
                <div className="item">
                    <div className="image">
                        {!!chosenTrack.thumbnailURL ? <img src={chosenTrack.thumbnailURL} /> : <i className="large music middle aligned icon"></i>}

                    </div>
                    <div className="content">
                        <a className="header">{chosenTrack.title}</a>
                        <div className="meta"><span>{chosenTrack.artist}</span><span>{chosenTrack.length}</span></div>
                        <div className="extra">
                            {!!chosenTrack.spotifyURL ? (<a
                                href={chosenTrack.spotifyURL}
                                className="ui button tiny green button" target="_blank" rel="noreferrer"
                            >
                                <i className="spotify icon"></i>
                                Listen on Spotify
                            </a>) : null}
                            {!!chosenTrack.chordsURL ? (<a
                                href={chosenTrack.chordsURL}
                                className="ui button tiny teal button" target="_blank" rel="noreferrer"
                            >
                                <i className="microphone icon"></i>
                                Show lyrics
                            </a>) : null}

                            {!!chosenTrack.lyricsURL ? (<a
                                href={chosenTrack.lyricsURL}
                                className="ui button tiny orange button" target="_blank" rel="noreferrer"
                            >
                                <i className="guitar icon"></i>
                                Show chords
                            </a>) : null}



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackDetails;