import React from 'react';
import{useDispatch,useSelector}from "react-redux";
import { Card,CardBody,CardText,CardSubtitle,CardTitle } from 'reactstrap';

export default function ProfilePage() {
const donoruser =useSelector((state)=>state.donorDetails.value)
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
                src="https://picsum.photos/318/180"
                width="10%"
                />
                <CardBody>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                </CardBody>
            </Card>
            </div>
      </React.Fragment>
    

  )
}
