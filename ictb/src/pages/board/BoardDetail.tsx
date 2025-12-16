import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BoardComments from './BoardComments'
//style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}
//<ul style={{ listStyleType: "none", border: '1px solid black' }}>

// interface Comment {
// 	user: string;
// 	content: string;
// 	commDate: string;
// 	reip: string;
// 	sons: number;
// 	depth: number
// }

const BoardDetail: React.FC = () => {

	return (
		<div className="w-100 d-flex justify-content-center align-items-center">
			<div className="d-flex mt-4" style={{ width: "1400px", height: "800px" }}>
				<div className="card w-100 h-100">
					<div className="card-header d-flex justify-content-between align-items-end">
						<div><h5 className="m-0 card-title d-inline">장문의 제목 장문의 제목 장문의 제목 장문의 제목 장문의 제목 장문의 제목 장문의 제목 장문의 제목 장문의 제목 장문의 제목 <span className='fs-6'>[8]</span></h5></div>
						<div className="d-flex flex-shrink-0"><span className='d-inline-block mx-2'>ㅇㅇ</span><span>2025-12-25</span></div>
					</div>
					<div className="card-body overflow-auto">
						<article className="card-text d-flex flex-column mx-4 mt-3">
							<img src='/img/kitt.jpg' className="img-fluid" />
							Sunny, yesterday my life was filled with rain.Sunny, you smiled at me and really eased the pain.The dark days are gone, and the bright days are here,
							My Sunny one shines so sincere.Sunny one so true, I love you.Sunny, thank you for the sunshine bouquet.Sunny, thank you for the love you brought my way.
							You gave to me your all and all.Now I feel ten feet tall.Sunny one so true, I love you.Sunny, thank you for the truth you let me see.Sunny,thank you for the facts from A to Z.
							My life was torn like a windblown sand,And the rock was formed when you held my hand.Sunny one so true, I love you.SunnySunny, thank you for the smile upon your face.
							Sunny, thank you for the gleam that shows its grace.You're my spark of nature's fire,ou're my sweet complete desire.Sunny one so true, I love you.Sunny, yesterday my life was filled with rain.
							Sunny, you smiled at me and really eased the pain.The dark days are gone, and the bright days are here,My Sunny one shines so sincere.FSunny one so true, I love you.Sunny, yesterday my life was filled with rain.Sunny, you smiled at me and really eased the pain.The dark days are gone, and the bright days are here,
							My Sunny one shines so sincere.Sunny one so true, I love you.Sunny, thank you for the sunshine bouquet.Sunny, thank you for the love you brought my way.
							You gave to me your all and all.Now I feel ten feet tall.Sunny one so true, I love you.Sunny, thank you for the truth you let me see.Sunny,thank you for the facts from A to Z.
							My life was torn like a windblown sand,And the rock was formed when you held my hand.Sunny one so true, I love you.SunnySunny, thank you for the smile upon your face.
							Sunny, thank you for the gleam that shows its grace.You're my spark of nature's fire,ou're my sweet complete desire.Sunny one so true, I love you.Sunny, yesterday my life was filled with rain.
							Sunny, you smiled at me and really eased the pain.The dark days are gone, and the bright days are here,My Sunny one shines so sincere.FSunny one so true, I love you.Sunny, yesterday my life was filled with rain.Sunny, you smiled at me and really eased the pain.The dark days are gone, and the bright days are here,
							My Sunny one shines so sincere.Sunny one so true, I love you.Sunny, thank you for the sunshine bouquet.Sunny, thank you for the love you brought my way.
							You gave to me your all and all.Now I feel ten feet tall.Sunny one so true, I love you.Sunny, thank you for the truth you let me see.Sunny,thank you for the facts from A to Z.
							My life was torn like a windblown sand,And the rock was formed when you held my hand.Sunny one so true, I love you.SunnySunny, thank you for the smile upon your face.
							Sunny, thank you for the gleam that shows its grace.You're my spark of nature's fire,ou're my sweet complete desire.Sunny one so true, I love you.Sunny, yesterday my life was filled with rain.
							Sunny, you smiled at me and really eased the pain.The dark days are gone, and the bright days are here,My Sunny one shines so sincere.FSunny one so true, I love you.
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
							<a href="#" className="btn btn-primary ms-1">목록</a>
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