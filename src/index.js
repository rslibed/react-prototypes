import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => Math.floor(Math.random() * 100) + 1;

const user = {
  firstName: "Ryan",
  lastName: "Libed",
  luckyNumber: luckyNumber()
};

const {firstName, lastName} = user;

const greeting = userObj => {
    const divContainer = <div className={'container'}>
        <h1>Hello there, {userObj.firstName} {userObj.lastName}!</h1>
        <h2 className={'text-muted'}>Your lucky number is: {userObj.luckyNumber}</h2>
    </div>
    return divContainer;
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
