import Navbar from "./Navbar";
import "../css/Brand.css";
import Footer from "./Footer";

function Esg() {
  return (
    <div>
      <Navbar />
      <div class="brandstory">
        <img src={require("../images/brandstory.jpg")} />
        <div class="bs_wrap section_01">
          <div class="bs_cont mo_tr">
            <h2 class="h2_tit">한솥의 ESG 경영</h2>
            <div class="bs_txt">
                    <p>
                        한솥도시락은 UN에서 2015년 공포한 SDGs(지속가능개발목표)에 부응하여 기업차원에서 실천이 요구되는 ESG 경영에 매진하여 왔습니다.
                    </p>
                    <p>
                        ESG란 환경보호(Environment)·사회공헌(Social)·윤리경영(Governance)의 약자로, 기업이 환경보호에 앞장서며,
                        사회적 약자에 대한 지원과 남녀 평등한 직장문화의 조성 등 사회공헌 활동을 하며,
                        법과 윤리를 철저히 준수하는 윤리경영 등 ESG경영을 실천해야 지속적인 성장이 가능하다는 뜻입니다.
                        유럽연합이나 미국 등에서는 이미 기업을 평가하는데 중요한 기준으로 자리잡고 있으며,
                        현재 전 세계적으로 확산돼 나가고 있는 추세입니다.
                        국내에서는 아직까지 보편화 되어있지 않으나 한솥도시락은 창업 때부터 ESG경영을 실천해오고 있습니다.
                    </p>
                    <br />
                    <img src={require("../images/esg.jpg")} />
                </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Esg;
