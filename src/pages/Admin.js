import React from 'react';
import AdminNavbar from "../components/AdminNavbar";
// import AdminDashboard from "../components/AdminDashboard";
import AdminCategories from "../components/AdminCategories";
import Order from "../components/Order";
import Prodacts from "./Prodacts";
import ProductType from "./ProductType";
import Dashboard from "./dashboard";

const Admin = (props) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <AdminNavbar>
                        </AdminNavbar>
                    </div>
                    <div className="col-10">
                        {console.log(props)}
                        {props.history.location.pathname == "/admin/dashboard" ? <Dashboard/> : ""}
                        {props.history.location.pathname == "/admin/category" ? <AdminCategories/> : ""}
                        {props.history.location.pathname == "/admin/order" ? <Order/> : ""}
                        {props.history.location.pathname == "/admin/product" ? <Prodacts/> : ""}
                        {props.history.location.pathname == "/admin/productType" ? <ProductType/> : ""}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;