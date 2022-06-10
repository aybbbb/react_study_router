import { useParams } from 'react-router-dom';

const data = {
  test1: {
    name: 'kim',
    description: 'test1',
  },
  test2: {
    name: 'lee',
    description: 'test2',
  },
};

export default function Profile() {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>Profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <div>
          <p>no data</p>
        </div>
      )}
    </div>
  );
}
