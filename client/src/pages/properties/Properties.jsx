import React from "react";
import './properties.css';
import SearchBar from '../../components/searchBar/SearchBar';
import useProperties from "../../hooks/UseProperties";
import {PuffLoader} from 'react-spinners';
import PropertyCard from "../../components/propertyCard/PropertyCard";

const Properties = () => {

    const {data, isError, isLoading} = useProperties();

    if(isError){
        return(
            <div className="wrapper">
                <span>Error while fetching data</span>
            </div>
        )
    }

    if(isLoading){
        <div className="wrapper flexCenter" style={{height: "60vh"}}>
            <PuffLoader 
            height="80"
            width="80"
            radius={1}
            color="#4066ff"
            aria-label="puff-loading"
            />
        </div>
    } 
    return (
        <div className="wrapper">
            <div className="flexCenter paddings innerwidth properties-container">
                <SearchBar />
                <div className="paddings flexCenter properties">
                    {data && data.map((card, i) => (<PropertyCard card={card} key={i}/>))}
                </div>
            </div>
        </div>
    )
}

export default Properties;