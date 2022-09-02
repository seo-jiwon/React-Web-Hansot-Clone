import '../css/MainCont2.css';

function MainCont2() {
    return (<div>
        <div className="container">
            <div className="main2">
                <div className="main2_cont1">
                    <figure className="main2_1_fig">
                        <p>
                            가맹점주에게도<br/>
                            든든한 한솥입니다
                        </p>
                        <div></div>
                        <figcaption className='main2_1_figcap'>
                            <p>
                            점주님들의 꿈을 실현시켜 드리기 위해 <br/>
                            가맹점주와 성공까지 동행하는 한솥! <br/>
                            상담부터 개업까지 모든 희로애락을 함께 합니다.
                            </p>
                        </figcaption>
                    </figure>
                </div>

                <div className="main2_cont2">
                    <figure className="main2_fig">
                        <img src={require('../images/main2_1.jpg')} alt="Trulli"/>
                        <figcaption className="main2_figcap">
                            <p>
                            한솥은 언제나 고객과 점주님들의 <br/>
                            이익을 먼저 생각합니다
                            </p>
                            <img className='linkBtn' src={require('../images/btn_link.png')} />
                            <span className="main2_span">
                                Why 한솥 가맹점
                            </span>
                        </figcaption>
                    </figure>
                </div>

                <div className="main2_cont3">
                    <figure className="main2_fig">
                        <img src={require('../images/main2_2.jpg')} alt="Trulli"/>
                        <figcaption className="main2_figcap">
                            <p>
                            한솥과 함께하는 가맹점주들의 <br/>
                            성공 스토리입니다
                            </p>
                            <img className='linkBtn' src={require('../images/btn_link.png')} />
                            <span className="main2_span">
                                성공수기
                            </span>
                        </figcaption>
                    </figure>
                </div>

            </div>
        </div>
    </div>
    )
}

export default MainCont2;