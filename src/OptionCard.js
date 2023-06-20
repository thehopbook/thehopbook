import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';

const OptionCard = ({ option, cardSize, isSelected, onClick }) => {
    return (
      <Card
        onClick={onClick}
        sx={{
          width: cardSize,
          height: cardSize,
          position: 'relative',
          '& .MuiCardContent-root': {
            position: 'absolute',
            top: 16,
            bottom: 16,
            left: 16,
            right: 16,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          border: isSelected ? '2px solid green' : 'none',
        }}
      >
        <CardContent>
          <Typography variant="h6">{option.label.toUpperCase()}</Typography>
        </CardContent>
      </Card>
    );
  };

  export default OptionCard;