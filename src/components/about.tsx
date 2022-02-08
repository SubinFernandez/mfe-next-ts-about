import React from 'react'

import styles from './about.module.scss'

interface AboutProps {
  hostTime?: string
}

const About: React.FC<AboutProps> = ({ hostTime }) => {
  return (
    <div className={styles.container}>
      <section className={styles.root}>
        <h1>About Us</h1>
        <p>Hello, I&apos;m the <strong>about</strong> module</p>
        <p>I&apos;m from https://mfe-next-ts-about.vercel.app/</p>
        {hostTime && <p>Host&apos;s current time: {hostTime}</p>}
      </section>
    </div>
  )
}

export default About
