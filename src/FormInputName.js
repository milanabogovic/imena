import { useState } from "react";

const FormInputName = () => {
    const [nameData, setNameData] = useState(null);
    const apiList = ["https://api.genderize.io?name=", "https://api.agify.io?name=", "https://api.nationalize.io?name="];
    let apiListQueryResults;

    const getNameData = async(apiURI, name) => {
        const response = await fetch(`${apiURI}${name}`);
        const responseBody = await response.json();
        return responseBody;
    }

    const storeNameData = (name) => {
        Promise.all(apiList.map((apiURI) => getNameData(apiURI, name)))
            .then(results => {
                apiListQueryResults = [];
                results.forEach((response, index) => {
                    if (apiList[index].includes("genderize")) {
                        apiListQueryResults.push(response.gender);
                    } else if (apiList[index].includes("agify")) {
                        apiListQueryResults.push(response.age);
                    } else if (apiList[index].includes("nationalize")) {
                        apiListQueryResults.push(response.country[0].country_id);
                    }
                });
            setNameData(apiListQueryResults);
        });
    };
    return ( 
        <>
            <form onSubmit={ (e) => { e.preventDefault(); storeNameData(e.target.children[0].value) }}>
                <input type="text"></input>
            </form>
            { nameData && nameData.map((information, index) => (<li key={index}>{information}</li>)) }
        </>
     );
}
 
export default FormInputName;