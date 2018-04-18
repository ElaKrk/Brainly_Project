import React from 'react';
import UnorderedList, {SIZE as LIST_SIZE} from '../../../components/UnorderedList.jsx';

const ListBrainlyBenefits = () => {

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
 
    return (
        <UnorderedList liElements={liElements} size={LIST_SIZE.LARGE} spaced/>
    );
};

export default ListBrainlyBenefits;
