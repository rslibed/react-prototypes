import React from 'react';
import Table from './table';

const App = () => {
    const students = [
        {
            student: "Augustine Cheng",
            course: "Photography 101",
            grade: "100"
        },
        {
            student: "Ryan Libed",
            course: "React 101",
            grade: "85"
        },
        {
            student: "Josh Chang",
            course: "AJAX",
            grade: "99"
        },
    ];
    return (
    <div className={"container"}>
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
    )
}

export default App;


