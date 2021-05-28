import React, {useEffect} from 'react';
import imgPilus from '../images/plus.png'
import imgSearch from '../search.png';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {saveFile, updateState} from '../redux/action/productsAction';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {getAllProduct, addProduct, editProduct} from "../redux/action/productsAction";
import {getAllCategories} from "../redux/action/categoryAction";
import {getAllProductTypes} from "../redux/action/productTypeAction";

const Prodacts = (props) => {

    useEffect(() => {
        props.getAllProduct();
        props.getAllCategories();
        props.getAllProductTypes();
    }, [])

    const saveProduct = (event, errors, values) => {
        props.photosId.push(props.selectedImage);

        if (props.selectedProduct == null) {
            console.log("add")
            let obj = {
                photosId: props.photosId,
                ...values
            }
            props.addProduct(obj);
        } else {
            let obj = {
                id: props.selectedProduct.id,
                // nameUz: values.nameUz //2-variant
                ...values
            }
            console.log("edit")
            props.editProduct(obj);
        }
    }

    const savePhoto = (e) => {
        console.log(e.target.files[0]); //bitta butun fayl
        // props.updateState({
        //     photosId: e.target.files[0]
        // })
        props.saveFile(e.target.files[0]);
    }

    return (

        <div>
            <div className="top">
                <div className="topLeft">
                    <button type="button" className="btn" onClick={() => props.updateState({modalOpen: true})}>
                        <div className="d-flex align-items-center dflex">
                            <span className="imgSpan"><img src={imgPilus} className="imgPilus"/></span>
                            <span className="imgSpan2">Maxsulot <br/>qo'shish</span>
                        </div>
                    </button>
                </div>
                <div className="topRight">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Qidirish"/>
                        <div className="input-group-append">
                            <img src={imgSearch} className=""/>
                        </div>
                    </div>
                    <select className="form-control">
                        <option>Barchasi</option>
                        <option>Barchasi</option>
                        <option>Barchasi</option>
                    </select>
                </div>
            </div>

            <div className="mt-4 top2">
                <table className="">
                    <thead>
                    <tr className="font-weight-bold d-flex justify-content-between">
                        <td>Rasmi</td>
                        <td>Nomi</td>
                        <td>Ishlab chiqaruvchi</td>
                        <td>Kategoriyasi</td>
                        <td>Maxsulot tipi</td>
                        <td>Sotuv holati</td>
                        <td>1 kg narxi</td>
                        <td>Qo'shimcha malumotlar</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{props.products.map((item,index)=>{*/}
                    {/*    return <tr>*/}
                    {/*        <td></td>*/}
                    {/*        <td>{item.name}</td>*/}
                    {/*        <td></td>*/}
                    {/*        <td></td>*/}
                    {/*        <td></td>*/}
                    {/*        <td></td>*/}
                    {/*        <td></td>*/}
                    {/*        <td></td>*/}
                    {/*        <td></td>*/}
                    {/*    </tr>*/}
                    {/*})}*/}
                    </tbody>
                </table>
            </div>


            <Modal isOpen={props.modalOpen} toggle={() => props.updateState({modalOpen: false})}>
                <AvForm onSubmit={saveProduct}>
                    <ModalHeader>
                        <h5>Maxsulot qo'shish</h5>
                    </ModalHeader>


                    <ModalBody>
                        <div className="imgPost">
                            {/*<input type="file" onChange={sav}/>*/}
                            {/*<AvField type='file' name="photosId" onChange={props.saveFile} value={}/>*/}
                            <input type="file" id="file" onChange={savePhoto} className="form-control"/>

                        </div>

                        <div className="d-flex justify-content-between">
                            <AvField type="text" name="name" placeholder="Products Name" label="Nomini kiriting"/>
                            <AvField type="text" name="madeIn" placeholder="Products Name" label="Davlat"/>

                        </div>
                        <div className="d-flex justify-content-between">
                            <AvField type="textarea" name="descriptionUz" placeholder="Qisqacha tarif (uz)"
                                     label="Qisqacha tarif (uz)"/>
                            <AvField type="textarea" name="descriptionRu" placeholder="Qisqacha tarif (ru)"
                                     label="Qisqacha tarif (ru)"/>
                            <AvField type="textarea" name="descriptionEn" placeholder="Qisqacha tarif (en)"
                                     label="Qisqacha tarif (en)"/>
                        </div>
                        <div className="d-flex justify-content-between">

                            <AvField type="select" name="categoryId" placeholder="Kategoriyani tanlang"
                                     label="Mahsulot kategoriyasi">
                                {props.categories.map((item) => (
                                    <option
                                        value={item.id}>{item.nameUz}</option>
                                ))}
                            </AvField>
                            {/*<AvField type="select" name="productTypeId" placeholder="Tipi tanlang"*/}
                            {/*         label="Tipi">*/}
                            {/*    {console.log(props.productTypes)}*/}
                            {/*    {props.productTypes.map((item) => (*/}
                            {/*        <option*/}
                            {/*            value={item.id}>{item.nameUz}</option>*/}
                            {/*    ))}*/}
                            {/*</AvField>*/}

                            <AvField type="number" name="productTypeId" placeholder="Tip" value="1"/>

                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <AvField type="number" name="price" placeholder="1 kg narxi" label="1 kg narxi"/>
                            <AvField type="checkbox" name="haveProduct" label="Maxsulot sotuvda bormi?"/>
                        </div>
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-success" onClick={() => {
                            props.updateState({modalOpen: false, selectedProduct: {}})
                        }}>Add Product
                        </button>
                        <button type="button" className="btn btn-danger" onClick={() => {
                            props.updateState({modalOpen: false})
                        }}>Close
                        </button>
                    </ModalFooter>
                </AvForm>
            </Modal>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        modalOpen: state.products.modalOpen,
        categories: state.category.categories,
        productTypes: state.productType.productTypes,
        photosId: state.products.photosId,
        selectedImage: state.products.selectedImage,

    }
}

export default connect(mapStateToProps, {
    updateState,
    getAllProduct,
    getAllCategories,
    getAllProductTypes,
    saveFile,
    addProduct,
    editProduct
})(Prodacts)