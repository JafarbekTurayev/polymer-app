import React, {useEffect} from 'react';
import {Modal, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from "react-redux";
import {addCategory, deleteCategory, editCategory, getAllCategories, updateState} from "../redux/action/categoryAction";
import {AvField, AvForm} from "availity-reactstrap-validation";

const AdminCategories = (props) => {

    useEffect(() => {
        console.log("Ishla!");
        console.log(props);
        props.getAllCategories();
    }, []);

    const saveCategory = (event, errors, values) => {
        console.log(values);
        if (props.selectedCategory == null) {
            console.log("add");
            props.addCategory(values);
        } else {
            let obj = {
                id: props.selectedCategory.id,
                // nameUz: values.nameUz //2-variant
                ...values
            };
            console.log("edit");
            props.editCategory(obj);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h5>Category Page {console.log(props)}</h5>
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
                            <th>Description (uz)</th>
                            <th>Url</th>
                            <th>Menu</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories?.map(item => (
                            <tr>
                                {/*<td>{item.titleUz}</td>*/}
                                {/*<td>{item.descriptionUz}</td>*/}
                                {/*<td>{item.url}</td>*/}
                                {/*<td>{item.menu.nameUz}</td>*/}
                                <td>
                                    <button className="btn btn-warning"
                                            onClick={() => props.updateState({
                                                selectedCategory: item,
                                                modalOpen: true
                                            })}>EDIT
                                    </button>
                                    <button className="btn btn-danger"
                                            onClick={() => props.deleteCategory(item.id)}>DELETE
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/*<Modal isOpen={props.modalOpen}>*/}
            {/*    <AvForm onSubmit={saveCategory()}>*/}
            {/*        <ModalBody>*/}
            {/*            <AvField name="nameUz" defaultValue={props.selectedCategory.nameUz} type="text"*/}
            {/*                     placeholder="Uzbekcha nomini kirit"/>*/}
            {/*            /!*<AvField name="nameRu" defaultValue={props.selectedCategory.nameRu} type="text"*!/*/}
            {/*            /!*         placeholder="Ruscha nomini kirit"/>*!/*/}
            {/*            /!*<AvField name="nameEn" defaultValue={props.selectedCategory.nameEn} type="text"*!/*/}
            {/*            /!*         placeholder="Inglizcha nomini kirit"/>*!/*/}
            {/*            /!*<AvField name="url" defaultValue={props.selectedCategory.url} type="text" placeholder="url kirit"/>*!/*/}
            {/*            /!*<AvField type="checkbox"*!/*/}
            {/*            /!*         defaultValue={props.selectedMenu.submenu} name="submenu">SubMenu</AvField>*!/*/}

            {/*            /!*<AvField type="select" name="parentId" label="Menular ro'yxati">*!/*/}
            {/*            /!*    <option value="1">Jamiyat Haqida</option>*!/*/}
            {/*            /!*    <option value="2">Struktura</option>*!/*/}
            {/*            /!*    <option value="3">Yangiliklar</option>*!/*/}
            {/*            /!*    <option>Elektron murojaatlar</option>*!/*/}
            {/*            /!*    <option>Interaktiv xizmatlar</option>*!/*/}
            {/*            /!*    <option>Aloqa</option>*!/*/}
            {/*            /!*</AvField>*!/*/}

            {/*            /!*<AvField name="parentId" type="select" label="Parent menu">*!/*/}
            {/*            /!*    /!*<option value="">Submenu tanlang</option>*!/*!/*/}
            {/*            /!*    {props.menus.map((item) => (*!/*/}
            {/*            /!*        <option*!/*/}
            {/*            /!*            value={item.id}>{item.nameUz}</option>*!/*/}
            {/*            /!*    ))}*!/*/}
            {/*            /!*</AvField>*!/*/}
            {/*        </ModalBody>*/}
            {/*        <ModalFooter>*/}
            {/*            <button className="btn btn-success" type="submit">Save</button>*/}
            {/*            <button className="btn btn-danger" type="button" onClick={() =>*/}
            {/*                props.updateState({modalOpen: false, selectedCategory: {}})}>Cancel*/}
            {/*            </button>*/}
            {/*        </ModalFooter>*/}
            {/*    </AvForm>*/}
            {/*</Modal>*/}
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        modalOpen: state.category.modalOpen,
        // categories: state.category.categories,
        // selectedCategory: state.category.selectedCategory
        //statelar qo'shiladi
    }
};
export default connect(mapStateToProps, {
    updateState,
    addCategory,
    deleteCategory,
    getAllCategories,
    editCategory,
})(AdminCategories);