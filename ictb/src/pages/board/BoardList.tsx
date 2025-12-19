import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { json } from 'stream/consumers';
import { allBoardData } from './boardDummy';
import '../../style/styles.css'

const BoardList: React.FC = () => {
	const { kind } = useParams<{ kind: string }>();
	const currentData = kind ? allBoardData[kind] : [];

	return (
		<div className='container d-flex flex-column justify-content-center' style={{ maxWidth: '1000px' }}>
			{/* <h2>#board</h2> */}
			<div className="display-4 mx-auto my-4">{}</div>
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
					{
						currentData.length > 0 ? (
							currentData.map((e) => (
								<tr key={e.num}>
									<td>{e.num}</td>
									<td><Link to={`/board/${kind}/detail/${e.num}`} className='text-decoration-none text-primary'>{e.title}</Link></td>
									<td>{e.writer}</td>
									<td>{e.wtime}</td>
								</tr>
							))) : (
							<tr><td colSpan={4} className="text-center">게시글이 없습니다.</td></tr>
						)
					}
				</tbody>
			</table>
			<div className='d-flex justify-content-between'>
				<div>
					<div className="input-group">
						<button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">제목</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">제목</a></li>
							<li><a className="dropdown-item" href="#">내용</a></li>
							<li><a className="dropdown-item" href="#">제목+내용</a></li>
							<li><a className="dropdown-item" href="#">작성자</a></li>
						</ul>
						<input type="text" className="form-control" aria-label="Text input with dropdown button" />
						<span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></span>
					</div>
				</div>

				<div>
					<Link to={"/board/write"}>
						<button type="button" className="btn btn-primary">
							글작성
						</button>
					</Link>
				</div>
			</div>
			<div className='d-flex justify-content-center my-3'>
				<div>
					<button type="button" className="btn btn-dark mx-0">◀</button>
					<button type="button" className="btn btn-outline-dark mx-1">1</button>
					<button type="button" className="btn btn-outline-dark mx-0">2</button>
					<button type="button" className="btn btn-outline-dark mx-1">3</button>
					<button type="button" className="btn btn-outline-dark mx-0">4</button>
					<button type="button" className="btn btn-outline-dark mx-1">5</button>
					<button type="button" className="btn btn-dark mx-0">▶</button>
				</div>
			</div>
		</div>
	)
}
export default BoardList