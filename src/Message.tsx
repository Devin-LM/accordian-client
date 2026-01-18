import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useState } from 'react';

function Message({usr, msg}) {

  return (
          <Box>
      {/* This all needs to be turned into a data structure idfk why i'm messing with it so much */}
              <Stack direction='row'>
                  <Avatar alt={usr.full} src={usr.img}>{usr.abrev}</Avatar>
                  <Typography>{msg}</Typography>
              </Stack>
          </Box>
  )
}

export default Message;
