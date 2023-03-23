import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ThemeButton from '../ThemeButton'
import Button from '../../basic/button/Button'
import styles from './Navbar.module.css'

const Navbar = () => {

    const [currentSelection, setCurrentSelection] = useState(0)
    const router = useRouter()

    const url = router.asPath.split('?')[0]

    useEffect(() => {
     switch (url) {
        case '/':
            setCurrentSelection(0)
            break;
        case '/pool':
            setCurrentSelection(1)
            break;
        case '/vote':
            setCurrentSelection(2)
            break;
        case '/charts':
            setCurrentSelection(3)
            break;
     }
    }, [url])

    return (
        <div className={styles.parent}>
            <nav className={styles.container}>
                <div className='image-logo'/>
                <div className={styles.nav}>
                    <label htmlFor='option1' className={`btn btn-secondary ${currentSelection === 0 && styles.active}`}>
                        <input className={styles.inputRadio} type='radio' value='Swap' name='options' id='option1' 
                            onChange={() =>{
                                setCurrentSelection(0)
                                router.push('/')
                            }}/> Swap
                    </label>
                    <div className={styles.divider}></div>
                    <label htmlFor='option2' className={`btn btn-secondary ${currentSelection === 1 && styles.active}`}>
                        <input className={styles.inputRadio} type='radio' value='Pool' name='options' id='option2' 
                            onChange={() =>{
                                setCurrentSelection(1)
                                router.push('/pool')
                            }}/> Pool
                    </label>
                    <div className={styles.divider}></div>
                    <label htmlFor='option3' className={`btn btn-secondary ${currentSelection === 2 && styles.active}`}>
                        <input className={styles.inputRadio} type='radio' value='Vote' name='options' id='option3' 
                            onChange={() =>{
                                setCurrentSelection(2)
                                router.push('/vote')
                            }}/> Vote
                    </label>
                    <div className={styles.divider}></div>
                    <label htmlFor='option4' className={`btn btn-secondary ${currentSelection === 3 && styles.active}`}>
                        <input className={styles.inputRadio} type='radio' value='Charts' name='options' id='option4' 
                            onChange={() =>{
                                setCurrentSelection(3)
                                router.push('/charts')
                            }}/> Charts
                    </label>
                </div>

                <div className={styles.accountContainer}>
                    <ThemeButton/>
                    <div className={styles.account}>
                        <div className={styles.accountBalance}><span>27.29 TRAP</span></div>
                        <span style={{ marginRight: '8px' }}>0xaeD…7a98</span>
                        <img src='../../../images/user.png' width='20px' />
                    </div>
                    <Button type='secondary' iconOpacity={1} iconClass='icon-kebab-horizontal' bg='more'/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar