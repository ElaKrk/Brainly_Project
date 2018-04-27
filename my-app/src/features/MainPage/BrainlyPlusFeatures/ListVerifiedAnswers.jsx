// @flow
import * as React from 'react';
import UnorderedList from '../../../components/UnorderedList';

const ListVerifiedAnswers = () => {
  const numberOfVerifiedAnswers = '2 mln';

  const one = 'are checked for correctness by our experts,';
  const two = 'have best explanaition of solution,';
  const three = 'answered by our best users,';
  const four = `there are over ${numberOfVerifiedAnswers} Verified Answers fot you most popular questions.`;

  const liElements = [one, two, three, four];

  return (
    <UnorderedList liElements={liElements} />
  );
};

export default ListVerifiedAnswers;
