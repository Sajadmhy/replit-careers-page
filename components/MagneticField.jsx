import styles from '../styles/MagneticField.module.css';
import { useEffect, useState, useRef } from 'react';


export default function MagneticField() {
    const [cursorPosition, setCursorPosition] = useState({x: null, y: null});
    const [layoutCords, setLayoutCords] = useState([{x: null, y: null}]);
    const [ screenSize, setScreenSize ] = useState({width: 0, height: 800});
    const ref = useRef(null);
    let rows = 10;
    let cols = 10;

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;

            setScreenSize({width, height:800});
   
    }


    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         setCursorPosition({x: e.clientX , y: e.clientY });
    //     }
    //     window.addEventListener('mousemove', handleMouseMove);
        
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     }
    // }, []);
    
    const handleMouseMove = e => {
        const cRect = ref.current.getBoundingClientRect();
        const canvasX = e.clientX - cRect.left;
        const canvasY = e.clientY - cRect.top;
        // setCursorPosition({x: canvasX, y: canvasY});
        console.log(cRect.left)
        setCursorPosition({
            x: e.nativeEvent.offsetX ,
            y: e.nativeEvent.offsetY ,
        });
    }

    
    const positions = (w,h) => {
        let array = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let obj = {};
                obj.x = w / cols * j;
                obj.y = h / rows * i;
                array.push(obj);
            }
            setLayoutCords(array);
        }
    }

    useEffect(() => {
        getWindowDimensions();
        positions(screenSize.width, screenSize.height);
        
        window.addEventListener('resize', getWindowDimensions);
        return () => {
          
            window.removeEventListener('resize', getWindowDimensions);
        }   
    
    },[screenSize.width, screenSize.height]);
    
    const angleTow = (x, y) => {
            const dx = x - cursorPosition.x;
            const dy = y - cursorPosition.y;
            const theta = Math.atan2(dy, dx);
            return theta*180/Math.PI;
    }



    return(
        <>
        <div className={styles.container} >
            <svg onMouseMove={handleMouseMove} ref={ref} viewBox={`0 0 ${screenSize.width} 800`} className={styles.cursors}>
            {layoutCords.map((c, i) => {
                return <g key={i} opacity="1" transform={`translate(${c.x},${c.y}) rotate(${angleTow(c.x,c.y)-40}) scale(1.7963264687159575)`}> <path d="M2.74561 4.1837L8.54842 21.6827L14.3555 19.6677L16.177 25.5455L21.895 23.7733L19.5136 16.1309L20.918 13.6457L20.2765 11.699L18.3781 12.2922L17.7717 10.3807L15.8645 10.9651L15.2581 9.0536L13.3598 9.64684L12.7622 7.72652L10.8506 8.31536L10.2486 6.40822L8.35464 6.98827L7.75262 5.08113L5.84548 5.66997L5.24785 3.76294L2.74561 4.1837Z" fill="transparent"></path><path fillRule="evenodd" clipRule="evenodd" d="M2.15188 0.521729L0.237793 1.11232L7.91541 25.9951L9.8295 25.4045L9.2389 23.4904L11.1526 22.8999L10.562 20.9858L8.6483 21.5763L3.33304 4.34982L5.24661 3.75939L5.83718 5.67339L7.75127 5.08279L7.16067 3.1687L5.24661 3.75939L4.65628 1.84521L2.74245 2.43573L2.15188 0.521729ZM9.97168 19.0723L13.7998 17.8906L14.9812 21.7192L16.895 21.1287L18.076 24.9566L16.1619 25.5472L14.9812 21.7192L13.0672 22.3099L12.4766 20.3958L10.562 20.9858L9.97168 19.0723ZM18.6668 26.8707L18.076 24.9566L21.9043 23.7751L22.4949 25.6892L18.6668 26.8707ZM17.0371 14.7957L18.8076 20.5337L18.8093 20.5376L20.7232 19.9471L21.9043 23.7751L23.8186 23.1851L22.6372 19.3564L20.7232 19.9471L19.5418 16.1192L25.2942 14.3442L24.7036 12.4301L22.7797 13.0237L22.189 11.1094L20.2749 11.7L20.8656 13.6143L17.0371 14.7957ZM12.1699 5.81592L10.2559 6.40651L10.8465 8.3206L12.7605 7.73001L12.1699 5.81592ZM17.77 10.3765L19.6841 9.78589L20.2749 11.7L18.3606 12.2906L17.77 10.3765ZM12.7605 7.73001L14.6748 7.1394L15.2654 9.0534L17.1792 8.46289L17.77 10.3765L15.8557 10.9676L15.2654 9.0534L13.3513 9.64409L12.7605 7.73001ZM9.66555 4.49219L7.75127 5.08279L8.34206 6.99687L10.2559 6.40651L9.66555 4.49219Z" fill="#907CFF"></path></g>
            })}
            </svg>
        </div>
        </>
    )
}