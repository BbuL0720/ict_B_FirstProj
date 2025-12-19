import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { allLostData } from './lostDummy';

const LostList: React.FC = () => {
    const { kind } = useParams<{ kind: string }>();
    const currentData = kind ? allLostData[kind] : [];
    const tag = kind && kind === 'lost' ? '잃어버렸어요' : '발견했어요';

    return (
        <div style={{ overflow: 'scroll', overflowX: 'hidden' }}>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            currentData.length > 0 ? (
                                currentData.map((item) => (
                                // useparam 파라미터 받아서 id에쓰기 
                                <Link to={`/lost/${kind}/detail/${item.num}`} className="col" style={{ textDecoration: 'none' }}>
                                    <div className="card shadow-sm">
                                        <div className="bd-placeholder-img card-img-top" >
                                            {
                                                item.image !== '' ? <img src={item.image} width='100%' height='225' /> :
                                                    <img src='/img/nophoto.png' width='100%' height='225' />
                                            }
                                        </div>
                                        <div className="card-body">
                                            <strong>{item.title}</strong>
                                            <p className="card-text">{item.writer}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">{tag}</button>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))) : (
                                <tr><td colSpan={4} className="text-center">게시글이 없습니다.</td></tr>
                            )
                        }
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4"
                        style={{ position: 'relative' }}>
                        <div className="mx-auto" style={{ position: 'absolute', left: '40%' }}>
                            <nav aria-label="...">
                                <ul className="pagination mb-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">이전</a>
                                    </li>
                                    <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">다음</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="d-flex">
                            <input type="text" className="form-control me-2" placeholder="검색어를 입력하세요" style={{ width: '200px' }} />
                            <button type="button" className="btn btn-primary">검색</button>
                        </div>
                        <button type="button" className="btn btn-primary"><Link to={`/lost/${kind}/form`} style={{ textDecoration: 'none', color: 'white' }}>글쓰기</Link></button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LostList