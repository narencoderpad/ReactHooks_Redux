import React from "react";
import {Row,Col} from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";
const ViewComponent = (props) => {
    return (
        <div>
            <div className="ParentDiv">{props.caption}</div>
            <Row className="box">
                {props.List && props.List.length !== 0 ? props.List.map((data,i)=>(
                   <Col lg={4} md={4} sm={4} xs={4} className="App">
                       <div className="show-image"><img src={data.img} alt="*" className="cursor"/>
                       <ButtonComponent handleClick={()=>props.handleClick(data.id,props.status)} BtnText={props.BtnText}/>
                      </div>
                       <div><span>{data.title}</span></div>
                   </Col>
                )):<div className="App">No data</div>}
            </Row>
        </div>
    )
}
export default ViewComponent;