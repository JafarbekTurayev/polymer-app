import React from 'react';
import AdminNavbar from "../components/AdminNavbar";
import AdminDashboard from "../components/AdminDashboard";
import AdminCategories from "../components/AdminCategories";
import AdminMarketing from "../components/AdminMarketing";

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
                        {props.history.location.pathname == "/admin/dashboard" ? <AdminDashboard/> : ""}
                        {props.history.location.pathname == "/admin/category" ? <AdminCategories/> : ""}
                        {props.history.location.pathname == "/admin/marketing" ? <AdminMarketing/> : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;