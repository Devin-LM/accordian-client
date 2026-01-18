import "./Forum.css";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Message from './Message.tsx';

function Forum() {

    return (
        <Container>

            {/* Eventually turn this into a 'Messages' component */}
            <Box sx={{height: "80vh"}}>
            <Stack direction='column'>
                <Message />
            </Stack>
            </Box>

            <Divider />

            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
              noValidate
              autoComplete="off"
            >
                <TextField className="filled-chatbox" label="Chat" variant="filled" />
            </Box>

            <Divider />

            {/* So should the friends panel, that way it can populate on its own */}
            <Stack direction='row' spacing={2}>

            <Avatar>A</Avatar>
            <Avatar/>

            </Stack>
        </Container>
    )
}
export default Forum;
