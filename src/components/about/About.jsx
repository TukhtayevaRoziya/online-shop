import React from 'react'
import image from '../../assests/image.png'
import styles from './About.module.css'
import { useWindowSize } from './../../utils/hooks';

const About = () => {
  const [width] = useWindowSize()
  return (
    <div className={styles.body} id='about'>
      <img src={image} alt=''/>
      <div>
        <h1>About us</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
{width > 600 ?
 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum dolorem eum voluptates. Quia aperiam, earum, dignissimos repellat rerum nemo vitae nobis explicabo soluta, inventore tempora accusantium repellendus eveniet ipsum'
: ''
}
</p>
      </div>
    </div>
  )
}

export default About
