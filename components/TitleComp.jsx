import styles from '../styles/Title.module.css';
import Tabs from './TabsComp';

export default function TitleComp() {
    return (
        <div className={styles.container}>
            <div className={styles.bg}>
            </div>
            <div className={styles.title}>
            <h1>Careers at Replit</h1>
            <div className={styles.body}>
            We&apos;re on a mission to bring the next billion software creators online. Creating the future of computing is a team effort though.
            </div>
            <button>See open positions</button>
            </div>
            <Tabs/>
        </div>
    )
}