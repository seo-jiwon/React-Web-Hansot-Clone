import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';

function useFetch(url) {

    const [data, setData] = useState([]);

    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
    }

    useEffect(() => {
        fetchUrl();
    }, []);
    return data;
}

function ListItem({ m_id, l_category, s_category, m_name, m_price }) {

    return (

        <table class="menulist">
            <thead>
                <th class="LargeCategory">{l_category}</th>
                <tr class="SmallCategory">{s_category}</tr>
                <br/>
            </thead>
            <tbody>
                <tr>
                    <td><img src={require('../images/menu16.jpg')} /></td>
                </tr>
                <tr>
                    <td id="menu_name">{m_name}</td>
                </tr>
                <tr>
                    <td id="menu_price">{m_price}원</td>
                </tr>
            </tbody>
        </table>

        // <div class="menulist">
        //         <div class="LargeCategory">{l_category}</div>
        //         <b class="SmallCategory">{s_category}</b><br /><br />
        //         <tr>
        //             <td>
        //                 <img src={require('../images/menu16.jpg')} /><br />
        //                 <div id="menu_name">{m_name}</div>
        //                 <div id="menu_price">{m_price}원</div>
        //             </td>
        //         </tr>
        //         <br />
        // </div>
    )
}

function MenuCont() {

    const data = useFetch('http://localhost:5000/hansot/menu');

    return (<div>
        <div className='container'>
            <div className='hansot_menu'>
                <h2><b>한솥 메뉴</b></h2>
                <button type="button" class="btn btn-outline-warning float-right">추천 키워드</button>
                <button type="button" class="btn btn-outline-warning float-right">전체 메뉴</button>
            </div>

            <div class="aside">
                <div class="list-group" id="list">
                    <a href="#none" class="list-group-item list-group-item-action">전체보기</a>
                    <div>
                        <a href="#none" class="list-group-item list-group-item-action dropdown-toggle" data-toggle="dropdown">신메뉴/행사</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">신메뉴</a>
                        </div>
                    </div>
                    <div>
                        <a href="#none" class="list-group-item list-group-item-action dropdown-toggle" data-toggle="dropdown">프리미엄·고메이</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">프리미엄</a>
                        </div>
                    </div>
                    <div>
                        <a href="#none" class="list-group-item list-group-item-action dropdown-toggle" data-toggle="dropdown">사각도시락</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">고기고기시리즈</a>
                            <a class="dropdown-item" href="#">모둠시리즈</a>
                            <a class="dropdown-item" href="#">정식시리즈</a>
                        </div>
                    </div>
                    <div>
                        <a href="#none" class="list-group-item list-group-item-action dropdown-toggle" data-toggle="dropdown">보울도시락</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">마요</a>
                            <a class="dropdown-item" href="#">카레</a>
                            <a class="dropdown-item" href="#">볶음밥</a>
                        </div>
                    </div>
                    <div>
                        <a href="#none" class="list-group-item list-group-item-action dropdown-toggle" data-toggle="dropdown">실속반찬/사이드</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">실속반찬</a>
                            <a class="dropdown-item" href="#">스낵 시리즈</a>
                            <a class="dropdown-item" href="#">간식안주 시리즈</a>
                        </div>
                    </div>
                </div>


                <img src={require('../images/pet.jpg')} id="pet_img" />

                <div class="keyword">
                    <b>당신을 위한 <b style={{ color: "#f2c000" }}>#추천 키워드</b></b><br />
                    <p style={{ color: "#909090" }}>#한솥의 베스트 셀러 #따끈한 집밥이 생각날 때 #화끈하게 스트레스 날리기
                        #건강을 위해 #반찬만 필요할 때 #추천 단체도시락
                    </p>
                </div>
            </div>

            <div className="menu_info">
                {data.map(
                        ({ m_id, l_category, s_category, m_name, m_price }) => (
                            <ListItem
                                m_id={m_id}
                                l_category={l_category}
                                s_category={s_category}
                                m_name={m_name}
                                m_price={m_price}
                                key={m_id}
                            />
                        )
                    )}
            </div>

                            
        </div>
    </div>)
}

export default MenuCont;