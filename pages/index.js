import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ notes }) {
  return (
    <div>
      home
      {/* <h1>{notes}</h1> */}
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const { data } = await res.json();
  return { notes: data };
};
