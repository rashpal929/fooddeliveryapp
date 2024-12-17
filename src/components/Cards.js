import React from "react";
import Card from "react-bootstrap/Card";
const Cards = ({ data }) => {
  console.log('cardData', data);
  return (
    <>
      {data.map((element, k) => {
        return (
          <>
            <Card className="mb-4" style={{ width: "22rem" }}>
              <Card.Img
                className="imageCard"
                variant="top"
                src={element.imgdata}
              />
              <div className="card_body">
                <div className="upperData d-flex align-items-center justify-content-between">
                  <h4 className='mt-2'>{element.rname}</h4>
                  <span>{element.rating}&nbsp;★</span>
                </div>
                <div className="lowerData d-flex align-items-center justify-content-between pb-1">
                  <h5>{element.cuisine}</h5>
                  <span>{element.price}</span>
                </div>
                <div class="extra"></div>
                <div className="last_data d-flex justify-content-between align-items-center">
                  <img src={element.arrimg} className="limg" alt="" />
                  <p>{element.somedata}</p>
                  <img src={element.delimg} className="laimg" alt="" />
                </div>
              </div>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cards;
