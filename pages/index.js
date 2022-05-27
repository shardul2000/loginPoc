import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
export default function Home() {


  //define what we wanna send to api route /api/express
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
  };
  
  //make http post request to our api:
  const response =  fetch('http://localhost:3000/api/express', requestOptions)

  //response is a promise object. figure out how to extract our data from promise object:
  // const data =  response.then();
  
  console.log("we got errro booo"+ response);
 
  return (
    <div className={styles.container}>
      
    </div>
  )
}
