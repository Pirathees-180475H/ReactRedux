import React,{useState} from 'react';
import SubHeader from '../../components/SubHeader';
import ViewDonors from './ViewDonors';
import AddDonor from './AddDonor';

function AdminDonorManagement() {
    const[allDonors,setDonors]= useState([{"id":1,"name":"ptsDovpts","age":15},{"id":2,"name":"dov"},
                                        {"id":43,"name":"ptsDovpts","age":15},{"id":4,"name":"dov"},
                                         {"id":421,"name":"ptsDovpts","age":15},{"id":6,"name":"dov"},
                                         {"id":441,"name":"ptsDovpts","age":15},{"id":8,"name":"dov"},
                                         {"id":4241,"name":"ptsDovpts","age":15},{"id":12,"name":"dov"},
                                         {"id":241,"name":"ptsDovpts","age":15},{"id":22,"name":"dov"},
                                         {"id":421,"name":"ptsDovpts","age":15},{"id":52,"name":"dov"}]);
    
    const[keys,setKeys] = useState(Object.keys(allDonors[0]));

    const addUser=(user)=>{
      let newUsers=[...allDonors,user]
      setDonors(newUsers)
    }

  return (
    <React.Fragment>
        <SubHeader subHeaderTopics={["View All Donors","ADD Donor",""]}  subSystemName={"Donor Management"}></SubHeader>

        <ViewDonors key={allDonors} allDonors={allDonors} tableTitles={keys}></ViewDonors>

        <AddDonor userData={allDonors} AddDonor={addUser}></AddDonor>

   </React.Fragment>

  )
}

export default AdminDonorManagement