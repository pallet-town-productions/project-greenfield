/* eslint-disable linebreak-style */
const exampleQuestionData = {
  question_id: 5,
  question_body: 'Can I wash it?',
  question_date: '2018-02-08T00:00:00.000Z',
  asker_name: 'cleopatra',
  question_helpfulness: 13,
  reported: 0,
  answers: {
    46: {
      id: 46,
      body: "I've thrown it in the wash and it seems fine",
      date: '2018-02-08T00:00:00.000Z',
      answerer_name: 'marcanthony',
      helpfulness: 8,
      photos: ['https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png'],
    },
    64: {
      id: 64,
      body: 'It says not to',
      date: '2018-03-08T00:00:00.000Z',
      answerer_name: 'ceasar',
      helpfulness: 0,
      photos: [],
    },
    96: {
      id: 96,
      body: "I wouldn't machine wash it",
      date: '2018-03-08T00:00:00.000Z',
      answerer_name: 'ceasar',
      helpfulness: 0,
      photos: [],
    },
    101: {
      id: 101,
      body: 'Only if you want to ruin it!',
      date: '2018-03-08T00:00:00.000Z',
      answerer_name: 'ceasar',
      helpfulness: 5,
      photos: [],
    },
    107: {
      id: 107,
      body: 'Yes',
      date: '2018-03-08T00:00:00.000Z',
      answerer_name: 'Seller',
      helpfulness: 4,
      photos: [],
    },
  },
};

const url = process.env.REACT_APP_APIURL || '123.456.789.1011';

const helpfulClickHandler = (component, id, type) => {
  if (component === 'reviews') {
    fetch(`${url}/${component}/helpful/${id}`, {
      method: 'PUT',
    });
  } else {
    fetch(`${url}/${component}/${type}/${id}/helpful`, {
      method: 'PUT',
    });
  }
};

const reportClickHandler = (component, id, type) => {
  if (component === 'reviews') {
    fetch(`${url}/${component}/report/${id}`, {
      method: 'PUT',
    });
  } else {
    fetch(`${url}/${component}/${type}/${id}/report`, {
      method: 'PUT',
    });
  }
};


export default { exampleQuestionData, reportClickHandler, helpfulClickHandler };
