import styles from '../styles/Title.module.css';

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
            <div className={styles.tabs}>
                <button className={styles.runButton}>Run <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg> </button>
                <div className={styles.codeTab}>
                  <code>
                    <span className={styles.codeBlue}>let</span> {`REPLIT_INTERESTS = [“dev tools”, “creative tools”, `}
                    {`“programming education”]`}
                    <br/>
                    <br/>
                    <span className={styles.codePink}>function </span><span className={styles.codeYellow}>confirmApplication</span>(
                    <span className={styles.codeGreen}>name</span>) {`{`}
                    <br />
                    <span className={styles.comment}>{`// TODO: implement send to replit`}</span>
                    <br />
                    {`}`}
                    <br/>
                    <br />
                    <span className={styles.codePink}>function </span> <span className={styles.codeYellow}>applyToReplit</span> (
                    <span className={styles.codeGreen}>{`{ name, portfolio, interests }`}</span>
                    {`) {`}
                    <br />
                    <span className={`${styles.codeBlue} ${styles.codeIndent}`}>if</span>
                    <span>{`(portfolio && interests.some((`}</span><span className={styles.codeGreen}>interest</span> {`)`} {`=>`}
                    <br />
                    REPLIT_INTERESTS.includes(interest)
                    {`)) {`}
                    <br />
                    <span className={`${styles.codeBlue} ${styles.codeIndent}`}>{`confirmApplication(name)`}</span>{`}`}
                    <br />
                    {`}`}
                    <br/>
                    <br/>
                    <span className={styles.comment}>
                    {`// usage`}
                    <br />
                    {`// applyToReplit({ name: 'you',`}
                    <br />
                    {`// portfolio: 'yourportfolio.com',`}
                    <br />
                    {`// interests: ['dev tools', 'creative tools', 'engineering']`}
                    <br />
                    {`// })`}
                    <br />
                    <br />
                    </span>
                  </code>
                </div>
            </div>
        </div>
    )
}