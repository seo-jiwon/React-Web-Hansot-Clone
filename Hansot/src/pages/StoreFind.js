import Navbar from './Navbar';
import '../css/StoreFind.css';
import Footer from './Footer';
import StoreFindCont1 from './StoreFindCont1';

function Store_find() {
    return (<div className='storefind'>
        <Navbar />
        <StoreFindCont1 />
        <Footer />
    </div>)
}

export default Store_find;