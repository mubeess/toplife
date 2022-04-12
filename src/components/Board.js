import React from 'react'
import styled from 'styled-components'

const StyledBoard=styled.div`
min-height: 70vh;
background-color: white;
width: 100%;
display: flex;
flex-direction:column;

h1{
    text-align: center;
}
.members{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex: 1;
    .memRole{
        width: 80%;
        height: 250px;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
        }
    }
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    .members{
        grid-template-columns: 1fr;
        .memRole{
            width: 90%;
            margin-top: 30px;
            border-bottom:1px solid gray ;
        }
    }
}
`;

export default function Board() {
    return (
        <StyledBoard>
            <h1>Board Members</h1>
            <div className='members'>
              <div className='memRole'>
               <img src={require('../assets/male.png')} alt='img'/>
               <h2>CEO</h2>
               <p>Salihu Rufai, Chilang</p>
              </div>


              <div className='memRole'>
               <img src={require('../assets/male.png')} alt='img'/>
               <h2>CTO</h2>
               <p>Mubarak Ibrahim</p>
              </div>


              <div className='memRole'>
               <img src={require('../assets/male.png')} alt='img'/>
               <h2>Secretary</h2>
               <p>Aisha Aliyu</p>
              </div>
            </div>
        </StyledBoard>
    )
}
