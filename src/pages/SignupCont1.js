import * as React from 'react';
import '../css/SignupCont1.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupCont1() {

    const navigate = useNavigate();

    const signupSubmit = (e) => {
        e.preventDefault();
        const data = {
          content : e.target.signup.value,
        }

        axios.post("http://localhost:5000/signup/signup", data)
        .then(function(response){
          console.log(response);
          if(response.data.success){
            alert("회원가이 완료되었습니다.");
            navigate('/');
          }
        }).catch(function(error){
          alert("회원가입 실패!" + error);
        });
      }

    return (<div>
        <div className='container'>
            <div className='signup1'>
                <h2 class="h2_tit h2_01">회원가입</h2><br/><hr/><br/>
                <div className="signup1_cont1">
                    <div className="signup1_side">
                        <h4>03<br/>개인정보입력</h4>
                    </div>
                    <form onSubmit={signupSubmit}>
                        <div className='signup1_body'>
                            <h4>| &nbsp; 필수 입력 사항</h4>
                            <p><br/>아이디</p>
                            <input type="text" id="id" placeholder="아이디를 입력해주세요"/>
                            <p><br/>비밀번호</p>
                            <input type="password" id="pwd" placeholder="비밀번호를 입력해주세요"/><br/>
                            <input type="password" className="pwd_check" id="pwd_check" placeholder="비밀번호를 한번 더 입력해주세요"/>
                            <p><br/>이메일</p>
                            <input type="text" id="email" placeholder="이메일 주소를 입력해주세요"/>
                            <p><br/>휴대폰</p>
                            <input type="text" id="phone" placeholder="연락처를 입력해주세요"/>
                            <hr/>
                            <button type="submit" class="btn btn-warning">가입하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}

export default SignupCont1;