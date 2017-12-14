import React from 'react';

export default props => {
    const {firstName, lastName, phone, email, street, city, state, zip} = props.contact;
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header card-inverse card-primary">
                    {lastName}
                </div>
                <div className="card-block">
                    <h4 className="card-title">
                        {firstName} {lastName}
                    </h4>
                    <div className="card-text">
                        <p><b>Phone: </b>{phone}</p>
                        <p><b>Email: </b>{email}</p>
                        <hr/>
                        <p><b>Address: </b></p>
                        <p>{street}</p>
                        <p>{city}, {state} {zip}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}