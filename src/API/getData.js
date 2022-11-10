export const getData = async (apiURI, name) => {
	const request = await fetch(`${apiURI}${name}`);
	const response = await request.json();
	return response;
};
