// // slick & carousel
// // https://react-slick.neostack.com/docs/example
// yarn add react-slick
// yarn add slick-carousel
// yarn add --dev @types/react-slick


//import { waitFor } from '@testing-library/dom'
import { Repeat } from '@mui/icons-material'
import { url } from 'inspector'
import React from 'react'
import { Link } from 'react-router-dom';

//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

//import { Link } from 'react-router-dom';
//import Slider from 'react-slick';


//conts/Hone.tsx
const Home: React.FC = () => {
    const dummyData = [
        { id: 1, title: "헐.. 내일 수업 휴강이래 대박 ㅋㅋㅋㅋ", date: "2025.12.27" },
        { id: 2, title: "점심 혼밥하기 좋은 곳 있나요? (중도 근처)", date: "2025.12.26" },
        { id: 3, title: "팀플 잠수 탄 조원 어떻게 해야 하나요", date: "2025.12.25" },
        { id: 4, title: "혹시 내일 교양 '현대 사회와 윤리' 같이 들으시는 분 계신가요?", date: "2025.12.16" }
    ];

    const lostDummyData = [
        { id: 1, title: "아이폰16 분실했어요", date: "2025.12.27" },
        { id: 2, title: "갤럭시 잃어버렸어요", date: "2025.12.26" },
        { id: 3, title: "카페에서 맥북 보신 분", date: "2025.11.25" },
        { id: 4, title: "키링 발견하신 분 ㅜㅜ", date: "2025.11.25" }
    ];

    const settings = {
        dots: true, //하단 점
        fade: true,// 페이드효과
        waitForAnimate: false,
        infinite: true, // 무한 반복
        speed: 500,
        slidesToShow: 1, //한번에 보여줄 슬라이드 수
        slidesToScroll: 1, //한번에 넘길때 몇개씩 넘길수
        autoplay: true, // 자동 시작
        autoplaySpeed: 3000, //넘기는 속도
        arrows: true //화살표 좌우
    }
    //더미 데이터 추후에 연습문제 *****
    const homeData = [
        // { id: 1, img: "/img/bat.webp", text: "안녕하세요 ICTPassword!" },
        // { id: 2, img: "/img/pup.jpg", text: "Spring & React 전문가 과정" },
        // { id: 3, img: "/img/kitt.jpg", text: "함께 성장!!" }
    ]

    return (
        <main style={{ backgroundImage: 'url(./img/Artboard1.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>



            <section className="text-center container" style={{ width: '100%', height: '600px', padding: '20px' }} >
                <div style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>

                    <div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                        <div className="mx-auto">
                            <h1 className="fw-bolder" style={{ color: '#55439A', fontSize: '80px' }} >UNI-BASE</h1>
                            <h3 className="fw-bold" style={{ color: '#A03DA5' }}>Minimal Academic Life Platform</h3>
                            <p className="lead text-muted"></p>
                            <p className="lead text-muted" style={{ fontStyle: 'italic', color: '#55439A' }}>
                                Designed to reduce noise in university life <br />
                                - 대학생활 가장 필요한 것만 남기다.</p>


                        </div>
                        <img src="img/img1.png" style={{ padding: '50px' }} />
                    </div>

                </div>
            </section>


            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


                        <div className="col">
                            <div style={{ backgroundColor: '#5D4C9F', borderRadius: '15px', color: 'white' }}>
                                <div>
                                    <Link to={'/board/free/list'} style={{ textDecoration: 'none' }}>
                                        <div className="todo-title text-center" style={{ padding: '8px', color: 'white' }}>게시판</div>
                                    </Link>
                                </div>
                                <div className="board-widget border rounded p-3" style={{ maxWidth: '500px' }}>
                                    <ul className="list-unstyled mb-0">
                                        {dummyData.map((post) => (
                                            <Link to={`/board/free/detail/${post.id}`} style={{ textDecoration: 'none' }}>
                                                <li className="d-flex justify-content-between align-items-center mb-2" >
                                                    <span className="post-title" style={{
                                                        flex: 1,
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        marginRight: '15px',
                                                        color: 'white'
                                                    }}>
                                                        {post.title}
                                                    </span>
                                                    <small style={{ flexShrink: 0, color: 'white' }}>
                                                        {post.date}
                                                    </small>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col" >
                            <div style={{ backgroundColor: '#6C5CA7', borderRadius: '15px', color: 'white' }}>
                                <div className="">
                                    <Link to={'/todo'} style={{ color: 'white', textDecoration: 'none' }}>
                                        <div className="todo-title text-center" style={{
                                            padding: '8px',
                                            borderBottom: '1px soide white'
                                        }}>Todo List</div>
                                    </Link>
                                </div>
                                <ul className="todo-list border rounded p-3">
                                    <li className="todo-item">
                                        <input type="checkbox" defaultChecked />
                                        <span className="checked">Lunch</span>
                                        <div className="actions">
                                            <i className="edit">✎</i>
                                            <i className="delete">🗑</i>
                                        </div>
                                    </li>

                                    <li className="todo-item">
                                        <input type="checkbox" />
                                        <span>Dinner</span>
                                        <div className="actions">
                                            <i className="edit">✎</i>
                                            <i className="delete">🗑</i>
                                        </div>
                                    </li>

                                    <li className="todo-item">
                                        <input type="checkbox" />
                                        <span>Snacks</span>
                                        <div className="actions">
                                            <i className="edit">✎</i>
                                            <i className="delete">🗑</i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div style={{ backgroundColor: '#55439A', borderRadius: '15px', color: 'white' }}>
                                <div className="">
                                    <Link to={'/lost/lost/list'} style={{ color: 'white', textDecoration: 'none' }}>
                                        <div className="todo-title text-center" style={{ padding: '8px' }}>분실물</div>
                                    </Link>
                                </div>
                                <div className="board-widget border rounded p-3" style={{ maxWidth: '500px' }}>
                                    <ul className="list-unstyled mb-0">
                                        {lostDummyData.map((post) => (
                                            <Link to={`/lost/detail/${post.id}`} style={{ textDecoration: 'none' }}>
                                                <li key={post.id} className="d-flex justify-content-between align-items-center mb-2" >
                                                    <span className="post-title" style={{
                                                        flex: 1,
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        marginRight: '15px',
                                                        color: 'white'
                                                    }}>

                                                        {post.title}
                                                    </span>
                                                    <small style={{ flexShrink: 0, color: 'white' }}>
                                                        {post.date}
                                                    </small>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Home;
