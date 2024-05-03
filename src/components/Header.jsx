

import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AppleIcon from '@mui/icons-material/Apple';
import { navData } from '../constants/constant';
import { Box, Typography, styled } from '@mui/material';

const Components = styled(Box) ({
    backgroundColor: '#1d1d1f',
    height: 44,
});

const NavBar = styled(Box)({
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    '& > *': {
        color: 'rgba(255, 255, 255)',
        fontWeight: 600,
        opacity: '80%',
        padding: '0 21px',
        fontSize: 12
    }
}); 

const Header = ()  => {
    return(
            <Components>
                <NavBar>
                <AppleIcon  fontSize='large'/>
                    {/* <img src={appleLogo} alt="logo" /> */}
                    {   
                        navData.map(nav => (
                            <Typography style={{ fontSize:12, fontWidth: 600 }}>{nav}</Typography>
                        ))
                    }
                    <SearchIcon fontSize='small'/>
                    <WorkOutlineIcon fontSize='small'/>
                </NavBar>
            </Components>
    )

}

export default Header;