import React from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form';

function App () {
    return (<div className="container">
        <h1 className="text-center my-3">Address Book</h1>
            <div className="row">
                <div className="col-4">
                    <ContactForm/>
                </div>
                <ContactList/>
            </div>
    </div>
    );
}
export default App;

