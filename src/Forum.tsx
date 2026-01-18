import "./Forum.css";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MessageBox from './MessageBox.tsx';
import FriendBox from './FriendBox.tsx';

function Forum() {

    return (
        <Container sx={{height: "95vh"}}>

            {/* Eventually turn this into a 'Messages' component */}

            <MessageBox />

            <Divider />

            <Container >
            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
              noValidate
              autoComplete="on"
            >
                <TextField className="filled-chatbox" label="Chat" variant="filled" />
            </Box>

            <Divider />

            {/* So should the friends panel, that way it can populate on its own */}
            {/* Friends panel should be scrollable depending on how many friends */}

            <FriendBox />

            </Container>
        </Container>
    )
}
export default Forum;
