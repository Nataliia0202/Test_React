
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconFilter } from 'components/IconSearch';
import { ButtonFilter } from './Button.styled';
import { selectEvents } from 'redux/selector';
import { fetchEvents } from 'redux/operations';

export const SimpleMenu =()=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const events = useSelector(selectEvents);
    console.log(events);

 useEffect(() => {
   dispatch(fetchEvents());
 }, [dispatch]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
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
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
