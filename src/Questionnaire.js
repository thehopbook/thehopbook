import React from 'react';

const Questionnaire = () => {
  // define your state using useState hook for each question

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submit, save answers
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* here you will need to add your questions using appropriate input elements */}
      {/* for example: */}
      <label>
        Beer Style:
        <input type="text" name="beerStyle" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Questionnaire;
