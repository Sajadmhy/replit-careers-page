import HeaderComp from '../components/HeaderComp';
import styles from '../styles/Home.module.css';
import TitleComp from '../components/TitleComp';

export default function Home() {

  return (
    <div className={styles.container}>
      <HeaderComp/>
      <TitleComp/>
    </div>
  )
}