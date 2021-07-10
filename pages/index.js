import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home({ notes }) {
  return (
    <div id="home">
      {console.log(notes)}

      <div className="body-container">
        {notes.map((note) => {
          return (
            <div className="card">
              <div className="header">
                <span className="title">{note.title}</span>
                <hr />
                <span className="title">{note.description}</span>
              </div>
              <Link href={`/${note._id}`}>
                <button>view</button>
              </Link>
              <Link href={`/${note._id}/edit`}>
                <button>edit</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const { data } = await res.json();
  return { notes: data };
};
