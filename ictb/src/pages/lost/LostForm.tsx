
import React, { useState } from 'react'
import style from "./lost.module.css"
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { allLostData } from './lostDummy';

interface FormData {
    title: string;
    writer: string;
    contents: string;
    images: File[];
}

const LostForm: React.FC = () => {
    const { kind, id } = useParams<{ kind: string; id: string }>();
    const post = kind && id ? allLostData[kind]?.find((item) => item.num === Number(id)) : null;

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
        <div className="container">
            <div className=" text-center mt-5 ">
                <h1>분실물 등록</h1>
            </div>
            <div className="row">
                <div className="col-lg-9 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form" role="form">
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>이름 *</label>
                                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="이름을 입력하세요" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>전화번호 *</label>
                                                    <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="연락받을 전화번호를 입력하세요" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>예상 분실 시간 *</label>
                                                    <input id="form_time" type="time" name="name" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form_loc">
                                                    <label>예상 분실 장소 *</label>
                                                    <select id="form_need" name="need" className="form-control">
                                                        <option value="" selected disabled>--분실 장소 선택--</option>
                                                        <option value="main_hall">본관</option>
                                                        <option value="library">중앙도서관</option>
                                                        <option value="student_union">학생회관</option>
                                                        <option value="engineering">공학관</option>
                                                        <option value="humanities">인문관</option>
                                                        <option value="business">경영관</option>
                                                        <option value="gym">체육관</option>
                                                        <option value="dorm">기숙사</option>
                                                        <option value="etc">기타</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>분실품 이름 *</label>
                                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="분실품을 입력하세요" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-contents">
                                                    <label>상세 내용 *</label>
                                                    <textarea id="form_message" name="message" className="form-control" placeholder="상세 내용을 입력하세요" rows={4}
                                                        style={{ width: '100%', height: '250px', resize: 'none' }}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 mt-3">
                                                <div className="form-contents">
                                                    <input type="file" accept='image/*' name='images' id="images"
                                                     onChange={formChange} multiple />
                                                    <div className="mb-3 d-flex flex-column align-items-center" style={{ width: "400px", height: "400px" }}>
                                                    {
                                                        preview.length > 0 && (
                                                            preview.map((p, index) => (
                                                                <img src={p} alt='' className='h-100 w-100 img-thumbnail flex-fill' />
                                                            ))
                                                        )
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 mt-3" >
                                                <Link to={`/lost/${kind}/list`}><input type="submit" className="btn btn-success btn-send  pt-2 btn-block" value="작성완료" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LostForm