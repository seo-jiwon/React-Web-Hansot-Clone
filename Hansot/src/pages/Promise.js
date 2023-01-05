import Navbar from './Navbar';
import Footer from './Footer';
import "../css/Brand.css";

function Promise() {
    return (<div>
        <Navbar />
        <div class="promise">
            <img src={require("../images/promise.jpg")} />

                <div class="bs_wrap section_01">
                    <div class="bs_cont mo_tr">
                        <h2 class="h2_tit">
                            <span class="s_block">따끈한 도시락으로</span><br/>
                            <span class="s_block">지역사회에 공헌한다</span>
                        </h2>
                        <div class="bs_txt">
                            <p>
                                <span class="s_block">한솥도시락은 </span>
                                <span class="s_block">좋은 상품을 염가에 판매하면서도 뛰어난 품질과 효율적인 시스템으로 가맹점과 고객 이익을 극대화하고 있습니다.</span>
                                <span>또한 탄탄한 상품기획력, 엄선된 식재료, 조리법과 세팅의 매뉴얼화, 한솥도시락만의 독특한 맛을 내는</span>
                                <span class="s_block">소스류와 양념류의 연구개발, 우수제조업체의 선정과 가격교섭력 등으로 고객들의 입맛에 맞춘 메뉴를 선보이도록 늘 노력하고 있습니다.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="bs_wrap section_02">
                    <div class="bs_cont">
                        {/* <div class="bs_txt_wrap"> */}
                        <div class="container">
                            <h3 class="h3_tit fz_01"><b>한솥의 약속</b></h3><br/>
                            <div class="bs_txt">
                                <ul>
                                    <li class="pr_list01">
                                        <h4 class="fz_03">
                                            <span class="s_block">고객 이익을</span>
                                            <span class="s_block">최우선으로 합니다</span>
                                        </h4>
                                        <p>
                                            한솥은 우리 이익보다 고객 이익을 최우선으로 합니다.
                                            고객이 지불하시는 것보다 월등히 높은 가치와 만족을 드립니다.
                                        </p>
                                    </li>
                                    <li class="pr_list02">
                                        <h4 class="fz_03">
                                            <span class="s_block">엄선된 좋은</span>
                                            <span class="s_block">식재료만 사용합니다</span>
                                        </h4>
                                        <p>
                                            가족과 같은 마음으로 좋은 식재료를 엄선하여
                                            안전하고 건강에 좋고 맛있는 음식을 정성껏 만들어
                                            제공합니다.
                                        </p>
                                    </li>
                                    <li class="pr_list03">
                                        <h4 class="fz_03">
                                            <span class="s_block">우리는 더불어 잘사는</span>
                                            <span class="s_block">사회를 만듭니다</span>
                                        </h4>
                                        <p>
                                            가맹점, 협력업체와 함께 공존공영하며, 지역사회와
                                            함께 상생하고 나눔이 있는 사회 만들기에 앞장섭니다.
                                        </p>
                                    </li>
                                    <li class="pr_list04">
                                        <h4 class="fz_03">
                                            <span class="s_block">건전하고 투명한</span>
                                            <span class="s_block">기업을 추구합니다</span>
                                        </h4>
                                        <p>
                                            법과 윤리도덕을 준수하고 근검절약과 투명경영을 통해
                                            영속적으로 발전 성장할 수 있는 기업을 만듭니다.
                                        </p>
                                    </li>
                                    <li class="last pr_list05">
                                        <h4 class="fz_03">
                                            <span class="s_block">인류 사회 발전에</span>
                                            <span class="s_block">기여합니다</span>
                                        </h4>
                                        <p>
                                            후대를 위해 자원 절약과 환경 보호에 앞장서고 건강한
                                            식생활로 인류 사회 발전에 기여합니다.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </div>)
}

export default Promise;