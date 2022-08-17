import styles from '#scss/NavBar.module.scss'
import { useState } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import '#asset/moon.svg'
import '#asset/sun.svg'
import '#asset/home.svg'
import '#asset/blog.svg'
import { motion, Variants } from 'framer-motion'

interface EffectLinkProps extends LinkProps {
    icon: string
}

const LinkWithEffect = ({ children, to, icon }: EffectLinkProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const theme: string = useSelector((state: any) => state.theme)
    const iconVariant: Variants = {
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
            }
        },
        hidden: {
            x: -25,
            opacity: 0,
        }
    }

    return (
        <Link 
            onMouseEnter={() => { setIsHovered(true) }} 
            onMouseLeave={() => { setIsHovered(false) }} 
            to={to} 
            className={styles.link}
        >
             <motion.img
                variants={iconVariant}
                initial='hidden'
                animate={isHovered ? 'visible' : 'hidden'}
                src={icon}
                className={theme === 'dark' ? styles.iconDarkMode : ''}
            />

            {children}

            <div className={classNames(
                styles.effect,
                theme === 'light' ? styles.effectLight : styles.effectDark, 
                isHovered ? styles.effectActive : '')}
            ></div>
        </Link>
    )
}

const ThemeSwitch = () => {
    const theme: string = useSelector((state: any) => state.theme)
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch({ type: 'TOGGLE_THEME' })
    }

    return (
        <div onClick={onClick} className={styles.switch}>
            <img src={
                theme === 'light' ?
                '/asset/moon.svg' :
                '/asset/sun.svg'
            } alt='Theme Switch' title='테마 변경' />
        </div>
    )
} 

export default function NavBar() {
    return (
        <nav className={styles.main}>
            <div className={styles.linkContainer}>
                <LinkWithEffect to="/" icon='/asset/home.svg'>HOME</LinkWithEffect>
                <LinkWithEffect to="/blog" icon='/asset/blog.svg'>BLOG</LinkWithEffect>
            </div>

            <ThemeSwitch />
        </nav>
    )
}
