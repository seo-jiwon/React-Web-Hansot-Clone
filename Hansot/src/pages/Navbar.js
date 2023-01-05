import * as React from 'react';
import '../css/Navbar.css';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const isLoggedIn = localStorage.getItem("user");


    return (<div>
        <div className="nav_div">
            <div class="container">
                <div className="signBar">
                    <nav class="h-25 navbar navbar-expand-sm navbar-light justify-content-end">
                    {isLoggedIn ? (
                        <ul class="navbar-nav">
                            <li>
                                <p id="username">{window.localStorage.getItem("user")}님 환영합니다 ! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/"
                                    onClick={() => {
                                    localStorage.removeItem("user");
                                    }}>
                                    <div id="logout">
                                        <h6>로그아웃   &nbsp;&nbsp;&nbsp;&nbsp; |</h6>
                                    </div>
                                    
                                </a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    <div id="sns">
                                        <h6><img src={require('../images/header_sns_black.png')} alt="sns" className="header_sns"/></h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        ) : (
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/signin">
                                        <div id="signin">
                                            <h6>로그인   &nbsp;&nbsp;&nbsp;&nbsp; |</h6>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/signup">
                                        <div id="signup">
                                            <h6>회원가입   &nbsp;&nbsp;&nbsp;&nbsp; |</h6>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#"><img src={require('../images/header_sns_black.png')} alt="sns" className="header_sns"/></a>
                                </li>
                            </ul>
                        )}
                    </nav>
                </div>

                <nav class="navbar navbar-expand-md bg-light navbar-light">
                    <a class="navbar-brand" href="/">
                        <img src={require('../images/logo.png')} alt="Chicago" />
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    BRAND
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/brandstory">브랜드 스토리</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    ESG
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/esg">ESG 경영이란?</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    MENU
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/menu">전체메뉴</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    STORE
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/store_find">주변점포찾기</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    EVENT
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/event">이 달의 이벤트</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    FRANCHISE
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/whystore">Why 한솥 가맹점</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    HANSOT
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="/promise">한솥의 약속</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    )
}

export default Header;