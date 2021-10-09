import React from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
const SideIcons = () => {
     return (
          <Wrapper>
               <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png' />
               <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png' />
               <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png' />
               <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png' />
               <hr />
               <AddIcon />

          </Wrapper>
     )
}

export default SideIcons
const Wrapper = styled.div`
display:grid;
grid-template-rows:repeat(4, 50px) 1px 50px;
place-items:center;
border-left:1px solid lightgray;

img{
     width:100%;
     max-height:22px;
     object-fit:contain
}
hr{
     width:60%
}

`