import classNames from "classnames"
import { motion, Variants } from "framer-motion"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useTimeout } from "usehooks-ts"

import styles from '#scss/Share.module.scss'

type LinePositionProp = {
    top?: number,
    left?: number[],
    delay?: number,
    duration?: number,
    breakPoint?: number[]
}

type IconElementProp = {
    icon: string,
    delay: number,
    location?: [number, number][],
    color: string,
    size?: number,
    showingMoveScale?: number,
    effectScale?: number,
    shadowColor?: string | undefined,
    positionAbsolute?: boolean,
    variants?: Variants,
    breakPoint?: number[],
    hidePoint: number,
}

type IconProp = {
    icon: string,
    size: number,
    alt?: string,
    space?: number,
}

type SectionProp = {
    title: string,
    children: React.ReactNode,
    top: number,
    left?: number[],
    breakPoint?: number[]
}

const HorizontalLine = ({ top=0, left=[288], delay=0.5, duration=0.4, breakPoint }: LinePositionProp) => {
    const theme: string = useSelector((state: any) => state.theme)
    const [leftState, setLeftState] = useState(left[0])
    const [isAnimating, setIsAnimating] = useState(true)
    const [isVisible, setIsVisible] = useState(false)
    const onWindowResize = () => {
        breakPoint?.forEach((point, index) => {
            if (window.innerWidth <= point) {
                setLeftState(left[index+1])
            } else {
                setLeftState(left[0])
            }
        })
    }
    useEffect(onWindowResize, [])
    window.addEventListener('resize', onWindowResize)

    const animateVariant: Variants = {
        visible: {
            x: leftState,
            transition: {
                delay: delay,
                duration: duration,
                bounce: 0
            }
        },
        hidden: { x: window.innerWidth - 1 },
        align: {
            x: leftState,
            transition: {
                delay: 0,
                duration: 0
            }
        }
    }

    return (
        <motion.div
            className={classNames(
                styles.horizontalLine,
                theme === 'light' ? styles.lineLightMode : styles.lineDarkMode
            )}
            style={{
                top: `${top}px`,
            }}
            variants={animateVariant}
            initial='hidden'
            animate={isVisible && !isAnimating ? 'align' : isVisible ? 'visible' : ''}
            onViewportEnter={() => {
                setIsVisible(true)
                setTimeout(() => { setIsAnimating(false) }, 1600)
            }}
        ></motion.div>
    )
}

const VerticalLine = ({ top=0, left=[288], breakPoint }: LinePositionProp) => {
    const theme: string = useSelector((state: any) => state.theme)
    const [leftState, setLeftState] = useState(left[0])
    const onWindowResize = () => {
        breakPoint?.forEach((point, index) => {
            if (window.innerWidth <= point) {
                setLeftState(left[index+1])
            } else {
                setLeftState(left[0])
            }
        })
    }
    useEffect(onWindowResize, [])
    window.addEventListener('resize', onWindowResize)

    const animateVariant: Variants = {
        visible: {
            y: 0,
            transition: {
                delay: 0.6,
                duration: 0.6,
                bounce: 0
            }
        },
        hidden: {
            y: window.innerHeight
        }
    }

    return (
        <motion.div
            className={classNames(
                styles.verticalLine,
                theme === 'light' ? styles.lineLightMode : styles.lineDarkMode
            )}
            style={{
                top: `${top}px`,
                left: `${leftState}px`
            }}
            variants={animateVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
        ></motion.div>
    )
}

const IconElement = ({ icon, delay, color,
    location=[[0,0]],
    size=150,
    showingMoveScale=-50,
    effectScale=-10,
    shadowColor=color,
    positionAbsolute=true,
    variants,
    breakPoint,
    hidePoint
}: IconElementProp) => {
    const [isAnimating, setIsAnimating] = useState(true)
    const [locationState, setLocationState] = useState(location[0])
    const [isWindowSmall, setIsWindowSmall] = useState(window.innerWidth <= hidePoint)
    const animationVariant: Variants = variants ? variants : {
        show: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 1.4,
                type: 'spring',
                bounce: 0.5,
            }
        },
        hover: {
            scale: 1.1,
        },
        repeat: {
            opacity: 1,
            y: [0, effectScale, 0],
            transition: {
                duration: 2,
                type: 'spring',
                bounce: 0.5,
                repeat: Infinity,
            }
        },
        hidden: {
            opacity: 0,
            y: showingMoveScale
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }
    const onWindowResize = () => {
        breakPoint?.forEach((point, index) => {
            if (window.innerWidth <= point) {
                setLocationState(location[index+1])
            } else {
                setLocationState(location[0])
            }
        })
        if (window.innerWidth <= hidePoint) {
            setIsWindowSmall(true)
        } else {
            setIsWindowSmall(false)
        }
    }
    useEffect(onWindowResize, [])
    window.addEventListener('resize', onWindowResize)

    useTimeout(() => { setIsAnimating(false) }, delay*1000+1000)

    return (
        <motion.div className={styles.iconElement} style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${locationState[0]}px`,
                left: `${locationState[1]}px`,
                background: color,
                position: positionAbsolute ? 'absolute' : 'relative',
                boxShadow: `0px 0px 20px 1px ${shadowColor ? shadowColor : color}`,
                display: isWindowSmall ? 'none' : 'block'
            }}
            variants={animationVariant} initial={isAnimating ? 'hidden' : 'visible'} animate={isAnimating ? 'show' : 'repeat'} whileHover='hover'
            >
                <img src={icon} alt={icon} />
        </motion.div>
    )
}

const Icon = ({ icon, size, alt='Icon', space=10 }: IconProp) => {
    return (
        <span className={styles.icon}>
            <img
                src={icon}
                alt={alt}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    marginRight: `${space}px`,
                }}
            />
        </span>
    )
}

const Section = ({ title, top, children }: SectionProp) => {
    const theme: string = useSelector((state: any) => state.theme)

    const titleVariant: Variants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 1,
                type: 'spring',
                bounce: 0.5
            }
        },
        hidden: {
            opacity: 0,
            y: -10,
        },
    }

    return (
        <div className={styles.section}>
            <motion.h1
                variants={titleVariant} initial='hidden' whileInView='visible' viewport={{ once: true }}
                className={classNames('no-theme', theme === 'light' ? styles.titleLightMode : '')}
            >{title}</motion.h1>
            <HorizontalLine top={top} left={[288, 144]} delay={0.5} duration={0.25} breakPoint={[1600]} />

            {children}
        </div>
    )
}

export { HorizontalLine, VerticalLine, IconElement, Icon, Section }
