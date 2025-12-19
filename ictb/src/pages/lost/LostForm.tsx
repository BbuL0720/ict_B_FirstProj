
import React, { useState } from 'react'
import style from "./lost.module.css"
import { useNavigate } from 'react-router-dom';

const LostForm: React.FC = () => {

    const [preview, setPreview] = useState<string[]>([]);
    const naviate = useNavigate();
    const lostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target;
        if(files){
            const fileArray = Array.from(files);
            const filePreviews = fileArray.map(file => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                return new Promise<string>((resolve) => {
                    reader.onload = () => {
                        resolve(reader.result as string)
                    }
                });
            });
            Promise.all(filePreviews).then(pUrls => {
                setPreview(pUrls);
            })
        }
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
                                                    <input type="file" accept='image/*' name="lostFile" id="lostFile" 
                                                    onChange={lostChange} multiple/>
                                                    {
                                                        preview.length > 0 && (
                                                            <div className='mb-3'>
                                                                {
                                                                    preview.map((p, index) => (
                                                                        <p key={index}>
                                                                            <img src="{p}" alt="" className='img-thumbnail'
                                                                            style={{ marginRight: '10px', marginBottom:'10px', width: '150px', height: '150px' }} />
                                                                        </p>
                                                                    ))
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 mt-3" >
                                                <input type="submit" className="btn btn-success btn-send  pt-2 btn-block" value="작성완료" />
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