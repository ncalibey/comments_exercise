import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ParentComment from '../components/ParentComment';

describe('ParentComment Tests', () => {
  let wrapper;
  const comment =  {
    "author": "Ladarius Blanda",
    "body": "Temporibus qui voluptas dolores dolore est atque deleniti rerum.",
    "id": "cd1a9fa9-4efc-4181-a6e8-3b99e7c41844",
    "postedAt": 1532513695108,
    replies_count: 3,
    "replies": [
        {
            "author": "Harry Witting",
            "body": "Qui voluptatem aut.",
            "comment_id": "cd1a9fa9-4efc-4181-a6e8-3b99e7c41844",
            "id": "596245dc-6bbe-4ad7-a18c-8306898167a9",
            "postedAt": 1532497606715
        }
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<ParentComment comment={comment}/>);
  });

  it('has a class of `parent-comment`', () => {
    expect(wrapper.find('.parent-comment').length).toEqual(1);
  });

  it('renders comment replies', () => {
    expect(wrapper.find('.replies').length).toEqual(comment.replies.length);
  });

  it('calls the onShowMoreClick prop when a.show-more is clicked', () => {
    const func = jest.fn();
    const wrapper = shallow(<ParentComment comment={comment} onShowMoreClick={func}/>);
    wrapper.find('a.show-more').simulate('click');
    expect(func.mock.calls[0][0]).toBe(comment.id);
  });
});
