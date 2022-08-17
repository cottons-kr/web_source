import { useSelector } from "react-redux"
import classNames from "classnames"
import { motion, Variants } from "framer-motion"

import defaultStyles from '#scss/Default.module.scss'
import styles from '#scss/Welcome.module.scss'
import Aboutme from "./Aboutme"
import { VerticalLine, HorizontalLine, IconElement } from './Share'

import '#asset/1.png'
import '#asset/2.png'
import '#asset/3.png'
import '#asset/4.png'
import Project from "./Project"

const WelcomeTitle = () => {
    const theme: string = useSelector((state: any) => state.theme)
    const h1Variant: Variants = {
        visible: i => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.7,
                duration: 1,
                type: 'spring',
                bounce: 0.5
            }
        }),
        hidden: {
            y: 25,
            opacity: 0
        }
    }

    const pVariant: Variants = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1,
                type: 'spring',
                bounce: 0.4
            }
        },
        hidden: {
            x: 25,
            opacity: 0
        }
    }

    return (
        <div className={classNames(
            styles.welcomeTitle,
            theme === 'light' ? styles.welcomeTitleLightMode : ''
        )}>
            <div className='no-theme'>
                <motion.h1 custom={1} variants={h1Variant} initial='hidden' animate='visible'>Hello,</motion.h1>
                <motion.h1 custom={1.2} variants={h1Variant} initial='hidden' animate='visible'>world!</motion.h1>
            </div>

            <motion.div variants={pVariant} initial='hidden' animate='visible'>
                <p>발전하고 노력하고 열정있는 학생 개발자, "코튼" 입니다.</p>
                <p>제 소개페이지를 방문해주셔서 감사합니다. 즐거운 구경되세요!</p>
            </motion.div>

            <div className={styles.iconElementContainer}>
                <IconElement icon="/asset/1.png" delay={0.75} location={[[100, -550], [100, -400]]} breakPoint={[1700]} hidePoint={1280} color='#fca9ad' />
                <IconElement icon="/asset/2.png" delay={0.95} location={[[-45, -350], [-45, -200]]} breakPoint={[1700]} hidePoint={1280} color='#d4e9fc' />
                <IconElement icon="/asset/4.png" delay={1.35} location={[[180, -375], [180, -225]]} breakPoint={[1700]} hidePoint={1280} color='#fadfb7' />
                <IconElement icon="/asset/3.png" delay={1.15} location={[[70, -200], [70, -50]]} breakPoint={[1700]} hidePoint={1280} color='#c4e9d4' />
            </div>
        </div>
    )
}

const PleaseScrollDown = () => {
    const animateVariant: Variants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 2.5,
                duration: 1,
                type: 'spring',
                bounce: 0.5
            }
        },
        hidden: {
            opacity: 0,
            y: -10
        }
    }

    return (
        <div className={classNames(styles.pleaseScrollDown, 'no-theme')}>
            <motion.p
                variants={animateVariant}
                initial='hidden'
                animate='visible'
            >스크롤해서 구경해주세요</motion.p>
        </div>
    )
}

export default function Welcome() {
    return (
        <div className={defaultStyles.root}>
            <VerticalLine left={[288, 144]} breakPoint={[1600]} />
            <HorizontalLine top={700} left={[288, 144]} breakPoint={[1600]} />

            <WelcomeTitle />
            <PleaseScrollDown />

            <Aboutme />
            <Project />
        </div>
    )
}
