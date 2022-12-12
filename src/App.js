import { Route, Routes } from 'react-router-dom';
import {
  Account,
  Beneficiaries,
  CreateNewPassword,
  Dashboard,
  Help,
  Home,
  PasswordReset,
  SendMoney,
  Settings,
  SignUp,
  Transactions
} from './pages';
function App() {
  return (
    <>
      <Routes>
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/account" element={<Account />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/sendmoney" element={<SendMoney />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
