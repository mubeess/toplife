import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import CircularProgress from '@mui/material/CircularProgress'
import { Fade } from "react-awesome-reveal";

const StyledContainer=styled.div`
min-height: 100vh;
position: relative;
width: 100%;
overflow-x: hidden;
background-color:white;

.intro{
    min-height: 100vh;
    width: 100%;
    background:linear-gradient(to right,#8381f9,#8381f9,#8381f9,#b770fb,#b770fb,#b770fb);
    display: flex;
    flex-direction: column;
    padding: 20px;
    .head{
        display: flex;
        flex-direction: row;
        height: 100px;
        background-color:transparent;
        width: 100%;
       .icon{
           display: none;
       }
        img{
            height: 100px;
            width: 100px;
            background-color: rgba(255,255,255,0.7);
            border-radius: 50%;
        }
        ul{
            align-self: flex-end;
            margin-left: auto;
            margin-right: 40px;
            margin-bottom: auto;
            li{
                display: inline;
                margin-left: 20px;
                a{
                    text-decoration: none;
                    color: white;
                    font-weight: bold;
                }
            }
        }
    }



.mainIntro{
    margin-left: 40px;
    margin-top: auto;
    margin-bottom: auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    img{
        height: 100%;
        width: 100%;
    }
    h4{
        font-size: 50px;
        color: white;
    }
    p{
        font-size: 20px;
        color: white;
    }
}
}



@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    .intro{
    min-height: 100vh;
    width: 100%;
    background:linear-gradient(#8381f9,#8381f9,#8381f9,#b770fb,#b770fb,#b770fb);
    display: flex;
    flex-direction: column;
    padding: 10px;
    .head{
        display: flex;
        flex-direction: row;
        height: 100px;
        background-color:transparent;
        width: 100%;
        .icon{
           display:flex;
           margin-left: auto;
           margin-right: 40px;
       }
       
        img{
            height: 70px;
            width: 70px;
            background-color: rgba(255,255,255,0.9);
            border-radius: 50%;
        }
        ul{
          display: none;
        }
    }



.mainIntro{
    margin-left:20px;
    margin-top: 40px;
    margin-bottom: auto;
    display:grid;
    grid-template-columns: 1fr;
    img{
        height: 100%;
        width: 100%;
    }
    h4{
        font-size: 30px;
        color: white;
    }
    p{
    text-align: justify;
    margin-left: 0px;
    margin-right: 20px;
    font-size: 15px;
    }
}
}
}
`;
export default function HomeScreen() {
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
    setTimeout(() => {
        setLoading(false)
    }, 1000);
    },[])
    return (
        <>
        {
            loading&&(
                <div className='loading'>
                    <CircularProgress/>
                </div>
            )
        }
        {
            !loading&&(
             <Fade>
            <StyledContainer>
           <div className='intro'>
            <div className='head'>
             <img src={require('../assets/logo.png')} alt='logo'/>
             <ul>
                 <li><a href='#'>Home</a></li>
                 <li><a href='#'>About Us</a></li>
                 <li><a href='#'>Contact Us</a></li>
                 <li><a href='#'>Social Handles</a></li>
             </ul>
         <div className='icon'>
         <MenuOutlinedIcon style={{
             fontSize:35,
             color:'white'
         }}/>
         </div>
            </div>



            <div className='mainIntro'>
                <div>
                <h4>Top Life Resources</h4>
                <p>
                   Top life resources Ltd is built on
                   professionalism, dedication, and Innovation.
                   We are commited to providing services that improve on
                   internally generated revenue, enhance eviromental standards
                   and optimise our clients performance.
                </p>
                <Button style={{
                    backgroundColor:'white',
                    width:'50%',
                    
                }}>More Details</Button>
                </div>

                <img src={require('../assets/rev.png')} alt='img'/>
               
            </div>
           </div>
        </StyledContainer>
             </Fade>
            )
        }
        
        </>
    )
}
