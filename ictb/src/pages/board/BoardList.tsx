import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { json } from 'stream/consumers';

const BoardList: React.FC = () => {
	return (
		<div className='container d-flex flex-column justify-content-center' style={{maxWidth:'900px'}}>
			{/* <h2>#board</h2> */}

			<div className="display-4 mx-auto my-4">큰 글씨 텍스트</div>

			<p className='fs-5 d-flex justify-content-evenly'>
				<div>자유 게시판</div><div className='text-decoration-underline'>정보 공유</div><div>홍보 게시판</div><div>동아리</div>
			</p>

			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th style={{ width: "150px" }}>No</th>
						<th>제목</th>
						<th style={{ width: "200px" }}>작성자</th>
						<th style={{ width: "150px" }}>작성시간</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>17715</td>
						<td>ㅈㄱㄴ</td>
						<td>ㅇㅇ</td>
						<td>2025-12-25</td>
					</tr>
					<tr>
						<td>17715</td>
						<td>ㅈㄱㄴ</td>
						<td>ㅇㅇ</td>
						<td>2025-12-25</td>
					</tr>
					<tr>
						<td>17715</td>
						<td>ㅈㄱㄴ</td>
						<td>ㅇㅇ</td>
						<td>2025-12-25</td>
					</tr>
					<tr>
						<td>17715</td>
						<td>ㅈㄱㄴ</td>
						<td>ㅇㅇ</td>
						<td>2025-12-25</td>
					</tr>
					<tr>
						<td>17715</td>
						<td>ㅈㄱㄴ</td>
						<td>ㅇㅇ</td>
						<td>2025-12-25</td>
					</tr>
					<tr>
						<td>17715</td>
						<td>ㅈㄱㄴ</td>
						<td>ㅇㅇ</td>
						<td>2025-12-25</td>
					</tr>
					<tr>
						<td>17715</td>
						<td>ㅈㄱㄴ</td>
						<td>ㅇㅇ</td>
						<td>2025-12-25</td>
					</tr>
					<tr>
						<td>17715</td>
						<td>ㅈㄱㄴ</td>
						<td>ㅇㅇ</td>
						<td>2025-12-25</td>
					</tr>
					<tr>
						<td>17715</td>
						<td>ㅈㄱㄴ</td>
						<td>ㅇㅇ</td>
						<td>2025-12-25</td>
					</tr>
					<tr>
						<td>17715</td>
						<td>ㅈㄱㄴ</td>
						<td>ㅇㅇ</td>
						<td>2025-12-25</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default BoardList