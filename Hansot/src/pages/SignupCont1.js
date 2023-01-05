import * as React from 'react';
import '../css/SignupCont1.css'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function SignupCont1() {

  const { register, handleSubmit, getValues, formState: {errors} } = useForm();
  const navigate = useNavigate();

  const onValid = (data) => {
    const { id, pwd, email, phone } = data;
    axios
      .post("http://localhost:5000/user/signup", { id, pwd, email, phone, })
      .then((response) => {
        console.log(response.data, "onvalid");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.data, "onInvalid");
      });
  };

    return (<div>
        <div className='container'>
            <div className='signup1'>
                <h2 class="h2_tit h2_01">회원가입</h2><br/><hr/><br/>
                <div className="signup1_cont1">
                    <div className="signup1_side">
                        <h4>03<br/>개인정보입력</h4>
                    </div>
                    <form onSubmit={handleSubmit(onValid)}>
                        <div className='signup1_body'>
                            <h4>| &nbsp; 필수 입력 사항</h4>

                            <p><br/>아이디</p>
                            <input 
                            {...register("id", { required: "id error" } )}
                            type="text" id="id" name="id" placeholder="아이디를 입력해주세요"/>

                            <p><br/>비밀번호</p>
                            <input 
                            {...register("pwd", { required: "pwd error",
                              required: "비밀번호를 입력해 주세요.",
                              minLength: {
                                value: 8,
                                message: "비밀번호는 8자 이상이어야 합니다.",
                             }, })}
                            type="password" id="pwd" name="pwd" placeholder="비밀번호를 입력해주세요"/><br/>
                            {errors.pwd && errors.pwd.message && (
                              <div className="error">{errors.pwd.message}</div>
                            )}

                            <input
                            {...register("pwd_check", {
                              required: "비밀번호 확인",
                              validate: {
                                matchesPreviousPassword: (value) => {
                                  const { pwd } = getValues();
                                  return pwd === value || "비밀번호가 일치 하지않습니다.";
                                }
                              }
                            })}
                            type="password" className="pwd_check" id="pwd_check" placeholder="비밀번호를 한번 더 입력해주세요"/>
                            
                            {errors.pwd_check && (
                              <div className="error">{errors.pwd_check.message}</div>
                            )}


                            <p><br/>이메일</p>
                            <input 
                            {...register("email", { required: "email error", pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "유효하지 않은 이메일 형식입니다.",
                            }, 
                          })}
                            type="text" id="email" name="email" placeholder="이메일 주소를 입력해주세요"/>
                            {errors.email && errors.email.message && (
                              <div className="error">{errors.email.message}</div>
                            )}

                            <p><br/>휴대폰</p>
                            <input 
                            {...register("phone", { required: "phone error", pattern: {
                              value: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
                              message: "유효하지 않은 연락처 형식입니다. (숫자만 입력해주세요)",
                            },
                          })}
                            type="text" id="phone" name="phone" placeholder="연락처를 입력해주세요"/>
                            {errors.phone && errors.phone.message && (
                              <div className="error">{errors.phone.message}</div>
                            )}
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