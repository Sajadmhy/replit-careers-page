import { useState } from 'react';
import styles from '../styles/Tabs.module.css';
import Tags from './Tags';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState([false, false, true]);
  
  return (
        <div className={styles.tabs}>
                <button className={styles.runButton}><span>Run</span> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg> </button>
                <div className={styles.tagsDiv}><Tags/></div>
                <div className={styles.editor}>
                 { activeTab[0] && <code> 
                   {`<`}<span className={styles.codeBlue}>{`html`}</span>{`>`} <br />
                    <span style={{marginLeft: '10px'}}>{`<`}<span className={styles.codeBlue}>{`head`}</span>{`>`}</span> <br />
                    <span style={{marginLeft: '20px'}}>{`<`}<span className={styles.codeBlue}>{`title`}</span>{`>Replit with Sajad</`}<span className={styles.codeBlue}>{`title`}</span>{`>`}</span> <br />
                    <span style={{marginLeft: '20px'}}>{`<`}<span className={styles.codeBlue}>{`link`}</span> {`rel=`}<span className={styles.codePink}>{`"stylesheet"`}</span> {`href=`}<span className={styles.codePink}>{`"/styles.css"`}</span>{`>`}</span> <br />
                    <span style={{marginLeft: '20px'}}>{`<`}<span className={styles.codeBlue}>{`script`}</span> {`src=`}<span className={styles.codePink}>{`"/apply.js"`}</span>{`></`}<span className={styles.codeBlue}>{`script`}</span>{`>`}</span> <br />
                    <span style={{marginLeft: '10px'}}> {`</`}<span className={styles.codeBlue}>{`head`}</span>{`>`}</span>  <br />
                    <span style={{marginLeft: '10px'}}>{`<`}<span className={styles.codeBlue}>{`body`}</span>{`>`}</span> <br />
                    <span style={{marginLeft: '20px'}}>{`<`}<span className={styles.codeBlue}>{`div`}</span> {`id=`}<span className={styles.codePink}>{`"root"`}</span>{`></`}<span className={styles.codeBlue}>{`div`}</span>{`>`}</span> <br />
                    <span style={{marginLeft: '10px'}}>{`</`}<span className={styles.codeBlue}>{`body`}</span>{`>`}</span> <br />
                    {`</`}<span className={styles.codeBlue}>{`html`}</span>{`>`} <br />
                  </code> }
                 
                 { activeTab[1] && <code> 
                 <span className={styles.codeYellow}> {`html,`}</span>
                  <br />
                  <span className={styles.codeYellow}> {`body { `}</span>
                  <br /> 
                  <span style={{marginLeft:'10px'}} className={styles.codeBlue}>{`padding`}</span>{`: 0;`}
                  <br />
                  <span style={{marginLeft: '10px'}} className={styles.codeBlue}>{`  margin`}</span>{`: 0;`} <br />
                  <span style={{marginLeft: '10px'}} className={styles.codeBlue} >{`font-family`}</span>{`: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`}
                  <br />
                  <span className={styles.codeYellow}>{`}`}</span>
                  <br />
                  <br />
                  <span className={styles.codeYellow}>{`a { `}</span>
                  <br />
                  <span style={{marginLeft: '10px'}} className={styles.codeBlue}>{`color`}</span>{`:`} <span className={styles.codePink}>{` inherit`}</span>{`;`}
                  <br />
                  <span style={{marginLeft: '10px'}} className={styles.codeBlue}>{`text-decoration`}</span>{`: `} <span className={styles.codePink}>{`none`}</span>{`;`}
                  <br />
                  <span className={styles.codeYellow}>{`}`}</span>
                  <br />
                  <br />
                  <span className={styles.codeYellow}>{`* { `}</span>
                  <br />
                  <span style={{marginLeft: '10px'}} className={styles.codeBlue}>{`box-sizing`}</span>{`:`} <span className={styles.codePink}>{` border-box`}</span>{`; `}
                  <br />
                  <span className={styles.codeYellow}>{`}`}</span>
                   </code> }
                 
                 {activeTab[2] && <code>
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
                    {`// applyToReplit({ name: 'Sajad Mahyaei',`}
                    <br />
                    {`// portfolio: 'sajad.codes',`}
                    <br />
                    {`// interests: ['Replit', 'problem sovling', 'engineering']`}
                    <br />
                    {`// })`}
                    <br />
                    <br />
                    </span>
                  </code>}
                </div>
                <div className={styles.files}>
                    <div className={styles.head}>
                        script.js
                    </div>
                    <div className={styles.body}>
                    <li style={{borderLeft: activeTab[0] ? 'solid' : 'none'}} onClick={() => setActiveTab([true, false, false])}>index.html</li>
                    <li style={{borderLeft: activeTab[1] ? 'solid' : 'none'}} onClick={() => setActiveTab([false, true, false])}>styles.css</li>
                    <li style={{borderLeft: activeTab[2] ? 'solid' : 'none'}} onClick={() => setActiveTab([false, false, true])}>apply.js</li>
                    </div>
                </div>
                <div className={styles.commandLine}>
                   <div>
                   ~/applyToReplit$
                    </div>     
                </div>
                </div>
    )
}