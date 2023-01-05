import Navbar from "./Navbar";
import "../css/Brand.css";
import Footer from "./Footer";

function Brandstory() {
  return (
    <div>
      <Navbar />
      <div class="brandstory">
        <img src={require("../images/brandstory.jpg")} />
        <div class="bs_wrap section_01">
          <div class="bs_cont mo_tr">
            <h2 class="h2_tit">착한 솥밥 이야기</h2>
            <div class="bs_txt">
              <p>
                종로에 8평짜리 1호점을 냈을 때의 이야기입니다. 배달 없이
                시작하겠다는 소리에 모두가 손사래를 치며 말렸습니다.
                테이크아웃만으로는 성공하기 힘들다고 했죠. 하지만, 진심이 담긴
                도시락 앞에 사람들은 줄을 서며 기다렸습니다. 더 착한 가격으로,
                더 값진 가치를 담아, 더 많은 사람들에게 돌려드리고 싶다는 그
                진심 말입니다.
              </p>
              <p>
                그 진심은 1993년 1호점을 시작으로 1997년 100호점,
                <span class="s_block">
                  2012년 600호점을 넘어 2020년 730호점까지 이어지고 있습니다.
                  그리고 1억 5천만 그릇의 치킨마요로, 7000만 그릇의
                  동백도시락으로, 200여종의 새로운 메뉴로 6억 3천만개의
                  도시락으로 고객에게 찾아가 따끈한 한끼가 되었습니다.
                </span>
              </p>
              <p>
                그동안 위기가 없었던 것만은 아닙니다. IMF때 물가가 급등하면서
                도시락 가격을 인상해야만 하는 상황에 직면했죠. 하지만 그것은
                우리의 신념과 맞지 않았고 초심을 잃고 싶지 않았습니다. 그 진심에
                모든 가맹점주께서 뜻을 모아 주셨고 지금 당장은 손해를 보더라도
                힘든 고객들을 위해 가격을 유지하기로 결정했습니다. 더 착한
                가격으로,더 많은 사람들에게 돌려드리고 싶다는 초심을 선택한
                것이죠. 이 선택은 옳았습니다.
              </p>
              <p>
                <span class="s_block">IMF가 끝날 무렵, 한솥은 고객에게,</span>
                <span class="s_block">
                  그리고 가맹점주들에게 더 사랑 받는 브랜드가 되어 있었으니까요
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="bs_wrap section_02">
          <div class="bs_cont">
            <div class="bs_img mo_tr">
            <img src={require("../images/brandstory2.jpg")} />
            </div>
            <div class="bs_txt_wrap">
              <h3 class="h3_tit fz_01">
                <span class="s_block">갓 지은 진심 한 끼에는</span>
                <span class="s_block">힘이 있습니다</span>
              </h3>
              <div class="bs_txt">
                <p>
                  <span class="s_block">
                    한솥은 쌀의 맛과 가격을 위하여 정기적으로 전국 무세미 rpc의
                    쌀을 엄격한
                  </span>
                  <br />
                  <span class="s_block">
                    테스트를 통하여 선정하고 있습니다.
                  </span>
                  <br />
                  <span class="s_block">
                    김치는 땅 좋고 물 맑은 해남, 평창, 태백 등에서 재배한 배추에
                    국내산 고춧가루만,
                  </span>
                  <span class="s_block">
                    &nbsp;불고기는 청정 호주산 S등급, A등급의 목심만 사용하여 엄격한
                    품질관리를
                  </span>
                  <br />
                  <span class="s_block">통해 최상의 품질을 유지합니다.</span>
                </p>
                <p>
                  <span class="s_block">
                    또한, 점주교육을 통해 외식업에 대한 철학을 공유하며 따끈한
                    한 끼의 힘에
                  </span>
                  <br />
                  <span class="s_block">대해 늘 고민합니다.</span>
                </p>
                <p>무엇보다도 이 세상 누구보다 도시락을 사랑합니다. </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bs_wrap section_03">
          <div class="bs_cont">
            <div class="bs_img mo_tr">
            <img src={require("../images/brandstory3.jpg")} />
            </div>
            <div class="bs_txt_wrap">
              <h3 class="h3_tit fz_01">
                <span class="s_block">변함없이 한결같아서</span>
                <br />
                <span class="s_block">한솥입니다</span>
              </h3>
              <div class="bs_txt">
                <p>
                  한솥의 한결같음은 도시락에 그치지 않습니다.<br />
                  <span class="s_block">
                    수많은 복지관과 보육원은 물론, 삼성서울병원을 비롯한 4개
                    의료기관을
                  </span>
                  <span class="s_block">
                    &nbsp;후원하고 있으며, 각종 국가행사 및 재해현장에 대한 지원에서
                    대학교
                  </span>
                  <span class="s_block">
                  &nbsp;장학금 기탁까지 사회공헌활동 또한 멈추지 않고 있습니다.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bs_wrap section_04">
          <div class="bs_cont mo_tr">
            <div class="bs_txt_wrap">
              <h3 class="h3_tit fz_01">
                <span class="s_block">착한 솥밥이</span>
                <br />
                <span class="s_block">약속합니다</span>
              </h3>
              <div class="bs_txt">
                <p>
                  <span class="s_block">
                    한솥과 함께 한 수많은 고객과 가맹점주들께서 칭찬과 함께
                    하시는
                  </span>
                  <br />
                  <span class="s_block">
                    말씀이 있습니다. 한솥은 참 착하다는 말입니다.
                  </span>
                </p>
                <p>
                  <span class="s_block">고맙습니다.</span><br />
                  <span class="s_block">
                    한솥 한 그릇으로 우정을 나누고, 사랑을 키울 수 있기를
                  </span>
                  <br />
                  <span class="s_block">
                    바라는 한솥의 마음이 더 따뜻해집니다.
                  </span>
                  <br />
                  <span class="s_block">
                    따끈한 한 끼로 세상의 온기가 되겠다는 초심,
                  </span>
                  <br />
                  <span class="s_block">결코 잃지 않겠습니다.</span>
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

export default Brandstory;
