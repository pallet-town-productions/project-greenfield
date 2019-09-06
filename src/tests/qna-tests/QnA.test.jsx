/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Question from '../../components/QnA-components/Question';
import exampleQuestionData from '../../exampleQuestionData';

Enzyme.configure({ adapter: new Adapter() });

describe('Question & Answers', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Question
        data={exampleQuestionData.exampleQuestionData}
        counter={1}
        helpfulClickHandler={exampleQuestionData.helpfulClickHandler}
        reportClickHandler={exampleQuestionData.reportClickHandler}
        productName="Camo Onesie"
      />,
    );
    expect(wrapper);
  });

  const wrapper = mount(
    <Question
      data={exampleQuestionData.exampleQuestionData}
      counter={1}
      helpfulClickHandler={exampleQuestionData.helpfulClickHandler}
      reportClickHandler={exampleQuestionData.reportClickHandler}
      productName="Camo Onesie"
    />,
  );

  it('should have a question container', () => {
    expect(wrapper.exists('.questions-qna-container')).toBeTruthy();
    expect(wrapper.exists('.question-q-container')).toBeTruthy();
    expect(wrapper.exists('.question-q-text-container')).toBeTruthy();
  });

  it('should have a q tools container', () => {
    expect(wrapper.exists('.questions-q-tools')).toBeTruthy();
    expect(wrapper.exists('.qna-helpful-btn')).toBeTruthy();
  });

  it('should have an answer container', () => {
    expect(wrapper.exists('.qna-answer-container')).toBeTruthy();
  });

  it('should have an add answer modal', () => {
    expect(wrapper.exists('.qna-add-answer-span')).toBeTruthy();
    expect(wrapper.exists('.qna-modal-a-name')).toBeTruthy();
  });

  it('should have a picture modal', () => {
    expect(wrapper.exists('.qna-pmodal-container')).toBeTruthy();
    expect(wrapper.exists('.qna-modal-main')).toBeTruthy();
  });
});
