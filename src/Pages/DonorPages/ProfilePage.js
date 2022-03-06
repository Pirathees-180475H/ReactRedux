import React,{useState}from 'react';
import{useDispatch,useSelector}from "react-redux";
import { Card,CardBody,CardText,CardSubtitle,CardTitle } from 'reactstrap';
import { fireBaseStorage } from '../../backend/firebaseConfg';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export default function ProfilePage() {
const [profilePicURL,setProfilePicUrl]=useState("")

const donoruser =useSelector((state)=>state.donorDetails.value);

const fileHandler=(event)=>{
    event.preventDefault();
    const file= event.target[0].files[0];
    uploadProfileImage(file);
}

const uploadProfileImage =(file)=>{
    if(!file) return;
    const storageRef=ref(fireBaseStorage,`files/${file.name}`)
    const uploadTask= uploadBytesResumable(storageRef,file);

    uploadTask.on(
        "state_changed",
        (snapshot)=>{/*Can Track Progress */ },
        (err)=>console.log(err),
        ()=>getDownloadURL(uploadTask.snapshot.ref).then(url=>setProfilePicUrl(url))
    )
}

  return (
      <React.Fragment>
            <div>
            <Card>
                <CardBody>
                <CardTitle tag="h5">
                    {donoruser.firstname}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {donoruser.email}
                </CardSubtitle>
                </CardBody>
                <img
                alt="Card image cap"
                src={`${profilePicURL}`}
                width="10%"
                />
                <CardBody>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                </CardBody>
            </Card>
            </div>
            <form onSubmit={(e)=>fileHandler(e)}>
                <input type="file" className='input'></input>
                <button type='submit'>Upload</button>                
            </form>
      </React.Fragment>
    

  )
}
