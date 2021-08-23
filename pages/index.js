import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home(props) {
  useEffect(()=> {
    console.log('props',props);
  },[])
  // console.log(props.data);
  // const [user, setUser] = useState({data});
  // useEffect(() => {
  //   const checkAuthUser = async () => {
  //     const response = await fetch('http://localhost:3000/api/auth/user', {
  //       method: 'GET',
  //       credentials: 'include',
  //       mode: 'cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     // const result = await response.json()
  //     if (response.status === 401) {
  //       console.log('error');
  //     }
  //     console.log(response);
  //     const result = await response.json();
  //     console.log('main::', result);
  //     setUser(result)
  //   };
  //   checkAuthUser();
  // }, []);
  return <div>Main Page</div>;
}

// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3000/api/auth/user', {
//     method: 'GET',
//     credentials: 'include',
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   // const result = await response.json()
//   if (response.status === 401) {
//     return {
//       props: { data: null },
//     };
//   }
//   console.log(response);
//   const result = await response.json();
//   console.log('main::', result);
//   return {
//     props: {
//       data: result,
//     },
//   };
// }
