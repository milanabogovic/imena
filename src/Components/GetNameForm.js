const GetNameForm = ({ setName, resetOutputValues }) => {
	return (
		<form
			onChange={() => resetOutputValues()}
			onSubmit={(e) => {
				e.preventDefault();
				setName(e.target.children[0].value);
			}}
		>
			<input type="text"></input>
		</form>
	);
};

export default GetNameForm;
