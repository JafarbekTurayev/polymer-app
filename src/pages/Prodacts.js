import React, {useEffect} from 'react';
import imgPilus from '../images/plus.png'
import imgSearch from '../search.png';
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {updateState} from '../redux/action/productsAction';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {getAllProduct,addProduct,editProduct} from "../redux/action/productsAction";

const Prodacts = (props) => {

    useEffect(() => {
     props.getAllProduct();
    },[])

    const saveProduct = (event, errors, values) => {
        console.log(values)
        if (props.selectedProduct == null) {
            console.log("add")
            props.addProduct(values);
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


    return (

     <div>
         <div className="top">
             <div className="topLeft">
                 <button type="button" className="btn" onClick={()=>props.updateState({modalOpen: true})}>
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



         <Modal isOpen={props.modalOpen} toggle={()=>props.updateState({modalOpen: false})}>
             <AvForm onSubmit={saveProduct}>
             <ModalHeader>
                <h5>Maxsulot qo'shish</h5>
             </ModalHeader>

             <ModalBody>
                 <div className="imgPost">
                     <AvField type='file' name="photosId" />
                 </div>

               <div className="d-flex justify-content-between">
                   <AvField type="text" name="name" placeholder="Products Name" label="Nomini kiriting"/>
                   <AvField type="text" name="madeIn" placeholder="Products Name" label="Davlat"/>

               </div>
               <div className="d-flex justify-content-between">
                   <AvField type="textarea" name="descriptionUZ" placeholder="Qisqacha tarif (uz)" label="Qisqacha tarif (uz)" />
                   <AvField type="textarea" name="descriptionRu" placeholder="Qisqacha tarif (ru)" label="Qisqacha tarif (ru)"/>
                   <AvField type="textarea" name="descriptionEn" placeholder="Qisqacha tarif (en)" label="Qisqacha tarif (en)"/>
               </div>
            <div className="d-flex justify-content-between">
                <AvField type="number" name="categoryId" placeholder="Kategoriyani tanlang" label="Mahsulot kategoriyasi"/>
                <AvField type="number" name="productTypeId" placeholder="Maxsulot tipini tanlang" label="Maxsulot tipi"/>
            </div>
                 <div className="d-flex justify-content-between align-items-center">
                     <AvField type="number" name="price" placeholder="1 kg narxi" label="1 kg narxi"/>
                     <AvField type="checkbox" name="haveProduct" label="Maxsulot sotuvda bormi?" />
                 </div>
              </ModalBody>
             <ModalFooter className="d-flex justify-content-between">
                 <button type="submit" className="btn btn-success" onClick={()=>{
                     props.updateState({modalOpen: false, selectedProduct: {}})
                 }}>Add Product</button>
                 <button type="button" className="btn btn-danger" onClick={()=>{props.updateState({modalOpen: false})}}>Close</button>
             </ModalFooter>
             </AvForm>
         </Modal>
     </div>

    );
};

const mapStateToProps = (state) =>{
    return{
        modalOpen:state.products.modalOpen
    }
}

export default connect(mapStateToProps,{updateState,getAllProduct,addProduct,editProduct})(Prodacts)