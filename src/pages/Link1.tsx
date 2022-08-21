import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useStateContext } from '../StateContext';

export const Link1 = () => {
  const { setFlag, flag } = useStateContext();
  return (
    <Box>
      <FormControl>
        <FormLabel>回答に答えて提出</FormLabel>
        <Input type="answer" placeholder="ここに回答を入力してください" />
        <FormHelperText>
          この回答はシステムの改善に利用されます。
        </FormHelperText>
        <Button>回答を送信する</Button>
      </FormControl>
      <Button onClick={() => setFlag((b) => !b)}>
        フラグを立てたり下げたり
      </Button>
      <Box>{flag ? 'フラグが上がっています' : 'フラグが下がっています'}</Box>
      ホゲホゲ
    </Box>
  );
};
