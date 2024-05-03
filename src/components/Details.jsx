import { Box,Typography, styled  } from "@mui/material";

const Components = styled(Box)({
    backgroundColor: '#fff',
    display: "flex",
    justifyContent: "center",
    '& > p':{
        fontSize: 14,
        padding: '12px 0',
        color: '#1d1d1d',
    }
});

const Details = () => {
    return (
        <Components>
            <Typography>
                    See the documentation below for a complete reference 
                    to all of the props and classes available to the components. * <span style={{color: '#2997ff'}}>Shop now &gt;</span> 
            </Typography>
        </Components>
    );
}

export default Details;