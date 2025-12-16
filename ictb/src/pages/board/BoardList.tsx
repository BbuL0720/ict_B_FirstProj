import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { json } from 'stream/consumers';

const BoardList: React.FC = () => {
	return (
		<div className='container d-flex flex-column justify-content-center' style={{ maxWidth: '900px' }}>
			{/* <h2>#board</h2> */}

			<div className="display-4 mx-auto my-4">subtitle 제목</div>

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
						<td><Link to={`/board/detail/1`}>ㅈㄱㄴ</Link></td>
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
				<tfoot>
					<tr>
						<td colSpan={4} className='text-center'>
							<button type="button" className="btn btn-dark mx-2">◀</button>
							<button type="button" className="btn btn-outline-dark mx-2">1</button>
							<button type="button" className="btn btn-outline-dark mx-2">2</button>
							<button type="button" className="btn btn-outline-dark mx-2">3</button>
							<button type="button" className="btn btn-outline-dark mx-2">4</button>
							<button type="button" className="btn btn-outline-dark mx-2">5</button>
							<button type="button" className="btn btn-dark mx-2">▶</button>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}

export default BoardList