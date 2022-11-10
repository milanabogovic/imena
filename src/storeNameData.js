export const storeNameData = (apiList, apiPromiseList, name) => {
    let apiListQueryResults = [];
    return new Promise((resolve, reject) => {
        Promise.all(apiPromiseList)
        .then(results => {
            results.forEach((response, index) => {
                if (apiList[index].includes("genderize")) {
                    apiListQueryResults.push(response.gender);
                } else if (apiList[index].includes("agify")) {
                    apiListQueryResults.push(response.age);
                } else if (apiList[index].includes("nationalize")) {
                    apiListQueryResults.push(response.country[0].country_id);
                }
            });
        });
        resolve(apiListQueryResults);
    })
};