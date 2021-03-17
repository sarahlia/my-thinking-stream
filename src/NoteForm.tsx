import React, {FormEvent, ReactElement, useState} from "react";

interface OnSubmitFunction {
    (note: Note): void
}

interface Props {
    onSubmit: OnSubmitFunction
}

interface Note {
    id: Number,
    createdAt: Date,
    body: string
}

export default function NoteForm({onSubmit}: Props): ReactElement {
    const [note, setNote] = useState<Note>({id: 0, createdAt: new Date(), body: ""})

    function onNoteFormSubmit(e:FormEvent<HTMLElement>) {
        e.preventDefault();
        onSubmit(note);
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="noteBody">What are you thinking?</label>
            <input type="text" id="noteBody" value={note.body} onChange={(e) => setNote({id: note.id, createdAt: note.createdAt, body: e.target.value})} />
            <button type="submit">New Note</button>
        </form>
    )
}
