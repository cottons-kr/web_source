import React, { useState } from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

import styles from "../scss/Header.module.scss"

const Category = ({content, link}) => {
    const [isHover, setHover] = useState(false)
    return (
        <Link to={link} onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
            {content}
            <div className={classnames(styles.bottomLine, isHover ? styles.bottomLineActive : "")}></div>
        </Link>
    )
}

const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.category}>
                <Category content="HOME" link="/" />
                <Category content="BLOG" link="/blog"/>
                <Category content="FEATURE" link="/feature"/>
            </div>
        </div>
    )
}

export default Header
