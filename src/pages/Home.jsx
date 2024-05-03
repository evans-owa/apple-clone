

import Header from "../components/Header";
import Details from "../components/Details";
import Section from "../components/Section";
import Products from "../components/Products";
import { productsSection } from "../constants/constant";


const Home = () => {
    return (
        <>
        <Header />
        <Details />
        <Section data={productsSection.iphonePro}/>
        <Section data={productsSection.iPhone}/>
        <Section data={productsSection.macbookpro}/>
        <Products />
        </>
    )
}

export default Home