import Link from 'next/link';
const User = () => {
  return (
    <div>
     Account Page
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/auth/user');
  // const result = await response.json()
  if (response.status === 401) {
    return {
      props: { data: null },
    };
  }
  console.log(response);
  return {
    props: {
      data: 'Ronchi',
    },
  };
}
export default User;
