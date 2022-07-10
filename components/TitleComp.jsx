import styles from '../styles/Title.module.css';
import Tabs from './TabsComp';

export default function TitleComp() {
    return (
        <div className={styles.container}>
            <div className={styles.bg}>
            </div>
            <div className={styles.title}>
            <h1>Replit with Sajad</h1>
            <div className={styles.body}>
            Sajad&apos;s on a mission to help Replit bring the next billion software creators online. Building the future of is a team effort.
            </div>
            <a href="/#cool"><button >See something cool</button></a>
            </div>
            <Tabs/>
        </div>
    )
}