import { Button, colors } from '@mui/material';
import React, { useState } from 'react'
// import style from "./board.module.css";  

interface FormData {
	title: string;
	writer: string;
	contents: string;
	images: File[];
}

const BoardForm: React.FC = () => {

	const [formData, setFormData] = useState<FormData>({
		title: '',
		writer: '',
		contents: '',
		images: []
	});
	const [preview, setPreview] = useState<string[]>([]);

	const formChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, files } = e.target;
		if (name === 'images' && files) {
			const fileArray = Array.from(files);
			const filePreviews = fileArray.map(file => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				return new Promise<string>((resolve) => {
					reader.onload = () => { resolve(reader.result as string) }
				});
			});
			Promise.all(filePreviews).then(pUrls => { setPreview(pUrls); })
			setFormData({ ...formData, images: fileArray })
		} else { setFormData({ ...formData, [name]: value }); }
	}

	return (
		<div className="w-100 d-flex justify-content-center align-items-center">
			<div className="d-flex flex-column align-items-center mt-4 border border-5" style={{ width: "900px", height: "600px" }}>
				<h2 className='my-4'>게시글 작성</h2>
				<form className='d-flex w-100 flex-fill'>
					<div className='w-50 d-flex flex-column justify-content-center align-items-center'>
						<div className='card d-flex align-items-center'>
							<div className="mb-3 d-flex flex-column align-items-center" style={{ width: "400px", height: "400px" }}>
								{
									preview.length > 0 && (
										preview.map((p, index) => (
											<img src={p} alt='' className='h-100 w-100 img-thumbnail flex-fill' />
										))
									)
								}
							</div>
							<input className='mb-4' type="file" name='images' placeholder="이미지 URL 입력" onChange={formChange} />
						</div>
					</div>
					<div className='d-flex justify-content-center align-items-center flex-fill'>
						<div className='d-flex flex-column flex-fill p-3'>
							<div className='d-flex w-100'>
								<input type="text" id='title' name='title' onChange={formChange} className="form-control w-50 mt-2" placeholder="작성자" />
							</div>
							<input type='text' id='contents' name='contents' onChange={formChange} className="form-control mt-2" placeholder="제목" />
							<textarea id='writer' name='writer' className="form-control mt-2" rows={10} placeholder="내용" />
							<div>
								<button className="btn btn-primary mt-2"  type="submit" >등록</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default BoardForm