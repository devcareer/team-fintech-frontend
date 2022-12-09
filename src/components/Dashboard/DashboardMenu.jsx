import React from 'react';
import Dashboard from '../../assets/icons/category.svg';
import Transactions from '../../assets/icons/activity.svg';
import Accounts from '../../assets/icons/user.svg';
import Beneficiaries from '../../assets/icons/people.svg';
import Settings from '../../assets/icons/setting-2.svg';
import Help from '../../assets/icons/Help.svg';
import Logout from '../../assets/icons/logout.svg';
import PropTypes from 'prop-types';

const DashboardMenu = () => {
  return (
    <div className={`bg-[#ffffff]`}>
      <div className="px-3 pb-20">
        <p className="py-14 text-3xl font-medium">My App</p>
        <ul>
          <li className="flex mb-8 pl-2 py-2 hover:bg-secondary-50 ">
            <img className="w-7 h-7 mr-5" src={Dashboard} />
            <p className="text-xl text-text-2">Dashboard</p>
          </li>
          <li className="flex mb-8 pl-2 py-2 hover:bg-secondary-50 ">
            <img className="w-7 h-7 mr-5" src={Transactions} />
            <p className="text-xl text-text-2">Transactions</p>
          </li>
          <li className="flex mb-8 pl-2 py-2 hover:bg-secondary-50 ">
            <img className="w-7 h-7 mr-5" src={Accounts} />
            <p className="text-xl text-text-2">Accounts</p>
          </li>
          <li className="flex mb-8 pl-2 py-2 hover:bg-secondary-50 ">
            <img className="w-7 h-7 mr-5" src={Beneficiaries} />
            <p className="text-xl text-text-2"> Beneficiaries</p>
          </li>
          <li className="flex mb-8 pl-2 py-2 hover:bg-secondary-50 ">
            <img className="w-7 h-7 mr-5" src={Settings} />
            <p className="text-xl text-text-2">Settings</p>
          </li>
          <li className="border-t-2 border-outline pb-14"></li>
          <li className="flex mb-8 pl-2 py-2 hover:bg-secondary-50 ">
            <img className="w-7 h-7 mr-5" src={Help} />
            <p className="text-xl text-text-2">Help</p>
          </li>
          <li className="flex pl-2 py-2 hover:bg-secondary-50">
            <img className="w-7 h-7 mr-5" src={Logout} />
            <p className="text-xl text-warningstate">Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
DashboardMenu.propTypes = {
  show: PropTypes.bool
};
export default DashboardMenu;
