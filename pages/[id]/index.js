import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const index = ({ note }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {};

  const deleteNote = async () => {
    const noteId = router.query.id;
    try {
      const deleted = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="note-container">
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <button onClick={deleteNote}>Delete</button>
      </div>
    </div>
  );
};

index.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`);
  const { data } = await res.json();

  return { note: data };
};

export default index;
