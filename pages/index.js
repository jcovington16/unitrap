import React from 'react'
import Layout from '../components/main/layout/Layout'
import Navbar from '../components/main/navbar/Navbar'
import Button from '../components/basic/button/Button'
import styles from '../styles/Home.module.css'
import { ethers } from "ethers"


export default function Home() {

  return (
    <div>
        <Layout>
            <Navbar/>
          
            <div className={styles.container}>
           
                <div className={styles.header}>
                    <h1>Swap</h1>
                    <Button type='secondary' iconOpacity={1} iconClass='icon-gear'/>
                </div>
                <div className={`common-card ${styles.card}`}>
                    <div className={styles.series}>
                      <img src='../images/eth.png' alt="" width='48px' height='48px' />
                      <div style={{fontWeight: 600, marginLeft: '16px'}}>
                        <span className='color-primary'>SKL</span>
                        <div style={{fontSize: '13px'}}>
                          <span className='color-primary'>Balance:</span>
                          <span className='color-primary' style={{fontFamily: 'Gilroy', paddingTop: '2px'}}>&nbsp;31.60 SKL</span>
                          <span className='color-alternate'>&nbsp;(Max)</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className={styles.smallNum}>~$46,570.1</span>
                      <div style={{marginBottom: '4px'}}></div>
                      <span className={styles.bigNumber}>31.20349902</span>
                    </div>
                </div>
                <div style={{marginBottom: '4px'}}>
                {/* <div>
                  <Button type='secondary' iconOpacity={1} iconClass='icon-arrow-down'/>
                </div> */}
                </div>
                <div className={`common-card ${styles.card}`}>
                    <div className={styles.series}>
                      <img src='../images/tether.png' alt="" width='48px' />
                      <div style={{fontWeight: 600, marginLeft: '16px'}}>
                        <span className='color-primary'>TRAP</span>
                        <div style={{fontSize: '13px'}}>
                          <span className='color-primary'>Balance:</span>
                          <span className='color-primary' style={{fontFamily: 'Gilroy', paddingTop: '2px'}}>&nbsp;150,000 TRAP</span>
                          <span className='color-alternate'>&nbsp;(Max)</span>
                        </div>
                      </div>
                    </div>  
                    <div>
                      <span className={styles.smallNum}>(-0.0856%)</span>
                      <span className={styles.smallNum}>~$46,711.1</span>
                      <div style={{marginBottom: '4px'}}></div>
                      <span className={styles.bigNumber}>150,000</span>
                    </div>
                </div>
                <div style={{marginBottom: '16px'}}></div>
                <div className={`common-card ${styles.cardResult}`}>
                    <span className='color-alternate'>1 TRAP</span>
                    <span className='color-primary'>=</span>
                    <div className={styles.series}>
                        <span className='color-primary' >0.0004551 SKL</span>
                        <div style={{marginRight: '12px'}}/>
                        <Button type='secondary' iconOpacity={1} iconClass='icon-help'/>
                    </div>
                </div>
                <div style={{marginBottom: '16px'}}></div>
                <div style={{margin: '0 16px'}}>
                  <Button type='main'>Swap</Button>
                </div>
                <div style={{marginBottom: '16px'}}></div>
                

            </div>

        </Layout>
    </div>
  )
}
