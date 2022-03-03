import React,{useState} from 'react';
import{Form,FormGroup,Label,Input,FormFeedback,FormText, Button} from 'reactstrap';
import '../styles/globalStyle.css';

function BasicForm({userData,AddNewDonorX}) {

    const [name,setName]=useState();
    const [age,setAge]=useState(0);
    const [address,setAddress]=useState("");
    const [nameValid,setNameValid]=useState(false);

    const allNames=userData.map(user=>user["name"])

    const submitHandler=(e)=>{
       // e.preventDefault()
        let submiteduser={"id":100,"name":name,"address":address}
        AddNewDonorX(submiteduser);
    }

    const changeHandler=(typeOfField,e)=>{
        if(typeOfField==="name"){
            setName(e.target.value);
            nameValidityChecker(e.target.value)}
        else if(typeOfField==="age"){
            setAge(e.target.value)
        }else if(typeOfField==="address"){
            setAddress(e.target.value)
        }
     
    }

    const nameValidityChecker=(name)=>{
      if(name.length<5){setNameValid(false)}else(setNameValid(true))
    }

  return (
    <React.Fragment>
        <div className='addDonorForm'>
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
        </div>
    </React.Fragment>
  )
}

export default BasicForm