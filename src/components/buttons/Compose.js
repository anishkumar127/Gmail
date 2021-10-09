import React from 'react'
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

const Compose = () => {
     return (
          <Wrapper>
               <AddIcon fontSize='large' />
               <p>Compose</p>
          </Wrapper>
     )
}

export default Compose;
const Wrapper = styled.div`
display:grid;
grid-template-columns:35% auto;
width:auto;
align-items:center;
padding:6px 32px 6px 8px;
border-radius:50px;
cursor:pointer;
color:#3c4043;
font-weight:500;

:hover{
     background-color:#fafafb;
}

`
