import React from "react";
import PropTypes from "prop-types";
import MuiList from "@material-ui/core/List";
import NoteListItem from "./NoteListItem";
import MuiPaper from "./mui-overrides/Paper";
import { NoteEntity } from "../../entities/NoteEntity";

const NoteList = ({ notes, selectedNote, handleSelectNote }) => (
    <MuiList>
        {notes.map(note => (
            <NoteListItem key={note.id} note={note} selectedNote={selectedNote} handleSelectNote={handleSelectNote} />
        ))}
    </MuiList>
);

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.instanceOf(NoteEntity))
};

export default NoteList;
