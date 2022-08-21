import { Box } from '@chakra-ui/react';
import { useStateContext } from '../StateContext';

export const Link2 = () => {
  const { flag } = useStateContext();
//   if (flag) {
//     throw new Error('フラグが立ってるからクラッシュさせた！');
//   }
  return <Box>フーが表示されています！</Box>;
};
