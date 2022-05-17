import React from 'react'
import styled from 'styled-components'

const StyledAcre=styled.div`
min-height: 500px;
min-width: 100%;
max-height: 500px;
max-width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    text-align: center;
}
img{
width: 100%;
height: 450px;
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    img{
        height: 250px;
    }
}
`;
export default function Accredited() {
    return (
        <StyledAcre>
            <h1>Accredited By:</h1>
            <img src={require('../assets/acr.png')} alt='img'/>
        </StyledAcre>
    )
}
