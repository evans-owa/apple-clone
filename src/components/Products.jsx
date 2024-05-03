import { Box } from "@mui/material";
import { products } from "../constants/constant";
import Product from "./Product";

const Products = () => {
    return (
        <>
        <Box style={{ display: "flex" }}>
            <Product data={products.watch}/>
            <Product data={products.ipad}/>
        </Box>
        <Box style={{ display: "flex" }}>
            <Product data={products.macbook}/>
            <Product data={products.homepod}/>
        </Box>
        <Box style={{ display: "flex" }}>
            <Product data={products.arcade}/>
            <Product data={products.applewatch}/>
        </Box>
        </>
    );
};

export default Products;
