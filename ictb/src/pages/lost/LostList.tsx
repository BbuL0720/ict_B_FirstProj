import React from 'react'
const lostItems = [
    { id: 1, title: '고양이군단', image: 'img/cat-bg.webp', contents: '고양이군단을 잃어버렸어요' },
    { id: 2, title: '박쥐', image: 'img/bat.webp', contents: '박쥐를 잃어버렸어요' },
    { id: 3, title: '고양이', image: 'img/kitt.jpg', contents: '고양이를 잃어버렸어요' },
    { id: 4, title: '강아지', image: 'img/pup.jpg', contents: '강아지를 잃어버렸어요' },
    { id: 5, title: '레드판다', image: 'img/redpan.jpg', contents: '레드판다를 잃어버렸어요' },
    { id: 6, title: '핸드폰', image: '', contents: '핸드폰을 잃어버렸어요' },
    { id: 7, title: '핸드폰1', image: '', contents: '핸드폰을 잃어버렸어요' },
    { id: 8, title: '핸드폰2', image: '', contents: '핸드폰을 잃어버렸어요' }
]

const LostList: React.FC = () => {
    
    return (
        <div  style={{overflow:'scroll', overflowX:'hidden'}}>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            lostItems.map((item) => (
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <div className="bd-placeholder-img card-img-top" >
                                            {
                                                item.image !== '' ? <img src={item.image} width='100%' height='225' /> :
                                                <img src='img/grey.png' width='100%' height='225' />
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
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LostList