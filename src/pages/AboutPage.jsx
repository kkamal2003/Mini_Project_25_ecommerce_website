import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
          earum unde eligendi autem praesentium, doloremque distinctio nesciunt
          porro tempore quis eaque labore voluptatibus ea necessitatibus
          exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
          tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
          quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
          delectus expedita a alias nam recusandae illo debitis repellat libero,
          quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/originals/82/53/cf/8253cf2b5cc647f4a640e4a3ba945c3e.jpg" alt="" style={{ height: "300px", width: "300px"}} />
              <div className="card-body">
                <h5 className="card-title text-center">Sofa and Bed Frame</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://d9dvmj2a7k2dc.cloudfront.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/m/cm3538t1.jpg" alt="" style={{ height: "300px", width: "300px"}} />
              <div className="card-body">
                <h5 className="card-title text-center">Table</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/originals/27/95/c0/2795c0b9f7fa4243dbc22d8db2f4a463.jpg" alt="" style={{ height: "300px", width: "300px"}}/>
              <div className="card-body">
                <h5 className="card-title text-center">Chair</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://ii1.pepperfry.com/media/catalog/product/k/o/1100x1210/kosmo-universal-wardrobe-in-walnut-rigato-melamine-finish-by-spacewood-kosmo-universal-wardrobe-in-w-6efjpn.jpg" alt="" style={{ height: "300px", width: "300px"}} />
              <div className="card-body">
                <h5 className="card-title text-center">Wardrobe</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage