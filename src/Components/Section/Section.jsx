import React, { useEffect, useState } from 'react';
import Button from "../Button/Button"
import axios from 'axios';
import styles from "./Section.module.css";
import Card from "../Card/Card"

function Section() {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [toggle, setToggle] = useState(false);

    const getTopAlbums = () => {
        axios.get("https://qtify-backend-labs.crio.do/albums/top")
        .then((res) => setTopAlbums(res.data))
        .catch((e) => console.log(e))
    }

    const getNewAlbums = () => {
        axios.get("https://qtify-backend-labs.crio.do/albums/new")
        .then((res) => setNewAlbums(res.data))
        .catch((e) => console.log(e))
    }

    useEffect(() => {
        getTopAlbums();
        getNewAlbums()
    },[])

  return (
    <>
    <section className={styles.section}>
        <header className={styles.header}>
            <h4>Top Albums</h4>
            <button className={styles.button} onClick={() => setToggle(!toggle)} >{toggle ? "Collapse" : "Show All"}</button>
        </header>
        <article className={styles.article}>
            {topAlbums.slice(0, 14).map((album) => <Card key={album.id} id={album.id} image={album.image} follows={album.follows} title={album.title} />)}
        </article>
    </section>
    <section className={styles.section}>
        <header className={styles.header}>
            <h4>New Albums</h4>
            <button className={styles.button} onClick={() => setToggle(!toggle)} >{toggle ? "Collapse" : "Show All"}</button>
        </header>
        <article className={styles.article}>
            {newAlbums.slice(0, 14).map((album) => <Card key={album.id} id={album.id} image={album.image} follows={album.follows} title={album.title} />)}
        </article>
    </section>
    </>
  )
}

export default Section