import { Icon, IconElement, Section } from './Share'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'

import styles from '#scss/Aboutme.module.scss'

import '#asset/python.png'
import '#asset/html.png'
import '#asset/css.png'
import '#asset/js.png'
import '#asset/react.png'
import '#asset/ts.png'
import '#asset/webpack.png'

import '#asset/student.png'
import '#asset/design.png'

const LogoContainer = () => {
    const [isVisible, setIsVisible] = useState(false)
    const iconList = [ // name, background, shadow
        ['python', 'linear-gradient(125deg, #79b7eb 30%, #ffea98 70%)', '#79b7eb'], 
        ['html', '#ffa089'], 
        ['css', '#7dc5ff'], 
        ['js', '#fcec88'],
        ['react', '#ccf3fd'], 
        ['ts', '#9bcbff'],
        ['webpack', 'linear-gradient(125deg, #b5e3fc 30%, #59a2da 70%)', '#b5e3fc'],
]

    return (
        <motion.div className={styles.iconContainer} onViewportEnter={() => { setIsVisible(true) }}>
            {
                isVisible ? iconList.map((icon, index) => {
                    return (
                        <IconElement
                            icon={`/asset/${icon[0]}.png`}
                            delay={0.1*index+0.8}
                            color={icon[1]}
                            size={75}
                            showingMoveScale={20}
                            effectScale={0}
                            shadowColor={icon[2]}
                            key={index}
                            positionAbsolute={false}
                            hidePoint={0}
                        />
                    )
                }) : null
            }
        </motion.div>
    )
}

const Description = () => {
    const animateVariant: Variants = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 1.2,
                duration: 1.3,
                type: 'spring',
                bounce: 0.5
            }
        },
        hidden: {
            opacity: 0,
            x: 25
        }
    }
    const [isVisible, setIsVisible] = useState(false)

    return (
        <motion.div
            variants={animateVariant}
            initial='hidden'
            animate={isVisible ? 'visible' : ''}
            className={styles.description}
            onViewportEnter={() => { setIsVisible(true) }}
        >
            <div>
                <h2><Icon icon='/asset/student.png' size={40} space={5}/>학생 개발자</h2>
                <p>아직 학생이라 부족한 점이 많지만 계속해서 배우고 있습니다.</p>
                <p>새롭게 배운 것들을 적극적으로 활용하려고 노력하고 있습니다.</p>
            </div>

            <div>
                <h2><Icon icon='/asset/design.png' size={40}/>디자이너</h2>
                <p>UI / UX 디자인을 좋아합니다!</p>
                <p>많은 사람이 공감할 수 있는 디자인을 하고싶습니다.</p>
            </div>
        </motion.div>
    )
}

export default function Aboutme() {
    return (
        <Section top={1150} title='About Me'>
            <LogoContainer />
            <Description />
        </Section>
    )
}
