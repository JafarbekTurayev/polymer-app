import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {addCategory, deleteCategory, editCategory, getAllCategories, updateState} from "../redux/action/categoryAction";
import {Modal, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation'

const AdminCategories = (props) => {

    useEffect(() => {
        console.log(props)
        props.getAllCategories();
    }, [])

    const saveCategory = (event, errors, values) => {
        console.log(values)
        console.log(props.selectedCategory)
        if (props.selectedCategory == null) {
            console.log(values)
            props.addCategory(values);
        } else {
            let obj = {
                categoryId: props.selectedCategory.id,
                // nameUz: values.nameUz //2-variant
                ...values
            }
            console.log("edit")
            props.editCategory(obj);
        }
    }

    function changeDeleteModal(data) {
        props.updateState({deleteModalOpen: !props.deleteModalOpen})
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h5>Category Page {console.log(props.categories)}</h5>
                    <div className="col-3 offset-10">
                        <button type="button" className="btn btn-success" onClick={() => {
                            props.updateState({modalOpen: true})
                        }}>Add
                        </button>
                    </div>
                </div>


                <div className="row">
                    <table className='table table-striped table-hover mt-3 table-bordered'>
                        <thead>
                        <tr>
                            <th>Title (uz)</th>
                            <th>Title (ru)</th>
                            <th>Title (en)</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories?.map((item, id) => (
                            <tr key={id}>
                                <td>{item.nameUz}</td>
                                <td>{item.nameRu}</td>
                                <td>{item.nameEn}</td>
                                <td>
                                    <button className="btn btn-warning"
                                            onClick={() => props.updateState({
                                                selectedCategory: item,
                                                modalOpen: true
                                            })}>EDIT
                                    </button>
                                    <button className="btn btn-danger"
                                            onClick={() => props.updateState({
                                                selectedIdForDelete: item.id,
                                                deleteModalOpen: true
                                            })}>DELETE
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal isOpen={props.modalOpen}>
                <AvForm onSubmit={saveCategory}>
                    <ModalBody>
                        <AvField name="nameUz" defaultValue={props.selectedCategory.nameUz} type="text"
                                 placeholder="Uzbekcha nomini kirit"/>
                        <AvField name="nameRu" defaultValue={props.selectedCategory.nameRu} type="text"
                                 placeholder="Ruscha nomini kirit"/>
                        <AvField name="nameEn" defaultValue={props.selectedCategory.nameEn} type="text"
                                 placeholder="Inglizcha nomini kirit"/>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-success" type="submit">Save</button>
                        <button className="btn btn-danger" type="button" onClick={() =>
                            props.updateState({modalOpen: false, selectedCategory: {}})}>Cancel
                        </button>
                    </ModalFooter>
                </AvForm>
            </Modal>


            <Modal isOpen={props.deleteModalOpen} toggle={changeDeleteModal}>
                <ModalBody>
                    <h5>Rostdan ham o'chirmoqchimisiz?</h5>
                </ModalBody>
                <ModalFooter>
                    <button type='button' className='btn btn-danger' onClick={() => {
                        props.deleteCategory(props.selectedIdForDelete)
                    }}>Ha
                    </button>
                    <button type='button' className='btn btn-secondary' onClick={changeDeleteModal}>Yo'q
                    </button>
                </ModalFooter>
            </Modal>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        modalOpen: state.category.modalOpen,
        categories: state.category.categories,
        selectedCategory: state.category.selectedCategory,
        deleteModalOpen: state.category.deleteModalOpen,
        selectedIdForDelete: state.category.selectedIdForDelete
        //statelar qo'shiladi
    }
}
export default connect(mapStateToProps, {
    updateState,
    addCategory,
    deleteCategory,
    getAllCategories,
    editCategory,
})(AdminCategories);