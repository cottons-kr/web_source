import React from "react"
import { motion } from "framer-motion"
import globalStyles from "../scss/Global.module.scss"
import homeStyles from "../scss/Home/Home.module.scss"
import aboutmeStyles from "../scss/Home/Aboutme.module.scss"
import classNames from "classnames"

import "../asset/github.svg"

const Aboutme = () => {
    const listAnimation = [
        {opacity: 0, x: 10},
        {x: 0, opacity: 1}
    ]

    let animationDelay = 0.75

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ y: -20, opacity: 1 }} transition={{ delay: 0.3, duration: 1.5, type: "spring", bounce: 0.5 }} viewport={{ once: true }} className={aboutmeStyles.root}>
            <h1>About Me</h1>

            <motion.div initial={{ opacity: 0 }} whileInView={{ x: -30, opacity: 1 }} transition={{ delay: 0.5, duration: 1, type: "spring", bounce: 0.4 }} viewport={{ once: true }} className={classNames(aboutmeStyles.section, aboutmeStyles.section1)}>
                <h2>이런것들을 할수있어요!</h2>
                <ul>
                    {[
                        <><span style={{color: "#DD4B25"}}>HTML</span>, <span style={{color: "#0077C3"}}>CSS</span></>,
                        <><span style={{color: "#EFD81D"}}>Java</span>/<span style={{color: "#2F74C0"}}>Type</span>Script</>,
                        <><span style={{color: "#346b97"}}>Pyt</span><span style={{color: "#F7CB40"}}>hon</span></>,
                        <span style={{color: "#5ED3F3"}}>React</span>,
                        <><span style={{color: "#8ACFF3"}}>W</span><span style={{color: "#1B74BA"}}>ebpac</span><span style={{color: "#8ACFF3"}}>k</span></>,
                        <>Flask, <span style={{color: "#5C9162"}}>Express</span></>,
                        "SQL"
                    ].map((content, index) => {
                        animationDelay += 0.05
                        return <motion.li initial={listAnimation[0]} whileInView={listAnimation[1]} transition={{ delay: animationDelay, duration: 0.5, type: "spring", bounce: 0.4 }} viewport={{ once: true }} key={index}>{content}</motion.li>
                    })}
                </ul>

                <h2>이런것들을 배우고싶어요!</h2>
                <ul>
                {[
                    <span style={{color: "#5823DB"}}>Kotlin</span>,
                    <span style={{color: "#903BA7"}}>C#</span>,
                    <span style={{color: "#00BA7B"}}>Vue.js</span>,
                    <><span style={{color: "#DD4B25"}}>HTML5</span> Canvas</>
                    ].map((content, index) => {
                        animationDelay += 0.05
                        return <motion.li initial={listAnimation[0]} whileInView={listAnimation[1]} transition={{ delay: animationDelay, duration: 0.5, type: "spring", bounce: 0.4 }} viewport={{ once: true }} key={index}>{content}</motion.li>
                    })}
                </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ x: 30, opacity: 1 }} transition={{ delay: 0.6, duration: 1, type: "spring", bounce: 0.4 }} viewport={{ once: true }} className={classNames(aboutmeStyles.section, aboutmeStyles.section2)}>
                <h2>학생 개발자</h2>
                <p>아직 학생이고 배운지도 별로 안되서 부족한 점이 많지만 계속해서 배우고 노력하고 있습니다</p>
                <p>최대한 많고 좋은 것들을 배우려고 노력하고 활용하고 있습니다</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ x: 30, opacity: 1 }} transition={{ delay: 0.7, duration: 1, type: "spring", bounce: 0.4 }} viewport={{ once: true }} className={classNames(aboutmeStyles.section, aboutmeStyles.section3)}>
                <h2>연락하고 싶으시다면...</h2>
                <p>📧 Email : <a href="mailto:cottons-kr@naver.com">cottons-kr@naver.com</a></p>
                <p><img src="./github.svg" alt="Github Icon"/>Github : <a href="https://github.com/cottons-kr" target="_blank">@cottons-kr</a></p>
            </motion.div>
        </motion.div>
    )
}

const Home = () => {
    return (
        <div className={classNames(globalStyles.main, homeStyles.root)}>
            <div className={homeStyles.welcome}>
                <motion.h1 transition={{ duration: 1.5, delay: 0.5, type: "spring", bounce: 0.7 }} animate={{ opacity: 1, y: -20 }}>Hello,</motion.h1>
                <motion.h1 transition={{ duration: 1.5, delay: 0.6, type: "spring", bounce: 0.7 }} animate={{ opacity: 1, y: -20 }} >world!</motion.h1>
            </div>

            <motion.div transition={{ duration: 1.5, delay: 0.65, type: "spring", bounce: 0.7 }} animate={{ opacity: 1, y: -20 }}>
                <motion.div transition={{ duration: 1, delay: 0.65, type: "spring" }} animate={{ opacity: 1 }} className={homeStyles.computer}>
                    <div>
                        <section className={homeStyles.screen}>
                            <div></div>
                            <div></div>
                        </section>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.4 }} animate={{ opacity: 1, y: -70 }} className={homeStyles.introdution}>
                <p>가능성 있고 발전하고 노력하고 열정있는 학생 개발자, "코튼" 입니다.</p>
                <p>제 소개페이지를 방문해주셔서 감사합니다! 즐거운 구경되세요!</p>
            </motion.div>

            <Aboutme />
        </div>
    )
}

export default Home
