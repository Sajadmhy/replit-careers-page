import styles from '../styles/Tabs.module.css';
import Tags from './Tags';

export default function Tabs() {
    return (
        <div className={styles.tabs}>
                <button className={styles.runButton}><span>Run</span> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg> </button>
                <Tags/>
                <div className={styles.files}>
                    <div className={styles.head}>
                        script.js
                    </div>
                    <div className={styles.body}>
                    <li>index.html</li>
                    <li>styles.css</li>
                    </div>
                </div>
                <div className={styles.editor}>
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
                <div className={styles.commandLine}>
                   <div>
                   ~/applyToReplit$
                    </div>     
                </div>
                </div>
    )
}