import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import NewNote from "../new";

const Edit = ({ note }) => {
  const [form, setForm] = useState({
    title: note.title,
    description: note.description,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  //   const [errors, setErrors] = useState({});
  const router = useRouter();

  const editNote = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/notes/${router.query.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = "Title is required";
    }
    if (!form.description) {
      err.description = "Description is required";
    }

    return err;
  };

  return (
    <div className="form-container">
      <h1>Edit Note</h1>
      <div>
        <div onSubmit={handleSubmit}>
          <input
            type="text"
            label="Title"
            name="title"
            Value={note.title}
            onChange={handleChange}
          />

          <input
            type="text"
            label="Descriprtion"
            name="description"
            Value={note.description}
            onChange={handleChange}
          />

          <button type="submit" onClick={editNote}>
            Edit
          </button>
          <button type="submit" onClick={() => router.push("/")}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

Edit.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`);
  const { data } = await res.json();

  return { note: data };
};

export default Edit;
