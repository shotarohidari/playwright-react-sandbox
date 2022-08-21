import { Box, Button, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { Router, Outlet, ReactLocation, Link } from '@tanstack/react-location';
import { useStateContext } from './StateContext';
import { Link1 } from './pages/Link1';
import { Link2 } from './pages/Link2';
const location = new ReactLocation();
const Index = () => {
  return <Box>ゆっくりしていってね</Box>;
};
function App() {
  return (
    <Router
      location={location}
      routes={[
        { path: '/', element: <Index /> },
        { path: '/link1', element: <Link1 /> },
        { path: '/link2', element: <Link2 /> },
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
