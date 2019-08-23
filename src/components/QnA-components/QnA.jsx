/* eslint-disable linebreak-style */
import React from 'react';
import Ask from './Ask';
import List from './List';
import Search from './Search';

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [{
        question_id: 37,
        question_body: 'Why is this product cheaper here than other sites?',
        question_date: '2018-10-18T00:00:00.000Z',
        asker_name: 'williamsmith',
        question_helpfulness: 4,
        reported: 0,
        answers: {
          68: {
            id: 68,
            body: 'We are selling it here without any markup from the middleman!',
            date: '2018-08-18T00:00:00.000Z',
            answerer_name: 'Seller',
            helpfulness: 4,
            photos: [],
            // ...
          },
        },
      },
      {
        question_id: 38,
        question_body: 'How long does it last?',
        question_date: '2019-06-28T00:00:00.000Z',
        asker_name: 'funnygirl',
        question_helpfulness: 2,
        reported: 0,
        answers: {
          70: {
            id: 70,
            body: 'Some of the seams started splitting the first time I wore it!',
            date: '2019-11-28T00:00:00.000Z',
            answerer_name: 'sillyguy',
            helpfulness: 6,
            photos: [],
          },
          78: {
            id: 78,
            body: '9 lives',
            date: '2019-11-12T00:00:00.000Z',
            answerer_name: 'iluvdogz',
            helpfulness: 31,
            photos: [],
          },
        },
      },
        // ...
      ],
      answers: {
        question: '1',
        page: 0,
        count: 5,
        results: [
          {
            answer_id: 8,
            body: 'What a great question!',
            date: '2018-01-04T00:00:00.000Z',
            answerer_name: 'metslover',
            helpfulness: 8,
            photos: [],
          },
          {
            answer_id: 5,
            body: "Something pretty durable but I can't be sure",
            date: '2018-01-04T00:00:00.000Z',
            answerer_name: 'metslover',
            helpfulness: 5,
            photos: [{
              id: 1,
              url: 'urlplaceholder/answer_5_photo_number_1.jpg',
            },
            {
              id: 2,
              url: 'urlplaceholder/answer_5_photo_number_2.jpg',
            },
              // ...
            ],
          },
          // ...
        ],
      },
    };
  }

  render() {
    const { results, answers } = this.state;
    return (
      <div>
        <h3>QUESTIONS & ANSWERS</h3>
        <Search />
        <List QnA={results} answers={answers} />
        <button type="submit">MORE ANSWERED QUESTIONS</button>
        <Ask />
      </div>
    );
  }
}

export default QnA;
