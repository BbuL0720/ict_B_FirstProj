import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { json } from 'stream/consumers';

const BoardList: React.FC = () => {
  return (
    <div className='container'>
      <h2>#board</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>제목들어갈자리</td>
            <td>작성자들어갈자리</td>
            <td>내용들어갈자리</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BoardList