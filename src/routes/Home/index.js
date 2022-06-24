import React from 'react'
import Converter from '../../components/Converter';
import TextBox from '../../components/TextBox';

import styles from './home.module.css'



const Home = () => {


  return (
    <>
      <div className={styles.home}>
        <div className={styles.boxContainer}>
          <div className={styles.top}><h1>Convert</h1></div>
          <Converter />
          <div className={styles.top}><h1>Text Box</h1></div>
          <TextBox />
        </div>
      </div>
    </>
  )
}

export default Home