import { useSearchParams } from 'react-router-dom';

export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mod');

  const onToggle = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>introduce</h1>
      <p>using router</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggle}>Toggle</button>
      <button onClick={onIncreaseMode}>mode +1</button>
    </div>
  );
}
