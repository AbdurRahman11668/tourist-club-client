
import { Link, NavLink } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';

const ErrorPage = () => {
    return (
        <div>
      <Navbar></Navbar>
      <NavLink to="/" className='text-[#df3437]'>GoCar</NavLink> | 
      <div className="text-center w-full mb-10">
        <img
          className="w-[700px] mx-auto "
          src="https://i.ibb.co/7j8Lm4j/404.gif"
          alt=""
        />
        <Link to="/" className="btn text-2xl font-bold">
          Go Back to Home
        </Link>
      </div>
      <Footer></Footer>
    </div>
    );
};

export default ErrorPage;