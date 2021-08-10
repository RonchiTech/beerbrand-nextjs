import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const Profile = ({user}) => {
    const [account, setAccount] = useState(user);

    const router = useRouter();

    useEffect(() => {
      const checkAuthUser = async () => {
        console.log(user);
        try {
          const response = await fetch('http://localhost:3000/api/auth/user', {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          // const result = await response.json()
          console.log(response);
          if (response.status === 401) {
            router.push('/login')
          }
          const result = await response.json();
          console.log('main::', result);
          setAccount({ fullName: result.fullName });
        } catch (err) {
          console.log('Error::', err);
        }
      };
      checkAuthUser();
    }, []);

  return (
    <div>
      <p>User: {account.fullName}</p>
    </div>
  );
};
Profile.getInitialProps = async (ctx) => {
    // console.log('ctx',ctx);
    console.log('initProps');
    const response = await fetch('http://localhost:3000/api/auth/user', {
          method: 'GET',
          credentials: 'include',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // const result = await response.json()
        console.log(response);
        if (response.status === 401) {
         return { user: {fullName: null}}
        }
        const result = await response.json();
     
    return {
      user: {
        fullName: result.fullName,
      },
    };
}
export default Profile;
