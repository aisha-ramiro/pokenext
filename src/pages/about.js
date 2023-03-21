import Image from "next/image"

import styles from '../styles/About.module.css'

export default function About(){
  return(
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Cum facilis sit expedita suscipit accusantium quidem architecto perspiciatis necessitatibus omnis fugit tempore, 
        cumque dolorum ut maxime ipsum consequatur natus ipsam voluptates.</p>
      <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
    </div>
  )
}