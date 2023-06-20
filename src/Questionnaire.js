import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OptionCard from './OptionCard';
import questionsData from './questions.json';

const Questionnaire = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  

  const handleCardClick = (cardIndex) => {
    setSelectedCard((prevSelectedCard) => (prevSelectedCard === cardIndex ? null : cardIndex));
  };

  const handleNextQuestion = () => {
    if (selectedCard === null) {
      return;
    }

    if (currentQuestionIndex + 1 > questionsData.length - 1) {
      navigate('/')
      return
    }
    setSelectedCard(null);
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const isCardSelected = (cardIndex) => {
    return selectedCard === cardIndex;
  };

  const cardSize = 250;
  const question = questionsData[currentQuestionIndex];

  return (
    <div style={styles.container}>
      <h1>What's your beer style?</h1>
      <Grid container justifyContent="center" spacing={8}>
        {question.options.map((option, index) => (
          <Grid item key={index}>
            <OptionCard
              option={option}
              cardSize={cardSize}
              isSelected={isCardSelected(index)}
              onClick={() => handleCardClick(index)}
            />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" style={{
          ...styles.button,
          background: selectedCard !== null ? '#D9923B' : '#808080', // Gray background when no card is selected
        }} onClick={handleNextQuestion}>
        Next
      </Button>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(to right, #D9923B, #50F2D4, #D9923B)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    fontWeight: 'bold',
    color: '#F5F5F5',
    background: '#D9923B',
    border: 'none',
    borderRadius: '10px',
    marginTop: '1em',
    padding: '0.5em 2em',
    fontSize: '1.5em',
    cursor: 'pointer',
  },
};

export default Questionnaire;
