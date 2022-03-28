import { useState } from 'react';
import { exampleTracks } from '../../domain/track';
import { Track } from './Track';
import { TrackForm } from './TrackForm';

const Tracks = () => {

    const [trackToEdit, setTrackToEdit] = useState({ id: null });
    const resetTrackToEdit = () => setTrackToEdit({ id: null });
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => setModalOpen(false);
    const openModalForNew = () => {
        resetTrackToEdit();
        setModalOpen(true);
    }
    const openModalForEdit = track => {
        setTrackToEdit(track);
        setModalOpen(true);
    }
    return (
        <>
            <div className="ui container">
                <button className="ui right floated green button" id="newModal" onClick={openModalForNew}>
                    <i className="plus icon"></i>
                    New track
                </button>
                <h1>Tracks</h1>
                <table className="ui celled striped table">
                    <thead>
                        <tr>
                            <th>Artist</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exampleTracks.map((track) => (
                            <Track
                                key={track.id}
                                track={track}
                            ></Track>
                        ))}
                    </tbody>
                </table>
            </div>

            <TrackForm
                onSubmit={console.log}
                track={trackToEdit}
                key={trackToEdit.id}
                closeModal={closeModal}
                modalOpen={modalOpen}
                openModal={openModalForNew}

            ></TrackForm>
        </>
    );
}

export default Tracks;