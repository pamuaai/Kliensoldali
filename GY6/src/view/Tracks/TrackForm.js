import { Modal } from 'semantic-ui-react';
import { useState } from 'react';
import classnames from 'classnames';

function useForm(defaultValue, validators) {
    const [formState, setFormState] = useState(defaultValue);
    const [validationState, setValidationState] = useState(() =>
        Object.keys(validators).reduce((defaultValidation, key) => {
            return {
                ...defaultValidation,
                [key]: validators[key](formState[key]),
            };
        }, {}),
    );
    const handleFormChange = e => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
        setValidationState({
            ...validationState,
            [name]: validators[name](value),
        });
    };
    const isValid = Object.values(validationState).every(validationResult => !validationResult);
    return {
        handleFormChange,
        formState,
        validationState,
        isValid,
    };
}

function requiredValidator(fieldName) {
    return value => {
        if (value) {
            return null;
        } else {
            return `${fieldName} is required`;
        }
    }
}

export function TrackForm(props) {
    const { onSubmit, track, openModal, closeModal, modalOpen } = props;
    const { formState, handleFormChange, isValid, validationState } = useForm(
        {
            id: '',
            artist: "",
            title: "",
            length: "",
            spotifyURL: "",
            chordsURL: "",
            lyricsURL: "",
        },
        {
            artist: requiredValidator('Author'),
            title: requiredValidator('Title'),
            length: requiredValidator('Length')
        }
    )
    return (
        <Modal
            noValidate
            onSubmit={e => {
                e.preventDefault();
                if (isValid) {
                    onSubmit();
                    closeModal();
                }
            }}
            as="form"
            closeIcon
            open={modalOpen}
            onClose={closeModal}
            onOpen={openModal}
        >
            <Modal.Header>Add new track</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <div className={classnames({
                        ui: true,
                        form: true,
                        error: !isValid
                    })}>
                        <div className="two fields">
                            <div className={classnames({
                                field: true,
                                error: validationState.artist
                            })}>
                                <label>Author</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="John Williams"
                                    value={formState.artist}
                                    name="artist"
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className={classnames({
                                field: true,
                                error: validationState.title
                            })}>
                                <label>Track name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Impreial March"
                                    value={formState.title}
                                    name="title"
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className={classnames({
                                field: true,
                                error: validationState.length
                            })}>
                                <label>Length</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="4:20"
                                    value={formState.length}
                                    name="length"
                                    onChange={handleFormChange}
                                />
                            </div>
                        </div>
                        <div className="three fields">
                            <div className="field">
                                <label>Spotify URL</label>
                                <input type="text" placeholder="https://" />
                            </div>
                            <div className="field">
                                <label>Lyrics URL</label>
                                <input type="text" placeholder="https://" />
                            </div>
                            <div className="field">
                                <label>Guitar tab URL</label>
                                <input type="text" placeholder="https://" />
                            </div>
                        </div>
                        {isValid ? null : (
                            <div className="ui error message">
                                <ul>
                                    {Object.entries(validationState)
                                        .filter(([_, message]) => !!message)
                                        .map(([key, message]) => (
                                            <li key={key}>{message}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )}
                    </div>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <div className="ui black deny button">
                    Cancel
                </div>
                <button className="ui positive right labeled icon button">
                    Add
                    <i className="plus icon"></i>
                </button>
            </Modal.Actions>

        </Modal>
        // <div className="ui modal">
        //     <i className="close icon"></i>
        //     <div className="header">Add new Track</div>
        //     <div className="image content">
        //         <div className="description">
        //             
        //         </div>
        //     </div>

        // </div>
    );
}