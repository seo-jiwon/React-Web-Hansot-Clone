import Navbar from "./Navbar";
import "../css/Brand.css";
import Footer from "./Footer";

function WhyStore() {
  return (
    <div>
      <Navbar />
      <div class="brandstory">
        <img src={require("../images/whystore.jpg")} />
        <div class="bs_wrap section_01">
          <div class="bs_cont mo_tr">
            <h2 class="h2_tit">
              <span class="s_block">10년, 20년</span>
              <br />
              <span class="s_block">대를 잇는 가족 사업</span>
            </h2>
            <div class="hs_txt">
              <p>
                <span class="s_block">
                  창업, 그것은 성공과 돈만을 좇다 보면 성공도 돈도 얻을 수
                  없습니다.
                </span>
                <br />
                <span class="s_block">
                  한솥이 성공한 이유는 본사만의 이익보다 모두의 이익을 언제나
                  우선시 했기 때문입니다.
                </span>
                <span class="s_block">
                  따끈한 한 끼로 사회에 공헌하겠다는 철학을 지켜왔기 때문입니다.
                </span>
                <br />
                <span class="s_block">
                  외식종합기업에 대한 신념과 정직한 경영으로 신뢰받는 외식문화를
                  만들어가고 있기
                </span>
                <br />
                <span class="s_block">
                  때문입니다. 착한 사람과 함께라면 착한 한솥은 언제나 동행할
                  준비가 되어 있습니다.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="bs_wrap section_02">
          <div class="bs_cont">
            <div class="bs_img mo_tr">
              <img src={require("../images/whystore2.jpg")} />
            </div>
            <div class="bs_txt_wrap">
              <h3 class="h3_tit fz_01">
                <b>
                  <span class="s_block">한솥이어야 하는</span>
                </b>
                <br />
                <b>
                  <span class="s_block">세 가지 이유</span>
                </b>
              </h3>
              <div class="hs_txt">
                <p>
                  <br />
                  <b>
                    <strong>트렌드에 영향을 받지 않습니다</strong>
                  </b>
                  <br />
                  <span class="s_block">
                    유독 트렌드에 따라 성패를 달리하는 외식업! 한솥은 유행과
                    상관없이 꾸준히 성과를 내는 스테디셀러 프랜차이즈입니다.
                    가맹점 중 30%가 넘는 가맹점이 10년 이상 점포를 운영하고 있는
                    한솥. 한솥은 가족이 대를 이어 진행할 수 있는 사업입니다.
                  </span>
                </p>
                <p>
                  <b>
                    <strong>고객과 점주님의 이익을 먼저 생각합니다</strong>
                  </b>
                  <br />
                  <span class="s_block">
                    언제나 가맹점주의 이익을 우선으로 생각합니다. 안정적인
                    물류망과 높은 가성비의 식재료를 통해 모든 가맹점주가 만족할
                    수 있도록 노력합니다. 수많은 가맹점주로부터 한솥은 착하다는
                    말을 듣는 이유입니다.
                  </span>
                </p>
                <p>
                  <b>
                    <strong>투명하고 정직합니다</strong>
                  </b>
                  <br />
                  <span class="s_block">
                    한솥은 창업 이래 가맹점과 본사의 법적 문제가 단 1건도
                    없었습니다. 이익을 기준으로 가맹점을 바라보는 본사의 관점이
                    아닌 신뢰를 기준으로 미래를 함께 하는 부모의 마음으로 임하기
                    때문입니다. 그것이 한솥의 가맹점이 꾸준히 늘어나는 이유 중
                    하나입니다.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WhyStore;
