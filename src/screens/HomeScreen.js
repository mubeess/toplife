import { Button, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import CircularProgress from '@mui/material/CircularProgress'
import { Fade } from "react-awesome-reveal";
import Goals from '../components/Goals';
import Board from '../components/Board';

const StyledContainer=styled.div`
min-height: 100vh;
position: relative;
width: 100%;
overflow-x: hidden;
background-color:white;
overflow-y: hidden;


.aboutUs{
    min-height: 50vh;
    width: 80%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    p{
        text-align: justify;
        margin-left: 20px;
        margin-right: 20px;
        font-size: 20px;
    }


}

.intro{
    min-height: 100vh;
    overflow: hidden;
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
.aboutUs{
    width: 90%;
    p{
        margin-right: 10px;
        margin-left: 10px;
    }
}
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
             
            <StyledContainer>
                <Fade triggerOnce>
           <div id='introD' className='intro'>
            <div className='head'>
             <img src={require('../assets/logo.png')} alt='logo'/>
             <ul>
                 <li><a href='#introD'>Home</a></li>
                 <li><a href='#about'>About Us</a></li>
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
           </Fade>
           <Goals/>
          
           <div className='aboutUs' id='about'>
           <Divider>ABOUT US</Divider>
            <p>
                Top Life Resources are specialised in enviromental
                and revenue consultations, where we assist in creating enabling enviroment
                that raises civil awareness at all levels in relation to individual, collective
                and corporate social responsibilities in enviromental governance and safety.
                It was corporated in Nigeria on 25th November, 2013 as a Private Limited company
                under The Corporate Affairs Commission (CAC), Abuja.
            </p>
           </div>

           <Board/>
        </StyledContainer>
             
            )
        }
        
        </>
    )
}
