import styles from '#scss/Footer.module.scss'
import { HorizontalLine } from './Share'

export default function Footer() {
    return (
        <div className={styles.main}>
            <p>© 2022 cottons / Last Updated at Aug 17</p>
            <p>
                <a href='https://github.com/cottons-kr' target='_blank'>Github</a> | <a href='https://github.com/cottons-kr/web_source' target='_blank'>Page Source</a>
            </p>
        </div>
    )
}