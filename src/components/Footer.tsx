import React from "react"
import { motion } from "framer-motion"
import styles from "../scss/Footer.module.scss"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.footer}>
                <p>© 2022 cottons / Last Fix on Jun 19 2022</p>
                <p><a href="https://github.com/cottons-kr" target="_blank">Github</a> | <a href="https://github.com/cottons-kr/undefined" target="_blank">Page Source</a> | <Link to="/blog">BLOG</Link> | <Link to="/feature">FEATURE</Link></p>
            </div>
        </div>
    )
}

export default Footer
