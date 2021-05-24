import React from 'react';
import {Link} from "react-router-dom";

import {Modal, ModalBody, ModalFooter} from "reactstrap";
import {connect} from "react-redux";
import {TOKEN_NAME} from "../tools/tools";
import {updateState} from "../redux/reducer/appReducer";


const AdminNavbar = (props) => {

    const changeModal = () => {
        props.updateState({modalOpen: true})
    };
    return (
        <div className='admin-layout'>
            <div className="admin-navbar"></div>

            <div className="admin-content">
                <div className="admin-content-left bg-info">

                    <div className="d-flex align-items-center">
                        <div className='user-image'>
                            <span className='icon icon-user'></span>
                        </div>
                        <div>
                            <h5 className='mb-0'>Super Admin</h5>
                            <p className='mb-0'>Administrator</p>
                        </div>
                    </div>

                    <ul className='nav flex-column mt-4'>
                        <li className='nav-item'><Link className='nav-link text-white'
                                                       to="/admin/dashboard">Dashboard</Link>
                        </li>
                        <li className='nav-item'><Link className='nav-link text-white'
                                                       to="/admin/order">Buyurtmalar</Link></li>
                        <li className='nav-item'><Link className='nav-link text-white'
                                                       to="/admin/category">Kategoriyalar</Link></li>
                        <li className='nav-item'><Link className='nav-link text-white'
                                                       to="/admin/product">Mahsulotlar</Link></li>
                        <li className='nav-item'><Link className='nav-link text-white' to="/admin/productType">Mahsulot
                            tipi</Link></li>
                        <li className='nav-item'><Link className='nav-link text-white' to="/admin/sale">Aksiya</Link>
                        </li>
                        <li className='nav-item'><Link className='nav-link text-white'
                                                       to="/admin/marketing">Reklama</Link></li>
                        <li className='nav-item'><Link className='nav-link text-white'
                                                       to="/admin/exploiter">Foydalanuvchilar</Link></li>
                        <li className='nav-item mt-4'><span className='nav-link text-white'
                                                            onClick={changeModal}>Chiqish</span></li>
                    </ul>

                    <Modal isOpen={props.modalOpen} toggle={changeModal}>
                        <ModalBody>
                            <h5>Rostdan ham chiqmoqchimisiz? Buncha tez bizni tark etyapsiz?</h5>
                        </ModalBody>
                        <ModalFooter>
                            <Link type='button' className='btn btn-danger'
                                  onClick={() => localStorage.removeItem(TOKEN_NAME)} to='/'>Ha</Link>
                            <button type='button' className='btn btn-success' onClick={changeModal}>Yo'q</button>
                        </ModalFooter>
                    </Modal>

                </div>
                {/*<div className="admin-content-right">*/}
                {/*    {props.children}*/}
                {/*</div>*/}
            </div>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        // modalOpen: state.app.modalOpen,
        //statelar qo'shiladi
    }
}
export default connect(mapStateToProps, {
    updateState,
})(AdminNavbar);