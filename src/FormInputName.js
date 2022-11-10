import { useEffect, useState } from "react";
import { getNameData } from "./getNameData";
import { storeNameData } from "./storeNameData";

const FormInputName = () => {
    const [nameData, setNameData] = useState(null);
    const apiList = ["https://api.genderize.io?name=", "https://api.agify.io?name=", "https://api.nationalize.io?name="];
    let apiListQueryResults;
    const getStoreNameData = (name) => {
        const apiPromiseList = apiList.map((apiURI) => getNameData(apiURI, name));
        storeNameData(apiList, apiPromiseList, name).then((data) => setNameData(data));
    }
    return ( 
        <>
            <form onSubmit={ (e) => { e.preventDefault(); getStoreNameData(e.target.children[0].value) }}>
                <input type="text"></input>
            </form>
            { nameData && nameData.map((information, index) => (<li key={index}>{information}</li>)) }
        </>
     );
}
 
export default FormInputName;