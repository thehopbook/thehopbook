import React from 'react';
import Button from '@mui/material/Button';
import logo from './thehopbook.png';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div style={styles.container}>
            <img src={logo} alt="Beer" style={styles.image} />
            <Button variant="contained" style={styles.button} onClick={() => navigate('/questionnaire')}>Let's Brew</Button>
        </div>
    );
};

export default LandingPage;

const styles = {
    container: {
        background: 'linear-gradient(to right, #D9923B, #50F2D4, #D9923B)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    image: {
        maxHeight: '600px'
    },
    button: {
        fontWeight: 'bold',
        color: "#F5F5F5",
        background: '#D9923B',
        border: 'none',
        borderRadius: '10px',
        marginTop: '1em',
        padding: '0.5em 2em',
        fontSize: '1.5em',
        cursor: 'pointer'
    }
}