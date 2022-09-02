import '../css/Header.css';

function Header() {
    return (<div>
        <div className="nav_div">
            <div class="container">
                <div className="signBar">
                    <nav class="h-25 navbar navbar-expand-sm navbar-light justify-content-end">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                            <a class="nav-link" href="/signin"><h6>로그인   &nbsp;&nbsp;&nbsp;&nbsp; |</h6></a>
                            </li>
                            <li class="nav-item active">
                            <a class="nav-link" href="/signup"><h6>회원가입   &nbsp;&nbsp;&nbsp;&nbsp; |</h6></a>
                            </li>
                            <li class="nav-item active">
                            <a class="nav-link" href="#"><h6><img src={require('../images/header_sns_black.png')} alt="sns" className="header_sns"/></h6></a>
                            </li>
                        </ul>
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
                                    <a class="dropdown-item" href="#">브랜드 스토리</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    ESG
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">ESG 경영이란?</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    MENU
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">전체메뉴</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    STORE
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">주변점포찾기</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    EVENT
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">이 달의 이벤트</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    FRANCHISE
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Why 한솥 가맹점</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    HANSOT
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">한솥의 약속</a>
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