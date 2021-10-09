import React from 'react'
import styled from 'styled-components'
import Compose from '../buttons/Compose'
import { SideBarButtonItems } from '../../data/SidebarButtonItems'
import KeyboardIcon from '@material-ui/icons/Keyboard';
import VideocamIcon from '@material-ui/icons/Videocam';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { bottomIcons } from '../../data/BottomIconsData'
const Sidebar = () => {
     return (
          <Wrapper>
               <ComposeWrapper>
                    <Compose />
               </ComposeWrapper>
               <SideButtonWrapper>
                    {
                         SideBarButtonItems.map(item => (

                              <SideBarButtonItem>{item.icon} {item.text}</SideBarButtonItem>
                         ))
                    }
               </SideButtonWrapper>
               <SidebarSectionWrapper>
                    <Title>Meet</Title>
                    <p><VideocamIcon /> New Meeting</p>
                    <p><KeyboardIcon />Join Meeting</p>
               </SidebarSectionWrapper>
               <SidebarSectionWrapper>
                    <Title>Hangouts</Title>
                    <p><AccountCircleIcon />Anish Kumar</p>
               </SidebarSectionWrapper>
               <BottomIconsWrapper>

                    {
                         bottomIcons.map(icon => (
                              <>
                                   {icon}
                              </>
                         ))
                    }
               </BottomIconsWrapper>
          </Wrapper>
     )
}

export default Sidebar
const Wrapper = styled.div`
border-right:1px solid lightgray;
height:100vh;

`
const ComposeWrapper = styled.div`
display:grid;
place-items:start;
padding:10px 20px;

`
const SideButtonWrapper = styled.div``
const SideBarButtonItem = styled.div`
display:grid;
grid-template-columns:14% auto;
color:gray;
padding:5px 25px;
border-radius:0 100px 100px 0;
cursor:pointer;
margin-right:8px;
:hover{
     background-color:#f5f7f7;
}
`
const SidebarSectionWrapper = styled.div`
position:relative;
top:300px;
border-top:1px solid lightgray;
p{
     color:gray;
     display:grid;
     grid-template-columns:14% auto;
     padding-left:25px;
     height:30px;
     align-items:center;
     
}
`


const Title = styled.h4`
padding-left:25px;
margin-bottom:4px;
margin-top:8px;
`
const BottomIconsWrapper = styled.div`
display:flex;
justify-content:center;
margin-top:1px solid lightgray;
color:gray;
margin-top:60px;

.MuiSvgIcon-root{
     padding:2px
}
`