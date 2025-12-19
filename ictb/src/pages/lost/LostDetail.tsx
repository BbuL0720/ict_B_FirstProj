import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
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

const LostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const item = lostItems.find(it => it.id === Number(id));

    return (
        <div style={{ display: 'flex', justifyContent: 'center', 
        overflow:'scroll', overflowX:'hidden' }}>
            <div className="container mt-5 nanum-gothic-regular col-md-6">
                <div className="row">
                    <div className="w-1200">
                            <header className="mb-4">
                               
                                <h1 className="fw-bolder mb-1">고양이를 잃어버렸어요!</h1>

                                <div className="text-muted fst-italic mb-2">2025년 12월 9일에 작성된 글입니다</div>
                                <p className="fs-6 mb-1"><strong>작성자 |</strong> 테스동생</p>
                                <a className="badge bg-secondary text-decoration-none link-light">잃어버렸어요</a>
                            </header>
                            <hr />
                            <figure className="mb-4 ju"><img className="img-fluid rounded mx-auto d-block" src="img/kitt.jpg" alt="..." /></figure>

                            <section className="mb-5">
                                <p className="fs-5 mb-4">안녕하세요, 저희 집 고양이가 어제(2025년 12월 8일) 오후에 집을 나갔습니다. 찾으신 분께는 소정의 보상도 드립니다.</p>
                                <p className="fs-5 mb-4">특징:</p>
                                <ul>
                                    <li>이름: 몽이</li>
                                    <li>품종: 스코티시 폴드</li>
                                    <li>색상: 회색</li>
                                    <li>나이: 2살</li>
                                    <li>특징: 귀가 접혀있고, 작은 점이 왼쪽 발목에 있습니다.</li>
                                    <li>겁이 많고 사람을 잘 따르며, 배고프면 큰 소리로 울어요.</li>
                                </ul>
                                <p className="fs-5 mb-4">사라진 장소:</p>
                                <ul>
                                    <li>서울시 강남구 삼성동 (이마트 근처)에서 마지막으로 목격되었습니다.</li>
                                    <li>주변에 자주 다니던 공원과 골목길을 확인했으나 아직 발견되지 않았습니다.</li>
                                </ul>
                                <p className="fs-5 mb-4">연락처:</p>
                                <ul>
                                    <li>전화: 010-xxxx-xxxx</li>
                                    <li>이메일: example@email.com</li>
                                </ul>
                                <p className="fs-5 mb-4">어떤 정보라도 찾으셨다면 연락 주시길 바랍니다!</p>
                                <p className="fs-5 mb-4">혹시 근처에서 이 고양이를 본 분이나, 비슷한 고양이를 발견하신 분은 꼭 연락 부탁드립니다.</p>
                                <p className="fs-5 mb-4">감사합니다!</p>
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
                                            고양이를 되찾고 싶다면 100만원을 가져와라
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex">
                                        <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                        <div className="ms-3">
                                            <div className="fw-bold">테스누나</div>
                                            힘내세요!!ㅜㅜ
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