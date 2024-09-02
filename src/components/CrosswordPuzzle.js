import React, { useState } from "react";

const week2Crossword = [
 
];

let currentCrossword = week2Crossword

const CrosswordPuzzle = () => {
  const [hideStyle, setHideStyle] = useState({ backgroundColor: "black" });
  const [showStyle, setShowStyle] = useState({ backgroundColor: "white" });

  const createRow = (startCellId) => {
    const cells = [];
    let cell;
    for (let step = startCellId; step < startCellId + 20; step++) {
      cell = (
        <td
          style={currentCrossword.includes(step) ? showStyle : hideStyle}
          id={step}
          contentEditable={true}
        ></td>
      );
      cells.push(cell);
    }
    return cells;
  };

  return (
    <div>
      <main>
        <table id="crossword-puzzle-table">
          <tr>
            <th></th>
            {[...Array(20).keys()].map((num) => (
              <th>{num + 1}</th>
            ))}
          </tr>
          <tr id="row1">
            <td>1</td>
            {createRow(1)}
          </tr>
          <tr id="row2">
            <td>2</td>
            {createRow(21)}
          </tr>
          <tr id="row3">
            <td>3</td>
            {createRow(41)}
          </tr>
          <tr id="row4">
            <td>4</td>
            {createRow(61)}
          </tr>
          <tr id="row5">
            <td>5</td>
            {createRow(81)}
          </tr>
          <tr id="row6">
            <td>6</td>
            {createRow(101)}
          </tr>
          <tr id="row7">
            <td>7</td>
            {createRow(121)}
          </tr>
          <tr id="row8">
            <td>8</td>
            {createRow(141)}
          </tr>
          <tr id="row9">
            <td>9</td>
            {createRow(161)}
          </tr>
          <tr id="row10">
            <td>10</td>
            {createRow(181)}
          </tr>
          <tr id="row11">
            <td>11</td>
            {createRow(201)}
          </tr>
          <tr id="row12">
            <td>12</td>
            {createRow(221)}
          </tr>
          <tr id="row13">
            <td>13</td>
            {createRow(241)}
          </tr>
          <tr id="row14">
            <td>14</td>
            {createRow(261)}
          </tr>
          <tr id="row15">
            <td>15</td>
            {createRow(281)}
          </tr>
          <tr id="row16">
            <td>16</td>
            {createRow(301)}
          </tr>
          <tr id="row17">
            <td>17</td>
            {createRow(321)}
          </tr>
          <tr id="row18">
            <td>18</td>
            {createRow(341)}
          </tr>
          <tr id="row19">
            <td>19</td>
            {createRow(361)}
          </tr>
          <tr id="row20">
            <td>20</td>
            {createRow(381)}
          </tr>
        </table>
      </main>
    </div>
  );
};

export default CrosswordPuzzle;
