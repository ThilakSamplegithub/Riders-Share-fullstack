import { StylesProvider } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/signuploader.module.css"

const Signup_loader = () => {
  return (
    <span className={styles.loader}></span>
  )
}

export default Signup_loader
