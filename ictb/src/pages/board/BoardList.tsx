import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { json } from 'stream/consumers';

interface subtitle {
	title:string;
	subTitle:[
		id:number,
		subtitle:string
	]
}

const boardData = [
	{
		num: 1,
		title: "헐.. 내일 수업 휴강이래 대박 ㅋㅋㅋㅋ",
		writer: "강의실귀신",
		wtime: "2025-12-16",
		contents: "방금 교수님 문자 왔는데 감기 때문에 휴강이래! 아침에 힘들게 나왔는데 🐶이득. 다들 공지 확인하고 헛걸음하지 마세요! 근데 그 과제 마감은 그대로겠지...?"
	},
	{
		num: 2,
		title: "점심 혼밥하기 좋은 곳 있나요? (중도 근처)",
		writer: "아싸프로",
		wtime: "2025-12-16",
		contents: "오늘은 동기들 다 바빠서 혼자 밥 먹어야 하는데... 중앙도서관 근처에서 간단하게 혼밥하기 괜찮은 식당 추천 좀 부탁드려요! 너무 왁자지껄한 곳 말고 조용한 곳이면 좋겠어요. 돈가스나 국밥류 환영!"
	},
	{
		num: 3,
		title: "팀플 잠수 탄 조원 어떻게 해야 하나요...",
		writer: "울화통",
		wtime: "2025-12-15",
		contents: "발표가 코앞인데 한 명이 카톡도 안 보고 전화도 안 받아요. 자기 맡은 파트 20%인데 퀄리티도 최악이고... 정말 답이 없네요. 교수님한테 말씀드려야 할까요? 다른 조원들만 죽어나고 있습니다 ㅠㅠ"
	},
	{
		num: 4,
		title: "혹시 내일 교양 '현대 사회와 윤리' 같이 들으시는 분 계신가요?",
		writer: "A학점도전",
		wtime: "2025-12-15",
		contents: "내일 수업 자료 정리하다가 갑자기 궁금해져서요. 혹시 교수님께서 지난주에 추가로 강조하신 부분 있었는지 기억나시는 분 있으신가요? 제가 잠깐 졸았던 것 같아서요... 필기 공유해주시면 감사하겠습니다!"
	},
	{
		num: 5,
		title: "드디어 알바 그만둔다! 꿀팁 공유!",
		writer: "자유영혼",
		wtime: "2025-12-15",
		contents: "편의점 알바 1년 빡세게 하고 오늘 마지막 근무했어요! 정말 해방입니다. 대학생이 하기 제일 좋은 알바는 역시 학교 근처 카페인 것 같아요. 시급도 괜찮고 복지가 좋아서요. 다들 힘든 알바 말고 좋은 곳 구하세요!"
	},
	{
		num: 6,
		title: "이번 학기 등록금 왜 이렇게 오른 것 같지..?",
		writer: "텅장",
		wtime: "2025-12-14",
		contents: "학교 홈페이지에서 다음 학기 등록금 예고 봤는데... 작년보다 2% 정도 더 오른 것 같아요. 다들 체감하시나요? 물가 오르는 건 알겠는데 학생들한테 너무 부담이네요 ㅠㅠ 장학금 더 열심히 타야겠다..."
	},
	{
		num: 7,
		title: "중고 노트북 팔고 싶은데 당근 vs 중고나라?",
		writer: "맥북갈아타",
		wtime: "2025-12-14",
		contents: "쓰던 삼성 노트북 처분하려고 하는데, 당근마켓이 나을까요 아니면 중고나라가 나을까요? 당근은 직거래라 편한데 대학생들은 보통 중고나라 많이 쓰는 것 같아서 고민돼요. 판매 꿀팁 있으면 알려주세요!"
	},
	{
		num: 8,
		title: "학교 셔틀 버스 노선 좀 바꿔줬으면 좋겠다.",
		writer: "통학러",
		wtime: "2025-12-14",
		contents: "아침 셔틀 너무 붐비고 배차 간격도 길어서 맨날 지각할 뻔해요. 학생회에서 설문조사해서 노선 늘려달라고 건의하면 안 될까요? 저 같은 통학러들 많을 것 같은데..."
	},
	{
		num: 9,
		title: "요즘 유행하는 MBTI별 연애 스타일, 다들 공감하세요?",
		writer: "ISFP의하루",
		wtime: "2025-12-13",
		contents: "인스타에서 MBTI 짤 보다가 제 유형(ISFP) 연애 스타일이 '연락 잘 안 됨, 숨 쉬는 것도 귀찮음' 이래서 찔렸어요 ㅋㅋㅋ 다른 분들은 자기 MBTI랑 연애 스타일 맞는 것 같나요? 아닌 분들도 의견 궁금해요!"
	},
	{
		num: 10,
		title: "내일 저녁에 정문 쪽에서 치맥할 사람 손!",
		writer: "불금러",
		wtime: "2025-12-13",
		contents: "내일 금요일! 시험도 다 끝났겠다, 스트레스 풀 겸 정문 근처 '치킨대학교'에서 치맥하실 분 계신가요? 2~3명 정도 모아서 같이 시키면 좋을 것 같아요. 댓글 남겨주세요!"
	}
]

const BoardList: React.FC = () => {

	
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
						boardData.map((e) => (
							<tr>
								<td>{e.num}</td>
								<td><Link to={`/board/detail/${e.num}`}>{e.title}</Link></td>
								<td>{e.writer}</td>
								<td>{e.wtime}</td>
							</tr>
						))
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
					<button type="button" className="btn btn-dark">글 작성</button>
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