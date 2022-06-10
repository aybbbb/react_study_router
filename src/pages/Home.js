import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>first page</p>
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/profiles/test1">test1 profile</Link>
        </li>
        <li>
          <Link to="/profiles/test2">test2 profile</Link>
        </li>
        <li>
          <Link to="/profiles/void">no data</Link>
        </li>
        <li>
          <Link to="/articles">article list</Link>
        </li>
      </ul>
    </div>
  );
}
