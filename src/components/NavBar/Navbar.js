import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Transactions from '../../assets/icons/activity.svg';
import Dashboard from '../../assets/icons/category.svg';
import Help from '../../assets/icons/Help.svg';
import Logout from '../../assets/icons/logout.svg';
import Beneficiaries from '../../assets/icons/people.svg';
import Settings from '../../assets/icons/setting-2.svg';
import Accounts from '../../assets/icons/user.svg';
import close from '../../assets/icons/x.svg';

const NavBar = ({ onClick, state }) => {
  return (
    <main className="">
      <div className="">
        <div>
          <section className=" text-right mt-8 lg:hidden">
            <button onClick={onClick}>
              <img src={close} />
            </button>
          </section>
          <p className="py-14 text-3xl font-medium hidden lg:block">My App</p>
          <ul className="flex flex-col gap-4">
            <Link to="/dashboard" onClick={onClick}>
              <li className="flex pl-2 py-2 hover:bg-secondary-50 ">
                <img className="w-7 h-7 mr-5" src={Dashboard} />
                <p className="text-xl text-text-2">Dashboard</p>
              </li>
            </Link>
            <Link to="/transactions" onClick={onClick}>
              <li className="flex  pl-2 py-2 hover:bg-secondary-50 ">
                <img className="w-7 h-7 mr-5" src={Transactions} />
                <p className="text-xl text-text-2">Transactions</p>
              </li>
            </Link>
            <Link to="/account" onClick={onClick}>
              <li className="flex  pl-2 py-2 hover:bg-secondary-50 ">
                <img className="w-7 h-7 mr-5" src={Accounts} />
                <p className="text-xl text-text-2">Accounts</p>
              </li>
            </Link>
            <Link to="/beneficiaries " onClick={onClick}>
              <li className="flex  pl-2 py-2 hover:bg-secondary-50 ">
                <img className="w-7 h-7 mr-5" src={Beneficiaries} />
                <p className="text-xl text-text-2"> Beneficiaries</p>
              </li>
            </Link>
            <Link to="/settings " onClick={onClick}>
              <li className="flex  pl-2 py-2 hover:bg-secondary-50 ">
                <img className="w-7 h-7 mr-5" src={Settings} />
                <p className="text-xl text-text-2">Settings</p>
              </li>
            </Link>
            <Link to="/help" onClick={onClick}>
              <li className="border-t-2 border-outline pb-14"></li>
              <li className="flex  pl-2 py-2 hover:bg-secondary-50 ">
                <img className="w-7 h-7 mr-5" src={Help} />
                <p className="text-xl text-text-2">Help</p>
              </li>
            </Link>
            <Link to="/signin" onClick={onClick}>
              <li className="flex pl-2 py-2 hover:bg-secondary-50">
                <img className="w-7 h-7 mr-5" src={Logout} />
                <p className="text-xl text-warningstate">Logout</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {!state && (
        <div
          onClick={onClick}
          className=" bg-dark z-10 fixed top-0 right-0  h-full  opacity-30 md:hidden lg:hidden "></div>
      )}
    </main>
  );
};
NavBar.propTypes = {
  state: PropTypes.bool,
  onClick: PropTypes.func
};
export default NavBar;
