import Navbar from './Navbar';
import SignupCont1 from './SignupCont1';
import Footer from './Footer';
import '../css/Signup.css';

function Signup() {
    return (<div className="signup">
        <Navbar />
        <SignupCont1 />
        <Footer />
    </div>)
}

export default Signup;