
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconFilter } from 'components/IconSearch';
import { ButtonFilter } from './Button.styled';
import { selectEvents} from 'redux/selector';
import { fetchEvents} from 'redux/operations';



export const SimpleMenu =()=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const events = useSelector(selectEvents);
 
  // console.log(filter)

 useEffect(() => {
  dispatch(fetchEvents());
   
 }, [dispatch]);
  
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
        <IconFilter />
      </ButtonFilter>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        ve="true"
      >
        {uniqueCategory.length !== 0 &&
         
          uniqueCategory.map((category) => {
            return (
              <MenuItem
                key={category}
                onClick={onClick}
                
                
              >
                {category}
              </MenuItem>
            );
          })}
      </Menu>
    </div>
  );
}
