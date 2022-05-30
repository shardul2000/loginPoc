import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {

   const[ourData, setOurData]=useState([]);
   const[erro, setErro]=useState();
   
  //let data;

  useEffect(() => {
    fetch('http://localhost:3000/api/express')
    .then(response=>{ 
       let data=response.json();
       return data;
    })
    .then(data=>{
       // console.log(data);
        setOurData(data);
        
      }
      ).catch(
        (e)=>{
          setErro(e);
        }
      )
    }, [])
console.log('eeerorr'+ erro);
  var fullname = ourData.cn;
  var group = ourData.description;
  var mail= ourData.mail;

  
  return (
  <div>
    {
   fullname
    }
  </div>

  );
}

