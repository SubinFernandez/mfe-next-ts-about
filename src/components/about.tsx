import React, { useState } from 'react'

import styles from './about.module.scss'

interface AboutProps {
  hostTime?: string
  onMessage?: (message: string) => void
}

const About: React.FC<AboutProps> = ({ hostTime, onMessage }) => {
  const [message, setMessage] = useState('')

  const handleMessageChange = (message: string) => {
    if (onMessage) {
      setName('')
      onMessage(message)
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
          <label className={styles.form_label} htmlFor='txtMessage'>Let us know your message for the host</label>
          <input className={styles.form_input} id='txtMessage' value={message} onChange={(e) => setMessage(e.target.value)} type='text' placeholder='Your message' />
          <button className={styles.form_submit} disabled={message.length === 0} onClick={() => handleMessageChange(message)}>Send message to the host</button>
        </>}
      </section>
    </div>
  )
}

export default About
