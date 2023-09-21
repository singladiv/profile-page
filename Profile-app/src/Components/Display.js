import React,{useState, useEffect} from 'react';
import { CssBaseline, Avatar, Stack, Typography, Button } from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import './display.css'

export default function Display(userDetails) {
  console.log("inside display: ");
  console.log(userDetails)

  const [selectedUser, setSelectedUser] = useState(0)
  userDetails = userDetails.userDetails;


  function handleClick(key) {
    setSelectedUser(key);
  };

  return (
    <>
    <Box component="span"  className="card"
    sx={{ display: 'inline-block', mx: '4px', transform: 'scale(0.8)' }}>
    
    <Card className="cardI" variant="outlined">
    <CardContent>
    <Stack  justifyContent={'flex-start'}>
        <CssBaseline />
        <Stack direction="" spacing={4}>
        <Avatar
            className='avtar'
            alt={userDetails[selectedUser].firstName}
            src={userDetails[selectedUser].image}
            sx={{ width: 150, height: 150}}
          /> 
        <Stack direction="row" spacing={-1} alignItems={'flex-end'}>
          {(()=>{
              const avatarList = [];
              for(var i = 0; i<userDetails.length; i++){
                if(i!=selectedUser){  
                  
                  avatarList.push(<Avatar className='avtar-secondary'
                    alt={i}
                    src={userDetails[i].image} 
                    sx={{  width: 70, height: 70,}} 
                    onClick={(event)=>{handleClick(event.target.alt)}}
                    />)
                }
              }
              return avatarList;
          })()}
        </Stack>


        </Stack>
       
        <Typography>
          <h2>{userDetails[selectedUser].firstName + " " + userDetails[selectedUser].lastName}</h2>
          <h3>Customer Id: #{userDetails[selectedUser].customerId.slice(1,10)}</h3>
          <div className='text'>
          <p>Account Owner| Since {userDetails[selectedUser].customerId.slice(2,3)}&nbsp; Years</p>
          <p><AccessibilityNewIcon /> &nbsp;{userDetails[selectedUser].username}</p>
          <p><CallRoundedIcon /> &nbsp; {userDetails[selectedUser].phone}</p>
          <p><MailRoundedIcon /> &nbsp;{userDetails[selectedUser].email}</p>
          <p><HomeRoundedIcon /> &nbsp;  {userDetails[selectedUser].address}</p>
          </div>

        </Typography>
       
      </Stack>
      </CardContent> 
      </Card> 
    </Box>
   

</>
  )
}
