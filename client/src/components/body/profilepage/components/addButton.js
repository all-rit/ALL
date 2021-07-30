import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const AddButton = () => {
    return (
        <Fab className="add-btn" aria-label="add">
            <AddIcon />
        </Fab>
    )
}

export default AddButton;