import '../css/MainCont1.css';

function MainCont1() {
    return (<div>
        <div className="container">
            <div className="main1">
                <div className="main1_cont1">
                    <figure>
                        <img src={require('../images/main1.jpg')} alt="Trulli"/>
                        <figcaption className="main1_figcap">
                            <p>
                            가격 이상의 가치가 담긴 <br/>
                            다양한 메뉴를 확인해 보세요
                            </p>
                            <img className='linkBtn' src={require('../images/btn_link.png')} />
                            <span className="main1_span">
                                한솥메뉴
                            </span>
                        </figcaption>
                    </figure>
                </div>
                <div className="main1_cont2">
                    <figure>
                        <img src={require('../images/main1.jpg')} alt="Trulli"/>
                        <figcaption className="main1_figcap">
                            <p>
                            갓 지은 한끼가 기다리고 있는 <br/>
                            가까운 한솥 매장을 찾아보세요
                            </p>
                            <img className='linkBtn' src={require('../images/btn_link.png')} />
                            <span className="main1_span">
                                주변점포찾기
                            </span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainCont1;