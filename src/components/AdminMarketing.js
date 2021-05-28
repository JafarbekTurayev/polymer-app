import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {
    addMarketing,
    deleteMarketing,
    editMarketing,
    getAllMarketings,
    updateState
} from "../redux/action/marketingAction";
import {Label, Modal, ModalBody, ModalFooter} from "reactstrap";
import {AvForm ,AvField} from "availity-reactstrap-validation"
import {TOKEN_NAME} from "../tools/tools";



const AdminMarketing = (props) => {
    useEffect(() => {
        // console.log(props);
        props.getAllMarketings();
    }, []);

    const saveMarketing = ( event, values) => {
        console.log(values);
        if (props.selectedMarketing == null) {
            console.log("add");
            let key = localStorage.getItem(TOKEN_NAME);
            console.log(key);
            props.addMarketing({values, headers: {authorization: key}});
        } else {
            let obj = {
                id: props.selectedMarketing.id,
                ...values
            };
            console.log("edit");
            props.editMarketing(obj);
        }
    };


    return (
        <div>
            <div className="container">
                <div className="row">
                    <h5>Marketing Page</h5>
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
                            <th>Photo</th>
                            <th>Title (uz)</th>
                            <th>Title (rus)</th>
                            <th>Title (en)</th>
                            <th>Description (uz)</th>
                            <th>Description (rus)</th>
                            <th>Description (en)</th>
                            <th>Url</th>
                            <th>Menu</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*{props.marketing?.map(item => (*/}
                        {/*    <tr>*/}
                        {/*        /!*<td>{item.titleUz}</td>*!/*/}
                        {/*        /!*<td>{item.descriptionUz}</td>*!/*/}
                        {/*        /!*<td>{item.url}</td>*!/*/}
                        {/*        /!*<td>{item.menu.nameUz}</td>*!/*/}
                        {/*        <td>*/}
                        {/*            <button className="btn btn-warning"*/}
                        {/*                    onClick={() => props.updateState({*/}
                        {/*                        selectedMarketing: item,*/}
                        {/*                        modalOpen: true*/}
                        {/*                    })}>EDIT*/}
                        {/*            </button>*/}
                        {/*            <button className="btn btn-danger"*/}
                        {/*                    onClick={() => props.deleteMarketing(item.id)}>DELETE*/}
                        {/*            </button>*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}
                        {/*))}*/}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal isOpen={props.modalOpen}>
                <AvForm onValidSubmit={saveMarketing}>
                    <ModalBody>

                        <div className="imgPost">
                            <AvField type='file'  accept=".jpg, .jpeg, .png" name="photosId" />
                        </div>
                        <AvField name="titleUz"  defaultValue={props.selectedMarketing.titleUz} type="text"
                                label="Sarlavha (uzbek)" placeholder="Uzbekcha nomini kirit"/>
                        <AvField name="titleRu" defaultValue={props.selectedMarketing.titleRu} type="text"
                                label="Sarlavha (rus)" placeholder="Ruscha nomini kirit"/>
                        <AvField name="titleEn" defaultValue={props.selectedMarketing.titleEn} type="text"
                                label="Sarlavha (en)" placeholder="Inglizcha nomini kirit"/>
                        <AvField name="textUz" defaultValue={props.selectedMarketing.textUz} type="text"
                               label="Izoh (uzbek)"  placeholder="Uzbekcha nomini kirit"/>
                        <AvField name="textRu" defaultValue={props.selectedMarketing.textRu} type="text"
                               label="Izoh (rus)"  placeholder="Ruscha nomini kirit"/>
                        <AvField name="textEn" defaultValue={props.selectedMarketing.textEn} type="text"
                               label="Izoh (en)"  placeholder="Inglizcha nomini kirit"/>
                        <AvField name="photoUrl" defaultValue={props.selectedMarketing.photoUrl} type="text"
                                 placeholder="url kirit"/>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-success" type="submit">Save</button>
                                <button className="btn btn-danger" type="button" onClick={() =>
                                    props.updateState({modalOpen: false, selectedMarketing: {}})}>Cancel
                                </button>
                    </ModalFooter>
                </AvForm>
            </Modal>
        </div>

    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        modalOpen: state.marketings.modalOpen,
        marketing: state.marketings.marketing,
        selectedMarketing: state.marketings.selectedMarketing,
        //statelar qo'shiladi
    }
};
export default connect(mapStateToProps, {
    updateState,
    addMarketing,
    deleteMarketing,
    getAllMarketings,
    editMarketing,
})(AdminMarketing);