



import { useParams } from "react-router-dom";






const ProductDetail = (props) => {

    const params = useParams();


    console.log(params.productId);
    return <div>
        
        <section>{params.productId}</section>
        <par>
            Product Detail
        </par>
    </div>
};


export default ProductDetail;