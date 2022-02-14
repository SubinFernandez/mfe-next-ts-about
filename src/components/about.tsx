import React, { useState } from 'react'

import styles from './about.module.scss'

interface AboutProps {
  hostTime?: string
  nameHandler?: (name: string) => void
}

const About: React.FC<AboutProps> = ({ hostTime, nameHandler }) => {
  const [name, setName] = useState('')

  const sendName = (n: string) => {
    if (nameHandler) {
      setName('')
      nameHandler(n)
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.root}>
        <h1>About Us</h1>
        <p>Hello, I&apos;m the <strong>about</strong> module</p>
        <p>I&apos;m from https://mfe-next-ts-about.vercel.app/</p>

        {hostTime && <>
          <hr className={styles.hr}/>
          <h2>Receive message from host</h2>
          <small className={styles.quote}>This demonstrates data received from the host through props</small>
          <p>Host&apos;s current time: {hostTime}</p>
        </>}

        {nameHandler && <>
          <hr className={styles.hr}/>
          <h2>Send message to host</h2>
          <small className={styles.quote}>This demonstrates data sent to the host through callbacks</small>
          <label className={styles.form_label} htmlFor='txtName'>Let us know your name</label>
          <input className={styles.form_input} id='txtName' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Your name'></input>
          <button className={styles.form_submit} onClick={() => sendName(name)}>Send name to the host</button>
        </>}
      </section>
    </div>
  )
}

export default About
