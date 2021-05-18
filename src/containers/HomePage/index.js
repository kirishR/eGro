import React from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col } from 'react-bootstrap'

import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import car1 from "../../images/coursel/c1.jpg";
import car2 from "../../images/coursel/c2.jpg";

import car3 from "../../images/coursel/c3.jpg";
import car4 from "../../images/coursel/c4.jpg";
import car5 from "../../images/coursel/c5.jpg";

import ban2 from "../../images/2.jpg";
import card1 from "../../images/card/1.jpg";
import card2 from "../../images/card/2.jpg";
import card3 from "../../images/card/3.jpg";
import card4 from "../../images/card/4.jpg";

import Video from "../../videoes/eGro.mp4";




import './style.css'
import { CarouselItem } from 'react-bootstrap'
/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return (
    <Layout>

      {/* caruosel part */}
      <div style={{ margin: "5px 50px " }}>
        <Carousel fade={true} >
          <Carousel.Item interval={2000} width="50%">
            <img
              className="d-block w-100"
              src={car4}
              height="500px"
              width="100%"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item  >
            <img
              className="d-block w-100"
              src={car2}
              height="500px"
              width="100%"
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={car3}
              height="500px"
              width="100%"
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={car5}
              height="500px"
              width="100%"
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* caruosel */}

      </div>




      {/* featured categories */}



      <div>

      </div>
      <div className="mb-3 mt-3" >
        <div className="category"  >
          <div className="bannerImg">

            <div class="col-12 text-center mt-3 feautre" >
              <h4><b>Feautred Categories</b></h4>
             <hr color="#18421e" width="30%" ></hr>
            </div>
            <div  style={{marginTop:"50px"}}><CardDeck height="250px" width="250px" >

              <Card className="crd cardFooter">
                <Card.Img variant="top" src={card1} height="250px" width="250px" />
                <Card.Footer>
                  <b>HousHold & cleaning</b>
</Card.Footer>
              </Card>


              <Card className="crd cardFooter">
                <Card.Img variant="top" src={card2} height="250px" width="250px" />
                <Card.Footer>
                  Fruits & Vegetables
</Card.Footer>
              </Card>



              <Card className="crd cardFooter" >
                <Card.Img variant="top" src={card3} height="250px" width="250px" />
                <Card.Footer>
                  Bevearages
</Card.Footer>
              </Card>

              <Card className="crd cardFooter">
                <Card.Img variant="top" src={card4} height="250px" width="250px" />
                <Card.Footer>
                  Baby Care
</Card.Footer>
              </Card>
            </CardDeck></div>



          </div>




          {/* <div className="bannerImg">
            <CardDeck height="250px" width="250px">
              <Card className="crd">
                <Card.Img variant="top" src={card5} height="250px" width="250px" border-top-left-radius="20px"
                  border-top-right-radius="20px"
                />
                <Card.Footer>
                  Food Organs & Oil
                </Card.Footer>
              </Card>
              <Card className="crd">
                <Card.Img variant="top" src={card6} height="250px" width="250px" />
                <Card.Footer>
                  Beauty Care
                </Card.Footer>
              </Card>
              <Card className="crd">
                <Card.Img variant="top" src={card7} height="250px" width="250px" />
                <Card.Footer>
                  Bakery
                </Card.Footer>
              </Card>
              <Card className="crd">
                <Card.Img variant="top" src={card8} height="250px" width="250px" />
                <Card.Footer>
                  HomeWare
            </Card.Footer>
              </Card>

            </CardDeck>
          </div> */}
          {/* featured categories*/}
        </div>
      </div>


      {/* banner */}
      <div>
        <Container>
          <Row>
            <Col  >
              <video src={Video} controls autostart autoPlay width="1100px" height="500px" /></Col>

          </Row>
        </Container>
      </div>
      {/* <div class="row g-0">
        <div class="col-sm-6 col-md-8"><div className="banner">
          <div>
            
            <Card>
              <Card.Img variant="top" src={ban2} width="300px" height="500px" />
              <Card.Body>
                <Card.Text>
                  
      </Card.Text>
       
      
              </Card.Body>
            </Card>
            <br />
          </div>
        </div></div>
        <div class="col-6 col-md-4"></div>
      </div> */}



      {/* banner end */}
      <div> <a
        href="https://wa.me/94771268588"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>


      </div>




      {/* about */}
      <div>
        <div className="about">
          <CardDeck>

            <Card className="crd" style={{ backgroundColor: "whitesmoke" }} >
              <div className="text">
                <Card.Body>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                    </svg>
                  </div>

                  <Card.Title><b>Home Delivery</b></Card.Title>
                  <Card.Text style={{ color: "rgb(95, 95, 95)" }}>
                    "We deliver your orders at your doorstep the next working day by our well-trained delivery team."
      </Card.Text>
                </Card.Body>
              </div>
            </Card>


            <Card className="crd" style={{ backgroundColor: "whitesmoke" }}>
              <div className="text">
                <Card.Body>
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
                    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                  </svg>
                  <Card.Title><b>Cash On Delivery</b> </Card.Title>
                  <Card.Text style={{ color: "rgb(95, 95, 95)" }}>
                    "Payments for your purchases can also be made online by credit / debit card or by transferring money from your bank account. There is also a payment method during delivery to facilitate your purchase."
                </Card.Text>
                </Card.Body>

              </div>


            </Card>
            <Card className="crd" style={{ backgroundColor: "whitesmoke" }}>
              <div className="text">
                <Card.Body>
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                  <Card.Title><b>Best Quality</b></Card.Title>
                  <Card.Text style={{ color: "rgb(95, 95, 95)" }}>
                    "  We promise to give you the best of all products. The products are purchased directly from the manufacturers and the fruits, vegetables, eggs and meat are sourced by our team from local farmers."
      </Card.Text>
                </Card.Body>
              </div>


            </Card >
            <Card className="crd" style={{ backgroundColor: "whitesmoke" }}>
              <div className="text">
                <Card.Body>
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <Card.Title><b>Customer Care</b></Card.Title>
                  <Card.Text style={{ color: "rgb(95, 95, 95)" }}>
                    " Our dedicated service team is waiting to serve you at any time. You can contact our service team at 0703 123456 and send your orders through WhatsApp as per your convenience."
      </Card.Text>
                </Card.Body>

              </div>



            </Card>

          </CardDeck>
        </div>
      </div>



      {/* about end */}






    </Layout >
  )

}

export default HomePage