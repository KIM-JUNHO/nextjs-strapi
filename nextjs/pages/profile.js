import Router from 'next/router';

function Profile() {
  return (
    <div>
      <button
        onClick={async () => {
          Router.push('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
