export const getNameData = async(apiURI, name) => {
    const response = await fetch(`${apiURI}${name}`);
    const responseBody = await response.json();
    return responseBody;
}