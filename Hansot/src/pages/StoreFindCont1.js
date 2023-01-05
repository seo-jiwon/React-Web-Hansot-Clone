import '../css/StoreFindCont1.css';
import Map from './Map';

function Signup() {
    return (<div className="sf">
        <div class="container">
            <div className="sf1">
                <h2 class="h2_tit h2_01"><b>주변점포찾기</b></h2><br/><hr/><br/>
                <div className="area_search">
                    <div class="row">
                        <div className="as1">
                            <div class="dropdown">
                                <button type="button" class="btn btn-outline-warning dropdown-toggle" data-toggle="dropdown">
                                    시/도 선택
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">서울</a>
                                    <a class="dropdown-item" href="#">경산시</a>
                                </div>
                            </div>
                        </div>
                        <div className='as2'>
                            <div class="dropdown">
                                <button type="button" class="btn btn-outline-warning dropdown-toggle" data-toggle="dropdown">
                                    구/군 선택
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">서울</a>
                                    <a class="dropdown-item" href="#">경산시</a>
                                </div>
                            </div>
                        </div>
                        <div className="as3">
                            <input type="text" class="form-control" placeholder='검색어 입력'></input>
                        </div>
                        <button type="button" class="btn btn-secondary">매장찾기</button>
                    </div>
                </div>
            </div>
        </div>
        <Map/>
        <div class='container'>
            <div className="sf2">
                <div className="store_info1">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>매장명</th>
                            <th>연락처</th>
                            <th>주소</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>대구가톨릭대점</td>
                            <td>경북 경산시 하양읍 하양로 13-13 대구카톨릭대학교 기숙사식당 1층 107호</td>
                            <td>053-854-1700</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="store_info2">
                    <div class="row">
                        <div className="new_header">
                            <h2>
                                한솥의<br/>
                                <span className="font-bold">신규가맹점</span>을<br/>
                                소개합니다
                            </h2>
                        </div>
                        <div className="new_store1">
                            <p>22.08.20 OPEN</p>
                            <div className="placeBtn">
                                <button type="button" class="btn btn-outline-warning">위치보기</button>
                            </div>
                            <h5 className="font-bold">당진터미널점</h5>

                            <div className="newstore_cont">
                                <h6>
                                충청남도 당진시 밤절로 152(수청동 983) <br/>
                                041-357-2042
                                </h6>
                                <br/>
                                <h6 className="font-bold">OPEN EVENT</h6>
                                <h6>이벤트가 없습니다</h6>
                            </div>
                        </div>
                        <div className="new_store2">
                            <p>22.08.19 OPEN</p>
                            <div className="placeBtn">
                                <button type="button" class="btn btn-outline-warning">위치보기</button>
                            </div>
                            <h5 className="font-bold">양산사송신도시점</h5>

                            <div className="newstore_cont">
                                <h6>
                                경상남도 양산시 동면 내송큰들로 141, 상가동 111호 (사송더샵데시앙 1단지) <br/>
                                055-387-9998
                                </h6>
                                <br/>
                                <h6 className="font-bold">OPEN EVENT</h6>
                                <h6>이벤트가 없습니다</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Signup;