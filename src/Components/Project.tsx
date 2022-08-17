import { Section } from './Share'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'

import styles from '#scss/Project.module.scss'

type ProjectSectionProp = {
    title: string,
    delay: number,
    banner?: string,
}

const ProjectSection = ({ title, delay }: ProjectSectionProp) => {
    const theme = useSelector((state: any) => state.theme)
    const animateVariant: Variants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 1,
                type: 'spring',
                bounce: 0.5
            }
        },
        hidden: {
            y: 25,
            opacity: 0
        }
    }

    return (
        <motion.div
            className={classNames(styles.projectSection, theme === 'light' ? styles.sectionLightMode : styles.sectionDarkMode)}
            variants={animateVariant}
            initial='hidden'
            animate='visible'
        >
            <div>
                <img src={'test'} alt="Project Banner Image" />
            </div>
            <h2>{title}</h2>
        </motion.div>
    )
}

export default function Project() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <Section title='Project' top={2050}>
            <motion.div className={styles.main} onViewportEnter={() =>{ setIsVisible(true) }}>
                {
                    isVisible ?
                    <>
                    <ProjectSection title='Seren' delay={0.8} />
                    <ProjectSection title='Fanivory' delay={1} />
                    </> :
                    null
                }
            </motion.div>
        </Section>
    )
}