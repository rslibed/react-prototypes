import React from 'react';
import Table from './table';

export default () => {
    const students = [
        {
            name: "Augustine Cheng",
            course: "Photography 101",
            grade: "100"
        },
        {
            name: "Ryan Libed",
            course: "React 101",
            grade: "85"
        },
        {
            name: "Josh Chang",
            course: "AJAX",
            grade: "99"
        }
    ];
    return (
    <div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
    )
}


