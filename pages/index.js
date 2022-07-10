import HeaderComp from '../components/HeaderComp';
import styles from '../styles/Home.module.css';
import TitleComp from '../components/TitleComp';
import MagneticField from '../components/MagneticField';
import Head from 'next/head';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Replit with Sajad</title>
      </Head>
      <HeaderComp/>
      <TitleComp/>
      <div id='cool'><MagneticField/></div>
    </div>
  )
}