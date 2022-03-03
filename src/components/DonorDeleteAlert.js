import React,{useState} from 'react';
import {Button,Modal,ModalFooter,ModalHeader,ModalBody } from 'reactstrap';


function DonorDeleteAlert({DeleteHandler,id}) {

    const[DocId,setDocId]=useState(id);

    const[model,setModal]= useState(false);

    const toggle=()=>{ setModal(!model);}

    const ModalDeleteHandler=(id)=>{
        DeleteHandler(id);
        toggle()
    }

  return (
    <div>
        <Button color="danger" onClick={toggle}>DELETE</Button>
        <Modal isOpen={model} toggle={toggle}>
          <ModalHeader toggle={toggle}>Are U Sure?</ModalHeader>
        
          <ModalFooter>
            <Button color="danger"  onClick={()=>ModalDeleteHandler(DocId)}>DELETE</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
  )
}

export default DonorDeleteAlert