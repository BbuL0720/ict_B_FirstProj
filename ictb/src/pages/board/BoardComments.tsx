import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CommData } from './CommData'

// interface Comment {
// 	user: string;
// 	content: string;
// 	commDate: string;
// 	reip: string;
// 	sons: number;
// 	depth: number
// }

const BoardComments: React.FC = () => {
	return (
		<div className="overflow-auto">
			<ol className="list-group list-group-flush">
				<li className="list-group-item">
					<div className="d-flex justify-content-between">
						<div className="text-break ms-2 me-auto">
							<div className="fw-bold">
								닉네임 <span className="badge bg-primary rounded-pill">대댓 수</span>
							</div>
							qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
						</div>
						<div className='ms-4 d-flex flex-column align-items-end justify-content-between'>
							<span>2025-12-25</span>
							<span>192.168.XXX.XXX</span>
						</div>
					</div>
				</li>
				<li className="list-group-item">
					<div className="d-flex justify-content-between">
						<div className="text-break ms-2 me-auto">
							<div className="fw-bold">
								닉네임 <span className="badge bg-primary rounded-pill">대댓 수</span>
							</div>
							qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
						</div>
						<div className='ms-4 d-flex flex-column align-items-end justify-content-between'>
							<span>2025-12-25</span>
							<span>192.168.XXX.XXX</span>
						</div>
					</div>
					<ol className="list-group list-unstyled d-flex justify-content-center ms-5 mt-3">
						<li className="list-group-item">
							<div className="d-flex justify-content-between">
								<div className="text-break ms-2 me-auto">
									<div className="fw-bold">
										닉네임 <span className="badge bg-primary rounded-pill">대댓 수</span>
									</div>
									qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
								</div>
								<div className='ms-4 d-flex flex-column align-items-end justify-content-between'>
									<span>2025-12-25</span>
									<span>192.168.XXX.XXX</span>
								</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="d-flex justify-content-between">
								<div className="text-break ms-2 me-auto">
									<div className="fw-bold">
										닉네임 <span className="badge bg-primary rounded-pill">대댓 수</span>
									</div>
									qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
								</div>
								<div className='ms-4 d-flex flex-column align-items-end justify-content-between'>
									<span>2025-12-25</span>
									<span>192.168.XXX.XXX</span>
								</div>
							</div>
							<ol className="ms-5 list-group list-unstyled d-flex justify-content-center mt-3">
								<li className="list-group-item">
									<div className="d-flex justify-content-between">
										<div className="text-break ms-2 me-auto">
											<div className="fw-bold">
												닉네임
											</div>
											qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
										</div>
										<div className='ms-4 d-flex flex-column align-items-end justify-content-between'>
											<span>2025-12-25</span>
											<span>192.168.XXX.XXX</span>
										</div>
									</div>
								</li>
								<li className="list-group-item">
									<div className="d-flex justify-content-between">
										<div className="text-break ms-2 me-auto">
											<div className="fw-bold">
												닉네임
											</div>
											qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
										</div>
										<div className='ms-4 d-flex flex-column align-items-end justify-content-between'>
											<span>2025-12-25</span>
											<span>192.168.XXX.XXX</span>
										</div>
									</div>
								</li>
							</ol>
						</li>
						<li className="list-group-item">
							<div className="d-flex justify-content-between">
								<div className="text-break ms-2 me-auto">
									<div className="fw-bold">
										닉네임 <span className="badge bg-primary rounded-pill">대댓 수</span>
									</div>
									qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
								</div>
								<div className='ms-4 d-flex flex-column align-items-end justify-content-between'>
									<span>2025-12-25</span>
									<span>192.168.XXX.XXX</span>
								</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="d-flex justify-content-between">
								<div className="text-break ms-2 me-auto">
									<div className="fw-bold">
										닉네임 <span className="badge bg-primary rounded-pill">대댓 수</span>
									</div>
									qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
								</div>
								<div className='ms-4 d-flex flex-column align-items-end justify-content-between'>
									<span>2025-12-25</span>
									<span>192.168.XXX.XXX</span>
								</div>
							</div>
						</li>
					</ol>
				</li>
			</ol>
		</div>
	)
}

export default BoardComments