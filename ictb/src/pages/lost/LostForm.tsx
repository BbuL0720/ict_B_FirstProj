
import React from 'react'
import style from "./lost.module.css"


const LostForm: React.FC = () => {
  return (
   <div className={style.container}>
      <h2 className={style.title}>분실물 등록</h2>
       <form className={style.form}></form>
        <form>
          <table className={style.boardTable}>  
            <tbody>
                <tr>  
                <th>제목</th>
                <td>
                  <input type="text" name='title' id='title' className={style.input}/>
                </td>
              </tr>
              <tr>
                <th>작성자</th>
                <td>
                  <input type="text" name='writer' id='writer'/>
                </td>
              </tr>  
          
              <tr>
                <th>분실물 내용</th>
                <td>
                  <textarea name="content" id="content"
                  style={{ width: '90%', height: '200px', padding: '8px' }}
                    />
                </td>
              </tr>
              <tr>
                <th>분실 위치</th>
                <td>
                  <input type="text" name='writer' id='writer'/>
                </td>
              </tr>
              <tr>
                <th>이미지</th>
                <td><input type="file" name='mfile' id='mfile'
                    className={style.input}           />
                </td>
              </tr>  
                 {
                                (<tr>
                                    {/*img src= 이미지경로: 이미지의 바이너리 자체를 
                                    //src에 string 선언해서 이미지가 읽어들이도록 구현 */}

                                    <td colSpan={2} style={{ textAlign: 'center' }}>
                                        <img  alt=''
                                            style={{
                                                width: '150px', height: '150px',
                                                marginRight: '10px', marginBottom: '10px'
                                            }} />
                                    </td>
                                </tr>
                                )}
            </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={2}>
                                <button type='submit' className={style.button}>등록하기</button>
                            </th>
                        </tr>
                    </tfoot>
                </table>
        </form>      
    </div>
  )
}

export default LostForm