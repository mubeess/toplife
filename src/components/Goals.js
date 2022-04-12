import React from 'react'
import styled from 'styled-components'
import {Zoom} from "react-awesome-reveal";

const StyledGoal=styled.div`
min-height: 70vh;
width: 100%;
background-color:#f9f9f9;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
align-items: center;
.goal{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    min-height: 250px;
    max-height: 250px;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        text-align: center;
        ::first-letter{
            color:rgba(0,0,0,0.5);
            font-size: 50px;
        }
    }
    img{
        width:150px;
        height: 150px;
        border-radius: 50%;
    }
}

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    grid-template-columns: 1fr;
    .goal{
        margin-top: 25px;
        width: 90%;
        margin-bottom: 10px;
    }
}
`;
export default function Goals() {
    return (
        <StyledGoal>
            <Zoom cascade triggerOnce>       
             <div className='goal'>
           <h2>Enviroment</h2>
           <img src={require('../assets/env.png')} alt='logo'/>
            </div>

            <div className='goal'>
           <h2>Businessess</h2>
           <img src={require('../assets/human.png')} alt='logo'/>
            </div>

            <div className='goal'>
           <h2>Humanity</h2>
           <img src={require('../assets/hu.png')} alt='logo'/>
            </div>
            </Zoom>


        </StyledGoal>
    )
}
