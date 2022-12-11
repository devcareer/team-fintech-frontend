import { Route, Routes } from 'react-router-dom';
import {
  Account,
  Beneficiaries,
  CreateNewPassword,
  Help,
  Home,
  PasswordReset,
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
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/account" element={<Account />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
