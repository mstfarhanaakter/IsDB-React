import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newsale from './pages/Newsale';
import Home from './components/Home';
import SalesReturn from './pages/SalesReturn';
import Newpurchase from './pages/Newpurchase';
import Managepurchase from './pages/Managepurchase';
import Managesales from './pages/Managesales';
import ManageSalesReturn from './pages/ManageSalesReturn';
import PurchaseRetrun from './pages/PurchaseRetrun';
import ManagePurchaseReturn from './pages/ManagePurchaseReturn';
import StockList from './pages/StockList';
import LowStock from './pages/LowStock';
import ExpireMed from './pages/ExpireMed';
import DamageMed from './pages/DamageMed';
import AddMed from './pages/AddMed';
import MedType from './pages/MedType';
import Revenue from './pages/Revenue';
import Expense from './pages/Expense';
import ProfitReport from './pages/ProfitReport';
import ManageCustomer from './pages/ManageCustomer';
import ManageSuppliers from './pages/ManageSuppliers';
import UserManagement from './pages/UserManagement';
import RolesAndPermission from './pages/RolesAndPermission';
// import Layout from './components/Layout';







const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
   
    {/* <Route path="/" element={<Layout />} ></Route> */}
    
    <Route path="/" element={<Home />} ></Route>
    <Route path="/newsale" element={<Newsale />} ></Route>
    <Route path="/manage-sales" element={<Managesales />} ></Route>
    <Route path="/manage-sales-return" element={<ManageSalesReturn/>} ></Route>
    <Route path="/sales-return" element={<SalesReturn />} ></Route>
    <Route path="/new-purchase" element={<Newpurchase />} ></Route>
    <Route path="/manage-purchase" element={<Managepurchase />} ></Route>
    <Route path="/purchase-return" element={<PurchaseRetrun />} ></Route>
    <Route path="/manage-purchase-return" element={<ManagePurchaseReturn />} ></Route>
    <Route path="/stock-list" element={<StockList />} ></Route>
    <Route path="/low-stock" element={<LowStock />} ></Route>
    <Route path="/expire-med" element={<ExpireMed />} ></Route>
    <Route path="/damage-med" element={<DamageMed />} ></Route>
    <Route path="/add-med" element={<AddMed />} ></Route>
    <Route path="/med-type" element={<MedType />} ></Route>
    <Route path="/revenue" element={<Revenue />} ></Route>
    <Route path="/expense" element={<Expense />} ></Route>
    <Route path="/profit-report" element={<ProfitReport />} ></Route>
    <Route path="/manage-customer" element={<ManageCustomer />} ></Route>
    <Route path="/manage-suppliers" element={<ManageSuppliers />} ></Route>
    <Route path="/user-management" element={<UserManagement />} ></Route>
    <Route path="/roles-permissions" element={<RolesAndPermission />} ></Route>

    
    
    
   
   </Routes>
   
   
   
   </BrowserRouter>
   </>
  );
};

export default App;