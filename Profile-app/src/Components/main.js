import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Display from './Display';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './main.css'

function Main() {

    const [userDetails,setUserDetails]=useState();
    const [isLoading, setLoading] = useState(true);
    
    const fetchInfo = async() => {
        try{
            await axios.get('https://dummyjson.com/users').then((res) =>{
                console.log(res.data.users)
                
                const users = [];
                var rawUsers = res.data.users.slice(21,24);
                for(var i = 0; i<3; i++){
                    var tempUser = {};
                    tempUser["id"] = rawUsers[i].id
                    tempUser["firstName"] = rawUsers[i].firstName
                    tempUser["lastName"] = rawUsers[i].lastName
                    tempUser["email"] = rawUsers[i].email
                    tempUser["phone"] = rawUsers[i].phone
                    tempUser["image"] = rawUsers[i].image
                    tempUser["address"] = rawUsers[i].address.address + ", " + rawUsers[i].address.city
                    tempUser["username"] = rawUsers[i].username
                    tempUser["customerId"] = rawUsers[i].bank.cardNumber
                    users.push(tempUser)
                }
                console.log("users"+ users);
                console.log(users)
                setUserDetails(users);
                setLoading(false)
            });
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchInfo();
    }, [])
  
    if(isLoading){
        return (<div> <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading} 
            >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>)
    }

    return (
        <div>
            <h2 className= "heading"> Profile Page </h2>
            <Display userDetails={userDetails}/>
        </div>
    )
}

export default Main;