import React from 'react'
import { Link } from 'react-router-dom'
const lostItems = [
    { id: 1, title: '고양이군단', image: '/img/cat-bg.webp', contents: '고양이군단을 잃어버렸어요' },
    { id: 2, title: '박쥐', image: '/img/bat.webp', contents: '박쥐를 잃어버렸어요' },
    { id: 3, title: '고양이', image: '/img/kitt.jpg', contents: '고양이를 잃어버렸어요' },
    { id: 4, title: '강아지', image: '/img/pup.jpg', contents: '강아지를 잃어버렸어요' },
    { id: 5, title: '레드판다', image: '/img/redpan.jpg', contents: '레드판다를 잃어버렸어요' },
    { id: 6, title: '핸드폰', image: '', contents: '핸드폰을 잃어버렸어요' },
]

const LostList: React.FC = () => {

    return (
        <div style={{ overflow: 'scroll', overflowX: 'hidden' }}>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            lostItems.map((item) => (
                                // useparam 파라미터 받아서 id에쓰기 
                                <Link to={`/lost/detail/${item.id}`} className="col" style={{textDecoration:'none'}}>
                                    <div className="card shadow-sm">
                                        <div className="bd-placeholder-img card-img-top" >
                                            {
                                                item.image !== '' ? <img src={item.image} width='100%' height='225' /> :
                                                    <img src='/img/nophoto.png' width='100%' height='225' />
                                            }
                                        </div>
                                        <div className="card-body">
                                            <strong>{item.title}</strong>
                                            <p className="card-text">{item.contents}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">발견했어요</button>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
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
                                            <button type="button" className="btn btn-primary"><Link to={`/lost/form`} style={{ textDecoration: 'none', color: 'white' }}>글쓰기</Link></button>
                    
                                        </div>
                </div>
            </div>
        </div>
    )
}

export default LostList