import { useEffect, useMemo, useState } from 'react';
import { List } from './List';
import { MoviePage } from './MoviePage';

function App() {
  const [id, setId] = useState('');

  useEffect(() => {
    const path = window.location.pathname.split('/')[1];
    setId(path);
  }, []);

  return (
    <>
      {id ? <MoviePage id={id} /> : <List />}
    </>
  );
}

export default App;
