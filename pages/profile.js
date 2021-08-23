import { useEffect, useState } from 'react';
import styles from '../components/styles/profile.module.scss'

import { useRouter } from 'next/router';
import Image from 'next/image';


const Profile = () => {
  const [user, setUser] = useState({ fullName: null, imageUrl: null });

  useEffect(() => {
    const fullName = localStorage.getItem('fullName');
    const imageUrl = localStorage.getItem('imageUrl');
    console.log(fullName, imageUrl);
    if (fullName && imageUrl) {
      setUser({ fullName, imageUrl });
    } else {
      window.location.replace('/login')
    }
  }, []);

  return (
    <div>
      {user.imageUrl && (
        <Image
          className={styles.Profile}
          src={user.imageUrl}
          alt="profile picture"
          width={50}
          height={50}
        />
      )}
      <p>{user.fullName}</p>
    </div>
  );
};
// Profile.getInitialProps = async (ctx) => {
//     const fullName = localStorage.getItem('fullName');
//     const imageUrl = localStorage.getItem('imageUrl');

//     return {
//       user: {
//         fullName,
//         imageUrl
//       },
//     };
// }
export default Profile;
