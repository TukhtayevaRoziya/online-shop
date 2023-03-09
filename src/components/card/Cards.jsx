import React from 'react'
import { Card } from 'antd';
import styles from './Cards.module.css'


const Cards = () => {
  const data = [
    {id:0, image:'https://shoping-intex.netlify.app/images/2.jpg', title:'Каркасний батуте', price: '650.000', tel: '90 788 10 01'},
    {id:1, image:'https://shoping-intex.netlify.app/images/2.jpg', title:'Каркасний батуте', price: '650.000', tel: '90 788 10 01'},
    {id:2, image:'https://shoping-intex.netlify.app/images/2.jpg', title:'Каркасний батуте', price: '650.000', tel: '90 788 10 01'},
    {id:3, image:'https://shoping-intex.netlify.app/images/2.jpg', title:'Каркасний батуте', price: '650.000', tel: '90 788 10 01'},
    {id:4, image:'https://shoping-intex.netlify.app/images/2.jpg', title:'Каркасний батуте', price: '650.000', tel: '90 788 10 01'},
    {id:5, image:'https://shoping-intex.netlify.app/images/2.jpg', title:'Каркасний батуте', price: '650.000', tel: '90 788 10 01'},
    {id:6, image:'https://shoping-intex.netlify.app/images/2.jpg', title:'Каркасний батуте', price: '650.000', tel: '90 788 10 01'},
    {id:7, image:'https://shoping-intex.netlify.app/images/2.jpg', title:'Каркасний батуте', price: '650.000', tel: '90 788 10 01'},
    {id:8, image:'https://shoping-intex.netlify.app/images/2.jpg', title:'Каркасний батуте', price: '650.000', tel: '90 788 10 01'},
  ]
  const dataMap = data.map(d=>  <Card key={d.id} className={styles.box}
    hoverable
  >
     <div>

      <h1>{d.title}</h1>
      <h5>(140x185x140)</h5>
      <h2><strong>Narxi:</strong>  {d.price}UZ </h2>
      <img alt="example" src={d.image} />
      <h4>Murojat uchun:</h4>
      <h3>📞 <a href={`tel:+998${d.tel}`}>+998 {d.tel}</a> </h3>
    </div>
  </Card>)
  return (
    <div className={styles.body}>
      {dataMap}
    </div>
  )
}

export default Cards
