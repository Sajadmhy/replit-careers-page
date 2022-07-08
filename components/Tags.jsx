import styles from '../styles/Tags.module.css';

export default function Tags() {
    return (
        <div className={styles.tags}>
            <div className={styles.tagOne}>
                <span>@alan2ring</span>
            </div>
            <div className={styles.tagTwo}>
                <span>@graceh0pper</span>
            </div>
            <div className={styles.tagMe}>
                <span>@sajad</span>
            </div>
        </div>
    )
}