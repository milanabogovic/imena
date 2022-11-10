const GetNameForm = ({ setName, resetInputValues }) => {
	return (
		<form
			onChange={() => resetInputValues()}
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
