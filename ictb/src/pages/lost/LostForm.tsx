
import React, { useEffect, useRef, useState } from 'react'
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

    const [isActive, setIsActive] = useState(false);
    const [locStyle, setLocStyle] = useState({ display: 'none' })
    const [catStyle, setCatStyle] = useState({ display: 'none' })

    const [locInputValue, setLocInputValue] = useState('');
    const [catInputValue, setCatInputValue] = useState('');

    const [formData, setFormData] = useState<FormData>({
        title: '',
        writer: '',
        contents: '',
        images: []
    });
    const [preview, setPreview] = useState<string[]>([]);

    const locInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLocInputValue(e.target.value)
    }

    const catInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCatInputValue(e.target.value)
    }

    useEffect(() => {
        if (locInputValue === 'locetc') {
            setLocStyle({ display: 'block' });
        } else {
            setLocStyle({ display: 'none' });
        }
        console.log(style)
    }, [locInputValue])

    useEffect(() => {
        if (catInputValue === 'catetc') {
            setCatStyle({ display: 'block' });
        } else {
            setCatStyle({ display: 'none' });
        }
        console.log(style)
    }, [catInputValue])

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

    const test011 = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
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
                                                    <input id="form_lastname" type="text" name="phone" className="form-control" placeholder="연락받을 전화번호를 입력하세요" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>예상 분실 시간 *</label>
                                                    <input id="form_time" type="datetime-local" name="name" onChange={test011} className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>분실품 이름 *</label>
                                                    <input id="form_itemName" type="itemName" name="itemName" className="form-control" placeholder="분실품을 입력하세요" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form_loc">
                                                    <label>예상 분실 장소 *</label>
                                                    <select id="form_need" value={locInputValue} onChange={locInput} name="need" className="form-control">
                                                        <option value="default">—분실 장소 선택—</option>
                                                        <option value="main_hall">본관</option>
                                                        <option value="library">중앙도서관</option>
                                                        <option value="student_union">학생회관</option>
                                                        <option value="engineering">공학관</option>
                                                        <option value="humanities">인문관</option>
                                                        <option value="business">경영관</option>
                                                        <option value="gym">체육관</option>
                                                        <option value="dorm">기숙사</option>
                                                        <option value="locetc">기타(직접입력)</option>
                                                    </select>
                                                    <div className="row">
                                                        <div style={locStyle} className="col-md-12">
                                                            <div className="form-group">
                                                                <label>분실 장소 입력 *</label>
                                                                <input type="text" id="locetcinput" className="form-control"
                                                                    placeholder="분실 장소를 직접 입력하세요" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form_category">
                                                    <label>분실물 종류 *</label>
                                                    <select id="form_need" value={catInputValue} onChange={catInput} name="need" className="form-control">
                                                        <option value="default">—분실물 종류 선택—</option>
                                                        <option value="electronic">전자기기</option>
                                                        <option value="wallet">지갑/현금</option>
                                                        <option value="IDs">카드/신분증</option>
                                                        <option value="books">도서/문구</option>
                                                        <option value="clothing">의류</option>
                                                        <option value="bags">가방</option>
                                                        <option value="accessories">잡화/액세서리</option>
                                                        <option value="beauty">뷰티/화장품</option>
                                                        <option value="household">생활용품</option>
                                                        <option value="catetc">기타(직접입력)</option>
                                                    </select>
                                                    <div className="row">
                                                        <div style={catStyle} className="col-md-12">
                                                            <div className="form-group">
                                                                <label>분실물 종류 입력 *</label>
                                                                <input type="text" id="locetcinput" className="form-control"
                                                                    placeholder="분실물 종류를 직접 입력하세요" />
                                                            </div>
                                                        </div>
                                                    </div>
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
                                                    <div className="row">
                                                        <div className="col-md-6 mt-3" >
                                                            <input type="file" accept='image/*' name='images' id="images"
                                                                onChange={formChange} multiple style={{ display: 'none' }} />
                                                            <label htmlFor="images" className="btn w-100" style={{ backgroundColor: '#b395ceff', color: 'white' }}>
                                                                <i className="bi bi-camera-fill me-2"></i>
                                                                사진 업로드하기
                                                            </label>
                                                        </div>
                                                        <div className="col-md-6 mt-3" >
                                                            <input type="submit" className="btn w-100 btn-success btn-send  pt-2 btn-block" value="작성완료" />
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 mt-3" style={{ width: "100%", minHeight: "200px" }}>
                                                        {preview.length > 0 ? (
                                                            <div className="row g-2">
                                                                {preview.map((p, index) => (
                                                                    <div key={index} className='col-6 d-flex justify-content-center'>
                                                                        <img src={p} alt='' className='img-thumbnail'
                                                                            style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <div className="d-flex flex-column align-items-center">
                                                                <span className="text-muted">선택된 사진이 없습니다.</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
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