import Message from './Message.tsx';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function MessageBox() {
  return (
      <Box sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
            height: "75%",
            overflow: "hidden",
            overflowY: "scroll",
            zIndex: 0
           // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
          }}>
      <Stack direction='column'>
            <Message usr={{abrev:"TT", full:"Testing Tester", img:"../public/vite.svg"}} msg={"Testing"} />

            <Message usr={{abrev:"AA", full:"Abrams Asshole", img:"../public/tauri.svg"}} msg={"I literally hate this other guy"} />

      </Stack>
      </Box>
  )
}
export default MessageBox;
