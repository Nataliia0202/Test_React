
import React from 'react';
import {  useSelector } from 'react-redux';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconFilter } from 'components/IconSearch';
import { ButtonFilter, TextBtn } from './Button.styled';
import { selectEvents} from 'redux/selector';




export const SimpleMenu =({text})=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
   
    const events = useSelector(selectEvents);
 
  const ev = events.map((event) => {
    return event.category
  })
  
const uniqueCategory = ev.filter(
  (event, index, array) => array.indexOf(event) === index
  );

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    };
    
  const handleClose = ()=> {
    setAnchorEl(null);
    
  };
  const onClick =()=> {
    
    setAnchorEl(null);
  };
    

  return (
    <div>
      <ButtonFilter
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <TextBtn>{text}</TextBtn>
        <IconFilter />
      </ButtonFilter>
      <Menu
        
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {uniqueCategory.length !== 0 &&
          uniqueCategory.map(category => {
            return (
              <MenuItem
                key={category}
                onClick={onClick}
                style={{ borderBottom: '1px solid #ACA7C3' }}
              >
                {category}
              </MenuItem>
            );
          })}
      </Menu>
    </div>
  );
}
