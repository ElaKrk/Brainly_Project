import React from 'react';

const UnorderedList = () => {

    const numberOfVerifiedAnswers = "123,00";
    const numberOfPremiumUsers = "2 million+";

    const one = `Unlimited access to over ${numberOfVerifiedAnswers} Verified Answers, that are checked for quality, accuracy and detail`;
    const two = "Answers with explanaitions";
    const three = `Collaborate with a community of ${numberOfPremiumUsers} students`;
    const four = "100% guarantee of getting answer";
    const five = "Most of our questions get answer within 10 minutes";
    const six = "Ad-free viewing for uninterrupted learning";
    const seven = "No Commitments. Cancel anytime";

    const liElements = [one, two, three, four, five, six, seven];

    function UnorderedList(props) {
        const listItems = props.liElements.map((liElement) =>
          <li className="brn-list__element" key={liElement.toString()}>
            {liElement}
          </li>
        );
        return (
            <ul className="brn-element--padding-left">{listItems}</ul>
        );
    }
  
    return (
        <UnorderedList liElements={liElements}/>
    );
};

export default UnorderedList;
