import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
// import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./style.css";
import { generatePublicUrl } from "../../../urlConfig";

/**
 * @author
 * @function ClothingAndAccessories
 **/

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

//   return (
//     // <div style={{ padding: "5px" }}>
//     //   <Card
//     //     style={{
//     //       boxSizing: "border-box",
//     //       padding: "5px",
//     //       display: "flex",
//     //     }}
//     //   >
//     //     {product.products.map((product) => (
//     //       <div className="caContainer">
//     //         <Link
//     //           className="caImgContainer"
//     //           to={`/${product.slug}/${product._id}/p`}
//     //         >
//     //           <img src={generatePublicUrl(product.productPictures[0].img) } />
//     //         </Link>
//     //         <div>
//     //           <div className="caProductName">{product.name}</div>
//     //           <div className="caProductPrice" style={{color:"red"}}>
//     //             Rs.
//     //             {product.price}
//     //           </div>
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </Card>
//     // </div>
    
//   );
  
// };
return (
   
  <div className='container-fluid' style={{ marginLeft:"260px", minHeight : "1050px"}}>
    <div className='row'>
      {product.products.map((product) => (
        <div className='col-3 mt-3 ' height="400px" width="150px">
          <div className='card-block product1-card p-3'>
            <Link

              to={`/${product.slug}/${product._id}/p`}
            >
              <img className='card-img product-img' height="200px" width="100px" src={generatePublicUrl(product.productPictures[0].img)} />
            </Link>
            <div >
              <h4 style={{minHeight:"50px",fontSize:"14px"}}className='text-center text-capitalize mt-2'>{product.name}</h4>
              <hr></hr>
              <h3 className='text-center mt-3' style={{ color: 'green' }}>
                Rs {product.price}
              </h3>
              <div className='text-center mt-3 mb-3'>
                {/* <a href='/Lucky-Bamboo/608edce7b1226643d76c5d7d/p' className='btn buy-btn '>Buy Now</a> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default ClothingAndAccessories;
