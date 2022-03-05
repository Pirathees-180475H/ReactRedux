import React,{useState} from 'react';
import {Button,Modal,ModalFooter,ModalHeader,ModalBody } from 'reactstrap';


function AddConformationModel({data,validity,addHandler}){

    const[model,setModal]= useState(false);

    const toggle=()=>{ setModal(!model);}

    const submit=()=>{
        addHandler();
    }
  return (
    <div>
        {validity ?
        <div>
        <Button color="Primary" onClick={toggle}>ADD</Button>
        <Modal isOpen={model} toggle={toggle}>
          <ModalHeader toggle={toggle}>Are U Sure?</ModalHeader>
            <ModalBody>
                {data}
            </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>submit} >ADD</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

         </div>: <Button color="primary" disabled>A</Button>}

      </div>
  )
}

export default AddConformationModel;