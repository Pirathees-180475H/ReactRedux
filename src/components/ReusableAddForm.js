import React,{useState} from 'react';
import{Form,FormGroup,Label,Input,FormFeedback,FormText, Button} from 'reactstrap';
import '../styles/globalStyle.css';

function ReusableAddForm({addData,fields}) {
    const [hospitalName,setHospitalName]=useState("");
    const [hospitalID,setHospitalID]=useState("");

    const submitHandler=(eve)=>{
        eve.preventDefault();
        addData({"id":5,"hospitalName":"davidPullaMOH"})
    }
 /*
   <Form>
       
        <FormGroup>
            <Label for="Name">
                Name Input
            </Label>
            {nameValid ?<Input valid value={name} onChange={(e)=>changeHandler("name",e)} />:<Input invalid value={name} onChange={(e)=>changeHandler("name",e)} />}
            <FormFeedback valid> name is available</FormFeedback>
+            <FormFeedback Invalid> Name already Taken OR in valid Length</FormFeedback>
        </FormGroup>
       
        <FormGroup>
            <Label for="Name">
                Age
            </Label>
            <Input  value={age} onChange={(e)=>changeHandler("age",e)} />
           
        </FormGroup>
 
        <FormGroup>
            <Label for="Name">
                Address Input
            </Label>
          <Input  value={address} onChange={(e)=>changeHandler("address",e)} />
          
        </FormGroup>

    
        <Button color='success' onClick={submitHandler}>ADD</Button>
        </Form>
 */

  return (
   <React.Fragment>
        <div className='ReusableAddForm'>
            <h3>Add Hospital</h3>
            <Button color='success' onClick={submitHandler}>ADD</Button>
        </div>
    </React.Fragment>
  )
}

export default ReusableAddForm