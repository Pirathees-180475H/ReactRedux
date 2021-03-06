import React,{useState} from 'react';
import{Form,FormGroup,Label,Input,FormFeedback,FormText, Button} from 'reactstrap';
import '../styles/globalStyle.css';
import AddButton from './AddConformationModal';

function ReusableAddForm({addData,formFor,data}) {

    //Hospital States
    const [hospitalName,setHospitalName]=useState("");
    const [hospitalID,setHospitalID]=useState("");
    const [hospitalNameValid,setHospitalNameValid]=useState(false);
    const [hospitalIdvalid,setHospitalIdValid]=useState(false);

    //Donor States
    const [name,setName]=useState();
    const [age,setAge]=useState(0);
    const [address,setAddress]=useState("");
    const [nameValid,setNameValid]=useState(false);

    //over all validation
    const [submissionValid,setSubmissionValid]=useState(false);


    const submitHandler=()=>{
        switch(formFor){
            case "Hospital":{
                addData({"id":hospitalID,"hospitalName":hospitalName});
                setHospitalName("");setHospitalID("");
            }
        }
      
    }

    const changeHandler=(usedFor,fieldName,event)=>{
        checkSubmissionValid()
            switch(usedFor){
                case "Hospital":{
                    switch (fieldName){
                        case "hospitalName":{
                            setHospitalName(event.target.value);
                            validityChecker("hospitalName",event.target.value);
                            break;
                        }
                        case "hospitalId":{
                            setHospitalID(event.target.value);
                            validityChecker("hospitalId",event.target.value);
                            break;
                        }
                    }
                }
            }
    }

    const validityChecker =(fieldName,value)=>{
      
        switch(fieldName){
            case "hospitalName":{
                let hospitalNames=data.map(hospital=>{
                    return hospital["hospitalName"]
                })
                if(hospitalNames.includes(value) || value.length<=5){setHospitalNameValid(false)}else{setHospitalNameValid(true)};
                break;
            }
            case "hospitalId":{
                let hospitalIds=data.map(hospital=>{
                    return hospital["Id"]
                })
                if(hospitalIds.includes(value)||value.length<=3){setHospitalIdValid(false)}else{setHospitalIdValid(true)};
                break;
            }
        }
    }
    
    const checkSubmissionValid =()=>{
        if(formFor=="Hospital"){
            if(hospitalIdvalid!==false && hospitalNameValid!==false){setSubmissionValid(true)}else{
                setSubmissionValid(false)
            }
        }  
    }
  return (
   <React.Fragment>
        <div className='ReusableAddForm'>

           {formFor==="Hospital"?
           <div>
                <h3>Add Hospital</h3>
            <Form>
                <FormGroup>
                    <Label for="Name">
                        Hospital Name
                    </Label>
                    {hospitalNameValid ?<Input valid value={hospitalName} onChange={(e)=>changeHandler(formFor,"hospitalName",e)} />:<Input invalid value={hospitalName} onChange={(e)=>changeHandler(formFor,"hospitalName",e)} />}
                    <FormFeedback valid> name is available</FormFeedback>
                        <FormFeedback> Name already Taken OR in valid Length</FormFeedback>
                </FormGroup>
                
                <FormGroup>
                    <Label for="Id">
                        id
                    </Label>
                    {hospitalIdvalid ?<Input  valid value={hospitalID} onChange={(e)=>changeHandler(formFor,"hospitalId",e)} /> :
                    <Input  invalid value={hospitalID} onChange={(e)=>changeHandler(formFor,"hospitalId",e)} /> }
                    
                </FormGroup>
                 <AddButton data={`${hospitalName} ,${hospitalID}`} validity={submissionValid} addHandler={submitHandler}></AddButton>
            </Form>
           </div>:null}

           {formFor==="Donor"?
           <div>
                <h3>Add Donor</h3>
            <Form>
                <FormGroup>
                    <Label for="Name">
                        Name Input
                    </Label>
                    {nameValid ?<Input valid value={name} onChange={(e)=>changeHandler("name",e)} />:<Input invalid value={name} onChange={(e)=>changeHandler("name",e)} />}
                    <FormFeedback valid> name is available</FormFeedback>
                        <FormFeedback Invalid> Name already Taken OR in valid Length</FormFeedback>
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
           </div>:null}

        </div>
    </React.Fragment>
  )
}

export default ReusableAddForm