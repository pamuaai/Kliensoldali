import { TrackActions } from "./TrackActions";

export function Track(props) {
    const { track } = props;
    return (
        <tr>
            <td><i className="user icon"></i> {track.artist}</td>
            <td><i className="music icon"></i> {track.title}</td>
            <td className="right aligned collapsing">
                <TrackActions></TrackActions>
            </td>
        </tr>);
}