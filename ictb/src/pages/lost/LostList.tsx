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
                    <div className='d-flex justify-content-between mt-3'>
                        <div>
                            <div className="input-group">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">제목</button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" type="button">제목</a></li>
                                    <li><a className="dropdown-item" type="button">내용</a></li>
                                    <li><a className="dropdown-item" type="button">제목+내용</a></li>
                                    <li><a className="dropdown-item" type="button">작성자</a></li>
                                </ul>
                                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">위치</button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" type="button">본관</a></li>
                                    <li><a className="dropdown-item" type="button">중앙도서관</a></li>
                                    <li><a className="dropdown-item" type="button">학생회관</a></li>
                                    <li><a className="dropdown-item" type="button">공학관</a></li>
                                    <li><a className="dropdown-item" type="button">인문관</a></li>
                                    <li><a className="dropdown-item" type="button">경영관</a></li>
                                    <li><a className="dropdown-item" type="button">체육관</a></li>
                                    <li><a className="dropdown-item" type="button">기숙사</a></li>
                                </ul>
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">품목</button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" type="button">전자기기</a></li>
                                    <li><a className="dropdown-item" type="button">지갑/현금</a></li>
                                    <li><a className="dropdown-item" type="button">카드/신분증</a></li>
                                    <li><a className="dropdown-item" type="button">도서/문구</a></li>
                                    <li><a className="dropdown-item" type="button">의류</a></li>
                                    <li><a className="dropdown-item" type="button">가방</a></li>
                                    <li><a className="dropdown-item" type="button">잡화/액세서리</a></li>
                                    <li><a className="dropdown-item" type="button">뷰티/화장품</a></li>
                                    <li><a className="dropdown-item" type="button">생활용품</a></li>
                                </ul>
                                <span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></span>
                            </div>
                        </div>
                        <div>
                            <Link to={`/lost/${kind}/form`}>
                                <button type="button" className="btn btn-outline-secondary">글작성</button>
                            </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center my-3'>
                        <div>
                            <button type="button" className="btn btn-outline-dark mx-0">◀</button>
                            <button type="button" className="btn btn-outline-secondary mx-1">1</button>
                            <button type="button" className="btn btn-outline-secondary mx-0">2</button>
                            <button type="button" className="btn btn-outline-secondary mx-1">3</button>
                            <button type="button" className="btn btn-outline-secondary mx-0">4</button>
                            <button type="button" className="btn btn-outline-secondary mx-1">5</button>
                            <button type="button" className="btn btn-outline-dark mx-0">▶</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LostList