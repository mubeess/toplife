import { Button, Divider, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {MapOutlined,PhoneAndroidOutlined, Twitter, WhatsappOutlined,FacebookOutlined, Close,MailOutline} from '@mui/icons-material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CircularProgress from '@mui/material/CircularProgress'
import { Fade } from "react-awesome-reveal";
import Goals from '../components/Goals';
import Board from '../components/Board';
import Accredited from '../components/Accredited';


const StyledContainer=styled.div`
min-height: 100vh;
position: relative;
width: 100%;
overflow-x: hidden;
background-color:white;
overflow-y: hidden;
.arrUp{
    position: fixed;
    height: 50px;
    width: 50px;
    background-color:#f9f9f9;
    bottom: 0;
    right: 0;
    margin-bottom: 50px;
    margin-right: 20px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.phone{
    position: fixed;
    transition: all 0.5s;
    top: 0;
    min-height: 250px;
    background-color: white;
    width: 100%;
    z-index: 200;
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%, 100% 48%);
    display: flex;
    flex-direction: column;
    ul{
        margin-left: auto;
        margin-right: 40px;
        list-style: none;
        li{
           border-bottom: 0.5px solid lightgray;
            a{
                text-decoration: none;
                font-weight: bolder;
                color: black;
                font-size: 23px;
            }
        }
    }
}
.phone.show{
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
}
.foot{
    background:linear-gradient(to right,#7be495,#7be495,#7be495,#329d9c,#329d9c,#329d9c);
    min-height: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4{
        color: white;
    }
    .soc{
        display: flex;
        flex-direction: row;
        height: 30px;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
}
.contact{
    min-height: 50vh;
    width: 80%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    .contDet{
     display: flex;
     flex-direction: row;
     align-items: center;
     h2{
         margin-left: 20px;
         width: 80%;
         text-align: justify;
         margin-right: 20px;
         color: rgba(0,0,0,0.5);
         
     }
    }

}

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
    background:linear-gradient(to right,#7be495,#7be495,#7be495,#329d9c,#329d9c,#329d9c);
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
            background-color: rgba(255,255,255,0.3);
            /* border-radius: 50%; */
            
            
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
    background:linear-gradient(#7be495,#7be495,#7be495,#329d9c,#329d9c,#329d9c);
    display: flex;
    flex-direction: column;
    padding: 5px;
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
            background-color: rgba(255,255,255,0.3);;
            /* border-radius: 50%; */
        }
        ul{
          display: none;
        }
    }



.mainIntro{
    margin-left:20px;
    margin-top: 3px;
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
    const [show,setShow]=useState('')
    const [open,setOpen]=useState(false)
    const handleClose=()=>{
        setOpen(false)
    }
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
                 <li><a href='#conn'>Contact Us</a></li>
                 <li><a href='#foots'>Social Handles</a></li>
             </ul>
         <div className='icon'>
         <MenuOutlinedIcon onClick={()=>{
             setShow('show')
         }} style={{
             fontSize:35,
             color:'white'
         }}/>
         </div>
            </div>



            <div id='introD' className='mainIntro'>
                <div>
                <h4>Top Life Resources</h4>
                <p>
                   Top life resources Ltd is built on
                   professionalism, dedication, and Innovation.
                   We are commited to providing services that improve on
                   internally generated revenue, enhance eviromental standards
                   and optimise our clients performance.
                </p>
                <Button onClick={()=>{
                    setOpen(true)
                }} style={{
                    backgroundColor:'white',
                    width:'50%',
                    color: '#7be495'
                    
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
                Toplife Resources Ltd was incorporated in Nigeria on 25th November, 
                2013, as a private Limited Company under the Corporate Affairs Commission (CAC), 
                Abuja. Her major areas of activities are Environmental and Revenue Consultancy Services
                 for Government Departments and clients in and within the country. The company uses her
                  expertise in Corporate Consultancy to assist her clients in improving their Internally 
                  Generated Revenue and adding values to Environmental Standards, since it has been established 
                  that increased Environmental Standards are keys to sustainable green economy; sufﬁcient to meet
                   the demands of services at various levels of Government. Hence, the engagement of professionals 
                   in the private sector in galvanizing a framework, which to a large extent ensures the collection 
                   of government revenue in a system that enjoys tax evasion and within an environment 
                   that is constantly under the threat of climate change factors that are inevitable.
                   Toplife Resources Ltd are specialist revenue and environmental consultants that assists in 
                   creating enabling environment that raises civil awareness at all levels in relation to 
                   individual, collective and corporate social responsibilities in environmental
                    governance and safety.
            </p>
           </div>

           <div className='aboutUs'>
           <Divider>MISSION</Divider>
            <p>
            To Maintain Best Practices in service delivery; attain 
            optimum goals in success through corporate ﬁnance administration and 
            Environmental Standards Compliance Initiative. As a result of the multiple 
            functions of Government and its Ministries and Agencies at all levels generally, 
            the need for collaboration with Consultants in some of its activities, 
            notably, Consultancy Services need not be over emphasized.
            </p>
           </div>

           <Board/>
           <Divider style={{
               marginTop:30,
               width:'80%',
               marginRight:'auto',
               marginLeft:'auto'
           }}>Our Contacts</Divider>
           <div id='conn' className='contact'>
           <div className='contDet'>
           <MapOutlined></MapOutlined>
           <h2>
           No 8, Mbonu Ojike Street, Ikenegbu Owerri.
           Imo State.
           </h2>
            
           </div>


           <div className='contDet'>
           <PhoneAndroidOutlined></PhoneAndroidOutlined>
           <h2>
          07064912335
           </h2>
            
           </div>
          
           </div>
           <Accredited/>


           <div id='foots' className='foot'>
            <div className='soc'>
            <a href='facebook.com/topliferesources@gmail.com?_rdc=1&_rdr'> 
              <FacebookOutlined style={{
                color:'white',
                cursor:'pointer'
            }}/>
            </a>
            <a href='https://twitter.com/eruofestus'> 
            <Twitter style={{
                marginLeft:30,
                color:'white',
                cursor:'pointer'
            }}/>
            </a>
            <a href='mailto:topliferesources@gmail.com'>
            <MailOutline style={{
                marginLeft:30,
                color:'white',
                cursor:'pointer'
            }}/>
            </a>
            </div>
            <h4>All rights reserved Ⓒ 2022</h4>
           </div>

           <div className={`phone ${show}`}>
           <Close onClick={()=>{
               setShow('')
           }} style={{
               fontSize:40,
               color:'black',
               marginLeft:'auto',
               marginTop:20,
               marginRight:20
           }}/>

         <ul>
                 <li onClick={()=>{
               setShow('')
           }}><a href='#introD'>Home</a></li>
                 <li onClick={()=>{
               setShow('')
           }}><a href='#about'>About Us</a></li>
                 <li onClick={()=>{
               setShow('')
           }}><a href='#conn'>Contact Us</a></li>
                 <li onClick={()=>{
               setShow('')
           }}><a href='#foots'>Social Handles</a></li>
            </ul>
           </div>


           <div onClick={()=>{
               window.scrollTo({top:0})
           }} className='arrUp'>
        <ArrowDropUpIcon style={{
            fontSize:60
        }}/>
           </div>
        </StyledContainer>
             
            )
        }
         <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<>
<Close onClick={handleClose} style={{
               fontSize:40,
               color:'white',
               marginLeft:'40%',
               marginTop:10,
               marginRight:20,
               backgroundColor:'black',
               cursor:'pointer'
    
           }}/>
<p style={{
    width:'80%',
    minHeight:200,
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor:'white',
    color:'black',
    marginTop:40,
    textAlign:'justify',
    padding:20,
    maxHeight:500,
    overflowY:'scroll'
    
}}>
Top Life Resources major areas of activities covers but not limited to enviromental/revenue
consultancy services, government departments and clients in and within the country. The company
uses her expertise in corporate enviromental consultancy services in assisting  her clients 
in adding values to enviromental standards and towards improved internally generated revenue.
since it has been established that increased enviromental standards are keys to sustainable 
green economy, sufficient to meet the demands of sevices at various levels of government in the society.
Hence, the engagement of professionals in the private sector in galvanizing a framework, which to 
a large extent ensures the collection of government revenue in a system that enjoys tax evasion and 
within an environment that is constantly under the threat of climate change factors that are inevitable 
</p>
</>
</Modal>
        </>
    )
}


