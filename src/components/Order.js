import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {addOrder, updateState, editOrder, takeProducts, takeOrder} from "../redux/action/orderAction";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation'
import {TOKEN_NAME} from "../tools/tools";


const Order = (props) => {
    useEffect(()=>{
        props.takeProducts();
        props.takeOrder();
    }, [])

    const toggle = () => {
        props.updateState({modalOpen: !props.modalOpen});
    };

    const saveOrder = (event, errors, values) => {
        console.log(values);
        if (props.selectedOrder == null) {

            console.log("add");
            let key=localStorage.getItem(TOKEN_NAME);
            console.log(key);
            props.addOrder(values);
        } else {
            let obj = {
                id: props.selectedOrder.id,
                ...values
            };
            console.log("Edit worked");
            props.editOrder(obj);
        }

    };




    return (
        <div style={{padding: "30px 20px"}}>
            <div className="order-modal-button border d-flex justify-content-between align-items-center px-3">
                <button className="btn btn-dark" type="button" onClick={toggle}>&#x2b;</button>
                <div className="">
                    <p className="mb-0">Buyurtma berish</p>
                </div>
            </div>
            <Modal isOpen={props.modalOpen} toggle={toggle} className="">
                <ModalHeader toggle={toggle}>
                    Buyurtma qo'shish
                </ModalHeader>
                <AvForm onSubmit={saveOrder}>
                    <ModalBody>

                        <AvField name="selectedProductId" defaultValue={props.selectedOrder?.selectedProductId} type="select" value="Mijozlar" label="Mijozlar">
                            {/*{props.products.map((item, index)=>{*/}
                            {/*    return(*/}
                            {/*        <option value={item.id}>*/}
                            {/*            {item}*/}
                            {/*        </option>*/}
                            {/*    )*/}
                            {/*})}*/}
                            <option value="1">
                                Eldor
                            </option>

                        </AvField>



                        <AvField name="productId" defaultValue={props.selectedOrder?.productId} type="select"
                                 value="Mahsulotlar" label="Mahsulotlar">
                            <option>
                                Eldor
                            </option>
                            <option>
                                Ja'farbek
                            </option>
                        </AvField>
                        <AvField name="productPriceId" defaultValue={props.selectedOrder?.productPriceId} type="number"
                                 label="Mahsulot narxi"/>
                        <AvField name="count" defaultValue={props.selectedOrder?.count} type="number" label="Buyurtma miqdori" />

                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-success" type="submit">Save</button>
                        <button className="btn btn-secondary" type="button"
                                onClick={() => props.updateState({modalOpen: false, selectedOrder: {}})}>Cancel
                        </button>
                    </ModalFooter>
                </AvForm>


            </Modal>
            <div className="row">

            </div>

        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        isLoading: state.order.isLoading,
        modalOpen: state.order.modalOpen,
        products: state.order.products

    }
};


export default connect(mapStateToProps, {addOrder, updateState, editOrder, takeProducts, takeOrder})(Order);