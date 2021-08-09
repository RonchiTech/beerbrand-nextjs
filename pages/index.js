import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home({data}) {
  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/');
    console.log('response', response);
    const result = await response.json();
    console.log('result', result);
  };
  return (
    <div>
      Main Page
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/auth/user');
  // const result = await response.json()
  if(response.status === 401) {
    return {
      props: {data: null}
    }
  }
  console.log(response);
  return {
    props: {
      data: 'Ronchi',
    },
  };
}
