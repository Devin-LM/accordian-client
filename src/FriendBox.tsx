import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

function FriendBox() {
  return (
      <Box sx={{
            mb: 2,
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
            overflowX: "scroll",
           // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
          }}>
          {/* Figure out how to horizontally scroll with a mouse */}
      <Stack direction='row' spacing={2}>
        <Avatar>A</Avatar>
        <Avatar/>
<Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/><Avatar/>
      </Stack>
      </Box>
  )
}
export default FriendBox;
