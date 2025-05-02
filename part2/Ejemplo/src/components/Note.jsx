

const Note = ({ note }) => {
  return (
    <p>
      {note.content} {note.important && <strong>Important</strong>}
    </p>
  );
};

export default Note;
