import React from 'react';

const Table = () => {
    return (
        <table className={"table"}>
            <thead className={"thead-inverse"}>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
            </thead>
            <tbody>
                <tr>
                    <td>Augustine Cheng</td>
                    <td>Photography 101</td>
                    <td>98</td>
                </tr>
                <tr>
                    <td>Ryan Libed</td>
                    <td>React101</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Johnny Pham</td>
                    <td>Mechanical Engineering</td>
                    <td>85</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table;