import Navbar from './Navbar';
import Footer from './Footer';
import '../css/Signin.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

function Signin() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onValid = (data) => {
      const {id, pwd} = data;
      axios.post("http://localhost:5000/user/signin", {id, pwd} )
      .then((response) => {
        if(response.data.failure){
            alert("로그인을 실패하였습니다.");
        }
        if (response.data.success) {
            console.log("onvalid");
            
            localStorage.setItem("user", id);
            navigate('/'); 
        }
            
      })
      .catch((error) => {
          console.log(error.data, "onInvalid");
          alert("로그인을 실패하였습니다.");
      });
  };

    return (<div className="signin">
        <Navbar />
        <div style={{height:'200px'}}></div>
        <div class="container">
            <div class="content login bg_none">
                <section class="login_page mo_version">
                    <div class="login_wrap">
                        <div class="login_formcont">
                            <h2 class="h2_tit">로그인</h2>
                            <form onSubmit={handleSubmit(onValid)}>
                                <input
                                type="hidden" id="_targetUrl" name="_targetUrl" value="" />
                                <fieldset>
                                    <div class="area_login">
                                        <div class="in_box">
                                            <span class="form text">
                                                <label for="userid">아이디</label>
                                                <input 
                                                {...register("id", { required: "id error" } )}
                                                type="text" id="id"  name="id" />
                                                {/* type="text" id="id" minlength="6" maxlength="20" name="id" /> */}
                                            </span>
                                        </div>
                                        <div class="in_box">
                                            <span class="form text">
                                                <label for="userpwd">비밀번호</label>
                                                <input 
                                                {...register("pwd", { required: "pwd error" } )}
                                                type="password" id="pwd" name="pwd" />
                                                {/* type="password" id="pwd" minlength="8" name="pwd"
                                                    autocomplete="new-password" /> */}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="area_check">
                                        <span class="form checkbox">
                                            <input type="checkbox" id="saveid" />
                                                <label for="saveid">아이디 저장</label>
                                        </span>
                                        <span class="find_idpw">
                                            <a href="/login/login_find">아이디/비밀번호찾기</a>
                                        </span>
                                    </div>
                                    <div class="btn_wrap">
                                        <span class="btn btn_st02">
                                            <div className='signinBtn_div'>
                                                <button type="submit" class="btn btn-warning">로그인</button>
                                            </div>
                                        </span>
                                    </div>
                                </fieldset>
                            </form>
                                <div>
                                    <input type="hidden" name="_csrf" value="b15c24c5-e1ee-4c51-bccc-b07b1073d601" />
                                </div>
                        </div>
                    </div>

                    <div class="join_select">
                        <span><img src={require('../images/join_temp_01.jpg')} alt="bg" /></span>
                        <div class="join_formcont">
                            <h3 class="h3_tit">한솥 회원이 아니신가요?</h3>
                            <p class="txt">회원이 되시면 한솥 도시락의 다양한 정보와 이벤트를 만나보실 수<br/>  있습니다.</p>
                            <div class="btn_wrap">
                                {/* <span class="btn btn_st02"><a href="/join/join_step1" class="c_02">회원가입</a></span> */}
                                <button class="btn btn-warning">회원가입</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        


        <Footer />
    </div>)
}

export default Signin;