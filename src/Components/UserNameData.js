import { useEffect, useState } from "react";
import { genderAPI, nationalityAPI, randomAgeAPI } from "../API/apiList";
import { getData } from "../API/getData";
import GetNameForm from "./getNameForm";
import ShowNameData from "./showNameData";

const UserNameData = () => {
	const [gender, setGender] = useState(null);
	const [nationality, setNationality] = useState(null);
	const [age, setAge] = useState(null);
	const [name, setName] = useState(null);

	useEffect(() => {
		if (name?.length) {
			(async () => {
				const genderData = await getData(genderAPI, name);
				const ageData = await getData(randomAgeAPI, name);
				const nationalityData = await getData(nationalityAPI, name);

				setAge(ageData.age);
				setNationality(nationalityData.country[0].country_id);
				setGender(genderData.gender);
			})();
		}
	}, [name]);

	const setUserName = (value) => setName(value);

	const resetInputValues = () => {
		setAge(null);
		setNationality(null);
		setGender(null);
	};

	return (
		<div>
			<GetNameForm setName={setUserName} resetInputValues={resetInputValues} />
			<ShowNameData nameData={gender} />
			<ShowNameData nameData={age} />
			<ShowNameData nameData={nationality} />
		</div>
	);
};

export default UserNameData;
