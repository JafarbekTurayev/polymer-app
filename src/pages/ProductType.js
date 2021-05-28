import React from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {addProductType, updateState} from "../redux/action/productTypeAction";

const ProductType = (props) => {

    const productTypeSave = (event, values) => {

        console.log(values)
        addProductType(values)
    }
    return (
        <div>

            {console.log(props)}
            <div className="container">
                <div className="row">
                    <h5>Product Type Page</h5>
                    <div className="col-3 offset-10">
                        <button type="button" className="btn btn-success" onClick={
                            () => props.updateState({modalOpen: !props.modalOpen})
                        }>
                            Add
                        </button>
                    </div>
                </div>


                <div className="row">
                    <table className='table table-striped table-hover mt-3 table-bordered'>
                        <thead>
                        <tr>
                            <th>Nomi (uz)</th>
                            <th>Nomi (ru)</th>
                            <th>Nomi (en)</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <h1>{props.modalOpen}</h1>
                            <h1>{props.test}</h1>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal isOpen={props.modalOpen}>
                <AvForm onValidSubmit={productTypeSave}>
                    <ModalHeader>
                        <h5>Mahsulot tipi qo'shish</h5>
                    </ModalHeader>

                    <ModalBody>
                        <AvField type="text" placeholder="Nomi Uz"/>
                        <AvField type="text" placeholder="Nomi Uz"/>
                        <AvField type="text" placeholder="Nomi Uz"/>

                    </ModalBody>
                </AvForm>
            </Modal>

        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        modalOpen: state.productType.modalOpen
    }
}

export default connect(mapStateToProps, {addProductType, updateState})(ProductType)