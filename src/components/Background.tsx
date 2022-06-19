import React from "react"

import styles from "../scss/Background.module.scss"

const Background = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.t1}>{"</>"}</h1>
            <h1 className={styles.t2}>{"/**/"}</h1>
        </div>
    )
}

export default Background