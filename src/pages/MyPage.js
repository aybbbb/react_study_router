import { Navigate } from 'react-router-dom';

export default function MyPage() {
  const isLogginIn = false;

  if (!isLogginIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return <div>MyPage</div>;
}
