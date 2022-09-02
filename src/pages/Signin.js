import Header2 from './Header2';
import Footer from './Footer';
import '../css/Signin.css';

function Signin() {
    return (<div className="signin">
        <Header2 />
        <div style={{height:'200px'}}></div>
        <div class="container">
            <div class="content login bg_none">
                <section class="login_page mo_version">
                    <div class="login_wrap">
                        <div class="login_formcont">
                            <h2 class="h2_tit">로그인</h2>
                            <form id="loginForm" name="loginForm" class="login_form" action="/authentication" method="post"><input
                                type="hidden" id="_targetUrl" name="_targetUrl" value="" />
                                <fieldset>
                                    <div class="area_login">
                                        <div class="in_box">
                                            <span class="form text">
                                                <input type="text" id="userid" minlength="6" maxlength="20" name="userid" />
                                                    <label for="userid">아이디</label>
                                            </span>
                                        </div>
                                        <div class="in_box">
                                            <span class="form text">
                                                <input type="password" id="userpwd" minlength="8" name="userpwd"
                                                    autocomplete="new-password" />
                                                    <label for="userpwd">비밀번호</label>
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
                                        <span class="btn btn_st02"><a href="#none" class="c_01 disabled" id="btnlogin"
                                            onclick="checkSubmit();">로그인</a></span>
                                    </div>
                                </fieldset>
                                <div>
                                    <input type="hidden" name="_csrf" value="b15c24c5-e1ee-4c51-bccc-b07b1073d601" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="join_select">
                        <span><img src={require('../images/join_temp_01.jpg')} alt="bg" /></span>
                        <div class="join_formcont">
                            <h3 class="h3_tit">한솥 회원이 아니신가요?</h3>
                            <p class="txt">회원이 되시면 한솥 도시락의 다양한 정보와 이벤트를 만나보실 수 있습니다.</p>
                            <div class="btn_wrap">
                                <span class="btn btn_st02"><a href="/join/join_step1" class="c_02">회원가입</a></span>
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