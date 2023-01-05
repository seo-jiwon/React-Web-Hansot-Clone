import Navbar from './Navbar';
import Footer from './Footer';
import "../css/Brand.css";
import "../css/Event.css";

function Event() {
    return (<div className='event'>
        <Navbar />
            <div>
                <div class='container'>
                    <div className='event_header'>
                        <h2><b>이 달의 이벤트</b></h2>
                    </div>
                    
                    <div class='row'>
                        <div className='event_cont1'>
                            <figure className="event_fig">
                                <img src={require("../images/event1.jpg")} />
                                <figcaption className='event_figcap'>
                                    <p><b>
                                    [9월 정규메뉴] 2022 레전드의 <br/>
                                    귀환! '치즈 닭갈비 덮밥 2종' </b><br/><br/><br/>
                                    기간 2022-09-01 ~ 2022-10-31
                                    </p>
                                </figcaption>
                            </figure>
                        </div>

                        <div className='event_cont2'>
                            <figure className="event_fig">
                                <img src={require("../images/event2.jpg")} />
                                <figcaption className='event_figcap'>
                                    <p><b>
                                    [9월 수량한정 신메뉴] 아보카도 <br/>
                                    듬뿍 담은 건강한 그릇 '아보카도 <br/>
                                    명란 비빔밥 2종' </b><br/><br/>
                                    기간 2022-09-01 ~ 2022-10-31
                                    </p>
                                </figcaption>
                            </figure>
                        </div>

                        <div className='event_cont2'>
                            <figure className="event_fig">
                                <img src={require("../images/event3.jpg")} />
                                <figcaption className='event_figcap'>
                                    <p><b>
                                    [8월 매일할인] 요일마다 <br/>
                                    인기메뉴 매일 할인 </b><br/><br/><br/>
                                    <p>이벤트가 종료되었습니다.</p>
                                    </p>
                                </figcaption>
                            </figure>
                        </div>

                        <div className='event_cont1'>
                            <figure className="event_fig">
                                <img src={require("../images/event4.jpg")} />
                                <figcaption className='event_figcap'>
                                    <p><b>
                                    [7월 수량한정 신메뉴] 여름철 <br/>
                                    힘나는 보양도시락 '오븐구이 <br/>
                                    오리도시락'</b><br/><br/>
                                    <p>이벤트가 종료되었습니다.</p>
                                    </p>
                                </figcaption>
                            </figure>
                        </div>

                        <div className='event_cont2'>
                            <figure className="event_fig">
                                <img src={require("../images/event5.jpg")} />
                                <figcaption className='event_figcap'>
                                    <p><b>
                                    [계절 한정 메뉴] 국내산 <br/>
                                    열무김치 '열무 야채 비빔밥 2종' </b><br/><br/><br/>
                                    <p>이벤트가 종료되었습니다.</p>
                                    </p>
                                </figcaption>
                            </figure>
                        </div>

                        <div className='event_cont2'>
                            <figure className="event_fig">
                                <img src={require("../images/event6.jpg")} />
                                <figcaption className='event_figcap'>
                                    <p><b>
                                    [6월 수량한정 신메뉴] 3종 치즈 <br/>
                                    듬뿍 '치즈 닭갈비 덮밥' </b><br/><br/><br/>
                                    <p>이벤트가 종료되었습니다.</p>
                                    </p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </div>)
}

export default Event;