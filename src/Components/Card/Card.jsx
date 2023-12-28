import React from 'react'
import styles from "./Card.module.css"
import { Chip } from '@mui/material'

function Card({id, image, follows, title}) {
  return (
    <div className={styles.card} id={id}>
        <div className={styles.cardBody}>
            <img className={styles.cardImg} width={159} height={170} src={image} alt={title} />
            <div>
                <Chip label={`${follows} Follows`} sx={{backgroundColor: "#121212", color: "#ffffff", position: "absolute", top: "172px", left: "6px", fontSize: "12px"}} />
            </div>
        </div>
        <p className={styles.cardText}>
            {title}
        </p>
    </div>
  )
}

export default Card