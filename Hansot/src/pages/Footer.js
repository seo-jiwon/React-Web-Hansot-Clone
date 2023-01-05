import "../css/Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div class="container">
            <div>
              <div>
                <ul class="f_menu">
                  <li>인재채용 &nbsp;&nbsp;|</li>
                  <li>협력업체등록 &nbsp;&nbsp;|</li>
                  <li>공지사항 &nbsp;&nbsp;|</li>
                  <li>고객 센터 &nbsp;&nbsp;|</li>
                  <li>개인정보처리방침 &nbsp;&nbsp;|</li>
                  <li>이용약관</li>
                </ul>
                <div class="webaward">
                  <img src={require("../images/footer_web_logo.png")} />
                </div>
              </div>
              <hr />
              
              <div class="f_info">
                <span>대표이사 이영덕, 이하림 | </span>
                <span>사업자등록번호 214-81-96569 | </span>
                <span>서울시 강남구 강남대로 318(역삼동) 타워837빌딩 8,9층 | </span>
                <span>T. 02-585-1114 | </span>
                <span>F. 02-598-1116</span>
                <br />
                <span>E. webmaster@hsd.co.kr | </span>
                <span>한솥 도시락 고객센터 02-585-1114 | </span>
                <span>전국창업설명회 02-585-1114 | </span>
                <span>단체주문 1644-3288</span>
                <br />
                <br />
                <p class="copyright">
                  COPYRIGHT<span>&copy;</span>㈜한솥. ALL RIGHTS RESERVED.
                </p>
              </div>

              <div class="sns">
                <a href="https://www.instagram.com/hansot_official/">
                  <img src={require("../images/footer_insta.png")} class="insta" />
                </a>
                <a href="https://www.facebook.com/hansotOfficial/?ref=ts&fref=ts">
                  <img src={require("../images/footer_face.png")} class="face" />
                </a>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default Footer;
