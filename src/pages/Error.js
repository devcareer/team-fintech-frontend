import { Link } from 'react-router-dom';
import error from '../assets/images/error.png';
import Button from '../components/General/Button/Button';

const Error = () => {
  return (
    <div className="py-20 pb-72 w-80 mx-auto lg:w-[599px] pb-10  py-0  mt-[89px] mb-[89px] ">
      <div className="w-full">
        <img src={error} />
      </div>
      <p className="text-center text-2xl mt-6 lg:text-4xl">Oops! Page not found</p>
      <p className="text-center text-lg mt-10 lg:text-2xl">
        Looks like you’re lost but don’t worry about it
      </p>
      <div className=" mt-10 lg:w-[500px] mx-auto">
        <Link to="/dashboard">
          <Button>Back to home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
