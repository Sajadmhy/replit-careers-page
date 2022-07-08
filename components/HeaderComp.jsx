import styles from '../styles/Header.module.css';
import { useEffect, useRef, useState } from 'react';

export default function HeaderComp() {
    const [dropDown, setDropDown] = useState(false);
    const [hamList, setHamList] = useState(false);
    const refHamList = useRef();
    const refHamMenu = useRef();
  // closes hamList modal when clicked outside the modal
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (hamList && refHamList.current  && !refHamList.current.contains(e.target) && !refHamMenu.current.contains(e.target)) {
        setHamList(false)
      }
    }
  
    document.addEventListener("mousedown", checkIfClickedOutside)
  
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [hamList])  


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <svg viewBox="0 0 622 187" fill="currentColor" className={styles.logo} xmlns="http://www.w3.org/2000/svg"><defs className={styles.defs}></defs><path d="M133.445 87.009c.182 2.006.307 4.03.307 6.084 0-2.055-.125-4.077-.307-6.084z"></path><path d="M35.155 86.659s-18.425 67.886 55.424 68.477c23.17-8.625 40.244-29.772 42.831-55.267.179-1.764.232-3.563.272-5.365.008-.474.071-.934.071-1.412 0-2.052-.125-4.077-.307-6.083-19.511 76.806-105.823 46.722-98.291-.35z"></path><path d="M73.34 61.46S4.581 42.26 5.638 117.233a66.435 66.435 0 0016.023 23.951c.296.28.602.544.9.819a66.407 66.407 0 006.283 5.12c.341.244.662.513 1.004.751a66.035 66.035 0 007.253 4.306c.729.375 1.477.718 2.216 1.068a65.545 65.545 0 006.624 2.688c.554.189 1.083.426 1.644.601a65.67 65.67 0 008.246 1.95c.843.148 1.695.272 2.549.39 2.892.417 5.808.644 8.73.678.112 0 .22.017.332.017 2.204 0 4.38-.118 6.526-.329-77.147-18.398-47.824-104.664-.63-97.781z"></path><path d="M100.14 97.015s16.267-68.58-56.957-65.517C18.628 41.197 1.246 65.088 1.246 93.087c.023 3.015.25 6.025.681 9.009 15.41-77.59 103.205-52.461 98.213-5.08z"></path><path d="M64.981 126.528s68.878 8.991 64.566-56.495c-9.374-25.207-33.578-43.2-62.048-43.2a66.506 66.506 0 00-12.015 1.142c76.749 9.422 56.801 99.223 9.497 98.553z"></path><path d="M86.622 93.094a18.558 18.558 0 11-37.117 0 18.558 18.558 0 0137.117 0zM166.549 147V58.974h13.204v21.654c.47-1.526 1.35-3.52 2.641-5.986 1.408-2.582 3.404-5.164 5.986-7.746 2.582-2.582 5.809-4.753 9.683-6.514 3.99-1.878 8.685-2.817 14.084-2.817h.88V70.77h-1.584c-6.573 0-12.265 1.82-17.077 5.458-4.695 3.521-8.334 8.157-10.916 13.908-2.464 5.634-3.697 11.678-3.697 18.133V147h-13.204zm97.539 1.408c-8.92 0-16.725-1.995-23.415-5.985-6.69-4.108-11.913-9.625-15.669-16.549-3.638-6.925-5.457-14.554-5.457-22.887 0-8.45 1.76-16.08 5.281-22.887 3.521-6.925 8.568-12.382 15.141-16.373 6.572-4.108 14.319-6.162 23.239-6.162 9.037 0 16.783 2.054 23.238 6.162 6.573 3.99 11.62 9.448 15.141 16.373 3.521 6.807 5.282 14.436 5.282 22.887v5.281h-73.766c.704 5.165 2.347 9.918 4.929 14.261 2.7 4.225 6.279 7.629 10.739 10.211 4.46 2.464 9.624 3.697 15.493 3.697 6.22 0 11.443-1.35 15.669-4.049 4.225-2.817 7.511-6.397 9.858-10.74h14.437c-3.052 7.864-7.923 14.319-14.613 19.366-6.572 4.93-15.081 7.394-25.527 7.394zm-30.809-52.463h59.857c-1.173-7.512-4.342-13.791-9.506-18.838-5.165-5.047-11.972-7.57-20.422-7.57-8.451 0-15.258 2.523-20.423 7.57-5.046 5.047-8.215 11.326-9.506 18.838zm89.723 85.913V58.974h13.204v14.084c3.286-4.812 7.512-8.568 12.676-11.267 5.281-2.817 11.561-4.226 18.837-4.226 8.568 0 16.021 2.054 22.359 6.162 6.455 3.99 11.444 9.448 14.965 16.373 3.521 6.807 5.281 14.436 5.281 22.887 0 8.333-1.76 15.962-5.281 22.887-3.521 6.924-8.51 12.441-14.965 16.549-6.338 3.99-13.791 5.985-22.359 5.985-7.276 0-13.556-1.408-18.837-4.225-5.164-2.934-9.39-6.749-12.676-11.443v49.118h-13.204zm42.957-45.421c6.573 0 12.148-1.526 16.725-4.578 4.695-3.051 8.274-7.1 10.739-12.147 2.465-5.164 3.697-10.739 3.697-16.725 0-6.103-1.232-11.678-3.697-16.725-2.465-5.047-6.044-9.096-10.739-12.148-4.577-3.051-10.152-4.577-16.725-4.577-6.455 0-11.972 1.526-16.549 4.577-4.577 3.052-8.04 7.101-10.387 12.148-2.347 5.047-3.521 10.622-3.521 16.725 0 5.986 1.174 11.561 3.521 16.725 2.347 5.047 5.81 9.096 10.387 12.147 4.577 3.052 10.094 4.578 16.549 4.578zM427.705 147V23.763h13.204V147h-13.204zm35.577-102.815V26.932h14.26v17.253h-14.26zM463.81 147V58.974h13.204V147H463.81zm45.611 0V70.593h-17.957v-11.62h17.957V27.46h13.204v31.514h20.246v11.62h-20.246V147h-13.204z"></path><g className={styles.prompt} clipPath="url(#clip0)"><path fillRule="evenodd" clipRule="evenodd" d="M570 68.5h26.001v26H622v26h-26v-26h-26v-26zm26 52.001h-26v26h26v-26z"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="translate(570 40.5)" d="M0 0h52v106H0z"></path></clipPath></defs></svg>
        <nav className={styles.nav}>
          <ul>
            <li onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
                Features <i className={styles.arrowDown}></i></li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Teams Pro</li>
            <li>Teams for Education</li>
            <li>Careers</li>
            <li></li>
            <li>Log in</li>
            <li>Sign up</li>
          </ul>
        <div className={styles.hamMenu} ref={refHamMenu} onClick={() => setHamList(!hamList)}>☰</div>
        </nav>
        { hamList && <ul ref={refHamList}  className={styles.hamList}>
          <li>Sign up</li>
          <li>Log in</li>
          <li>Features</li>
          <li>IDE</li>
          <li>Multiplayer</li>
          <li>Community</li>
          <li>Hosting</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Teams Pro</li>
          <li>Teams for Education</li>
          <li>Careers</li>
        </ul> }
        {dropDown && <div className={styles.hiddenDropBox} 
      onMouseLeave={() => setDropDown(false)} onMouseEnter={() => setDropDown(true)}>
        <div className={styles.dropDown}>
        <li>IDE</li>
        <li>Multiplayer</li>
        <li>Community</li>
        <li>Hosting</li>
        </div>
        </div>}
      </header>
    </div>
  )
}