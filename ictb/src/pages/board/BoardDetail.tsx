import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BoardComments from './BoardComments'
import { allBoardData } from './boardDummy';
import { useParams, Link } from 'react-router-dom';

const BoardDetail: React.FC = () => {
	const { kind, id } = useParams<{ kind: string; id: string }>();
	const post = kind && id ? allBoardData[kind]?.find((item) => item.num === Number(id)) : null;
	if (!post) {
        return (
            <div className="container mt-5 text-center">
                <h3>게시글을 찾을 수 없습니다.</h3>
                <Link to={`/board/${kind}/list`} className="btn btn-primary mt-3">목록으로 돌아가기</Link>
            </div>
        );
    }

	return (
		<div className="w-100 d-flex justify-content-center align-items-center">
			<div className="d-flex mt-4" style={{ width: "1400px", height: "800px" }}>
				<div className="card w-100 h-100">
					<div className="card-header d-flex justify-content-between align-items-end">
						<div><h5 className="m-0 card-title d-inline">{post.title} <span className='fs-6'>[8]</span></h5></div>
						<div className="d-flex flex-shrink-0"><span className='d-inline-block mx-2'>{post.writer}</span><span>{post.wtime}</span></div>
					</div>
					<div className="card-body overflow-auto">
						<article className="card-text d-flex flex-column mx-4 mt-3">
							<div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                                {post.contents}
                            </div>					
						</article>
					</div>
					<div className="d-flex justify-content-between my-3 mx-4">
						<div className="input-group" style={{width:"50%"}}>
							<span className="input-group-text">비밀번호</span>
							<input type="text" className="form-control" placeholder="Password" />
							<a href="#" className="btn btn-primary">완료</a>
						</div>
						<div className="d-flex">
							<a href="#" className="btn btn-primary">수정</a>
							<a href="#" className="btn btn-primary ms-1">삭제</a>
							<Link to={`/board/${kind}/list`} className="btn btn-primary ms-1">목록</Link>
						</div>
					</div>
				</div>

				<div className="card w-75 h-100 justify-content-between">
					<BoardComments />
					<div className="my-3 mx-4">
						<div className="input-group d-flex h-100">
							<span className="input-group-text">댓글</span>
							<input type="text" className="form-control" placeholder="Username" />
							<a href="#" className="btn btn-primary">완료</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BoardDetail