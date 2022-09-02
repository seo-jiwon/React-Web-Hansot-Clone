import '../css/Header.css';

function Header() {
    return (<div>
        <div className="nav_div">
            <div class="container">
                <div className="signBar">
                    <nav class="h-25 navbar navbar-expand-sm navbar-dark justify-content-end">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                            <a class="nav-link" href="#"><h6>로그인   &nbsp;&nbsp;&nbsp;&nbsp; |</h6></a>
                            </li>
                            <li class="nav-item active">
                            <a class="nav-link" href="/signup"><h6>회원가입   &nbsp;&nbsp;&nbsp;&nbsp; |</h6></a>
                            </li>
                            <li class="nav-item active">
                            <a class="nav-link" href="#"><h6><img src={require('../images/header_sns.png')} alt="sns" className="header_sns"/></h6></a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <nav class="navbar navbar-expand-md bg-light navbar-light">
                    <a class="navbar-brand" href="#">
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
        


            {/* <li class="nav-item">
                <a class="nav-link" href="#">BRAND</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">ESG</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">MENU</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">STORE</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">EVENT</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">FRANCHISE</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">HANSOT</a>
            </li> */}

        <div className="car_div" id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
                <li data-target="#demo" data-slide-to="4"></li>
                <li data-target="#demo" data-slide-to="5"></li>
                <li data-target="#demo" data-slide-to="6"></li>
            </ul>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require('../images/top1.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('../images/top2.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('../images/top3.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('../images/top4.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('../images/top5.jpg')} alt="" />
                </div>

            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>

        </div>
{/* 
        <div className="div1">
첫번째 DIV 영역
</div>
<div className="div2">
두번째 DIV 영역
</div> */}
    </div>
    )
}

export default Header;