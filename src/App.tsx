import { Box, Button, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { Router, Outlet, ReactLocation, Link } from '@tanstack/react-location';
import { useStateContext } from './StateContext';
const location = new ReactLocation();
const Index = () => {
  return <Box>ゆっくりしていってね</Box>;
};
const Hoge = () => {
  const { setFlag, flag } = useStateContext();
  return (
    <Box>
      <Button onClick={() => setFlag((b) => !b)}>
        フラグを立てたり下げたり
      </Button>
      <Box>{flag ? 'フラグが上がっています' : 'フラグが下がっています'}</Box>
      ホゲホゲ
    </Box>
  );
};
const Foo = () => {
  const { flag } = useStateContext();
  if (flag) {
    throw new Error('フラグが立ってるからクラッシュさせた！');
  }
  return <Box>フーが表示されています！</Box>;
};
function App() {
  return (
    <Router
      location={location}
      routes={[
        { path: '/', element: <Index /> },
        { path: '/link1', element: <Hoge /> },
        { path: '/link2', element: <Foo /> },
      ]}
    >
      <Box>
        <Link to={'/'}>ホーム</Link> <Link to={'link1'}>リンク1</Link>{' '}
        <Link to={'link2'}>リンク2</Link>
      </Box>
      <Divider />
      <Outlet />
    </Router>
  );
}

export default App;
