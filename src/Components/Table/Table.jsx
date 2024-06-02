import React from 'react';
import "./Table.css"

// const Table = () => (
//   <table className="instructions-table">
//     <thead>
//       <tr>
//         <th>SR</th>
//         <th>Language</th>
//         <th>Duration (in minutes)</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>1</td>
//         <td>Odia Typing (Odia)</td>
//         <td>10 Minutes</td>
//       </tr>
//     </tbody>
//   </table>
// );

// src/components/Table.js

const Table = () => (
  <table className="info-table">
    <tbody>
      <tr>
        <td>Roll Number</td>
        <td>1048</td>
      </tr>
      <tr>
        <td>Candidate Name</td>
        <td>dummy_48</td>
      </tr>
      <tr>
        <td>Typing Language</td>
        <td className="highlight">Odia Typing <span className="highlighted-text">Odia</span></td>
      </tr>
      <tr>
        <td>Duration (in minutes)</td>
        <td>10 Minutes</td>
      </tr>
    </tbody>
  </table>
);



export default Table;
