

import {Box, Typography, styled} from '@mui/material';


const Component = styled(Box)({
    width: '100%',
    height: 580,
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 47,
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat'
});


const Heading = styled(Typography)({
    fontWeight: 600,
    fontSize: 56,
    color: '#ffff'
});

const Headingsub = styled(Typography)({
    fontSize:28,
    color: '#ffff',
    padding: '0 0 5px 0'
});

const linkStyle = {color: '#2997ff', padding: '0 30px', fontSize: 20}

const Section = ({data}) => {
    return (
        <Component  style={{background: `url(${data.imageUrl})`}}>
            <Heading >{data.heading}</Heading>
            <Headingsub >{data.subHeading}</Headingsub>
            <Typography>
                <Typography component="span" style={linkStyle}>Learn more &gt;</Typography>
                <Typography component="span" style={linkStyle}>Buy &gt;</Typography>
            </Typography>

        </Component> 
    )
} 

export default Section;