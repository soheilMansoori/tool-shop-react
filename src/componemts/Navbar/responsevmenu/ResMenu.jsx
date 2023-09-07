import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// mui icons
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


export default function ResMenu({pages}) {
  const [state, setState] = useState({
    right: false,
  });


  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({right: open });
  };



//   menu items
  const list = () => (
    <Box
      width = '250px'
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem key={page.id} disablePadding>
            <Link to={page.link}>
              <ListItemButton>
                
                <ListItemIcon>
                    {page.icon}
                </ListItemIcon>

                <ListItemText className='text-right'>
                    {page.name}
                </ListItemText>

              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
        {/* menu icon */}
          <MenuIcon onClick={toggleDrawer(true)}/>
        {/* menu */}
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
    </>
  );
}
