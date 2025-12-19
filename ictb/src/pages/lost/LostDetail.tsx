import React from 'react'
import { useParams } from 'react-router-dom'
import { allLostData } from './lostDummy';
import { Link } from 'react-router-dom';

const LostDetail: React.FC = () => {
    const { kind, id } = useParams<{ kind: string; id: string }>();
    const post = kind && id ? allLostData[kind]?.find((item) => item.num === Number(id)) : null;
    if (!post) {
        return (
            <div className="container mt-5 text-center">
                <h3>게시글을 찾을 수 없습니다.</h3>
                <Link to={`/lost/${kind}/list`} className="btn btn-primary mt-3">목록으로 돌아가기</Link>
            </div>
        );
    }
    const tag = kind && kind === 'lost' ? '잃어버렸어요' : '발견했어요';

    return (
        <div style={{ display: 'flex', justifyContent: 'center', 
        overflow:'scroll', overflowX:'hidden' }}>
            <div className="container mt-5 nanum-gothic-regular col-md-6">
                <div className="row">
                    <div className="w-1200">
                            <header className="mb-4">

                                <h1 className="fw-bolder mb-1">{post.title}</h1>

                                <div className="text-muted fst-italic mb-2">{post.wtime}에 작성된 글입니다</div>
                                <p className="fs-6 mb-1"><strong>작성자 |</strong> {post.writer}</p>
                                <a className="badge bg-secondary text-decoration-none link-light">{tag}</a>
                            </header>
                            <hr />
                            <figure className="mb-4 ju">
                                {
                                    post.image !== '' ? 
                                    <img className="img-fluid rounded mx-auto d-block" src={post.image} alt="..." /> : ''
                                }
                            </figure>

                            <section className="mb-5">
                                <p className="fs-5 mb-4">{post.contents}</p>
                            </section>
                        
                        <hr/>
                        <section className="mb-5">
                            <div className="card bg-light">
                                <div className="card-body">

                                    <form className="mb-4"><textarea className="form-control" rows={3} placeholder="Join the discussion and leave a comment!"></textarea></form>

                                    <div className="d-flex mb-4">

                                        <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                        <div className="ms-3">
                                            <div className="fw-bold">테스형</div>
                                            {post.title} 되찾고 싶다면 100만원을 가져와라
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex">
                                        <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                        <div className="ms-3">
                                            <div className="fw-bold">테스누나</div>
                                            힘내세요!!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LostDetail