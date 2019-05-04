import React from 'react';
function FormComponent(props) {
	return (
		<main>
			<form>
				<input
					name="firstName"
					onChange={props.handleChange}
					value={props.firstName}
					placeholder="First Name"
				/>
				<br />
				<input name="lastName" onChange={props.handleChange} value={props.lastName} placeholder="Last Name" />
				<br />
				<input name="age" onChange={props.handleChange} value={props.age} placeholder="Age" />
				<br />
				{/* radio */}
				<label>
					<input
						type="radio"
						name="gender"
						value="male"
						checked={props.gender === 'male'}
						onChange={props.handleChange}
					/>Male
				</label>
				<br />
				<label>
					<input
						type="radio"
						name="gender"
						value="female"
						checked={props.gender === 'female'}
						onChange={props.handleChange}
					/>Female
				</label>

				<br />
				{/* select box */}
				<select value={props.destination} name="destination" onChange={props.handleChange}>
					<option value="">--Please Select Something--</option>
					<option value="germany">Germany</option>
					<option value="america">America</option>
					<option value="sydney">Sydney</option>
					<option value="india">India</option>
					<option value="paskistan">Pakistan</option>
				</select>

				<br />
				{/* check box */}
				<br />
				<label>
					<input
						type="checkbox"
						name="isVegan"
						onChange={props.handleChange}
						checked={props.dietaryRestrictions.isVegan}
					/>Vegan?
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="isKosher"
						onChange={props.handleChange}
						checked={props.dietaryRestrictions.isKosher}
					/>Kosher?
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="isLactoseFree"
						onChange={props.handleChange}
						checked={props.dietaryRestrictions.isLactoseFree}
					/>Lactose Free?
				</label>

				<br />
				<button>Submit</button>
			</form>
			<hr />
			<h2>Entered Information:</h2>
			<p>
				Your name: {props.firstName} {props.lastName}
			</p>
			<p>Your Age: {props.age}</p>
			<p>Your Gender: {props.gender}</p>
			<p>Your destination:{props.destination} </p>
			<p>
				Your dietary restrictions:
				<br />
				Vegan:{props.dietaryRestrictions.isVegan ? 'Yes' : 'No'}
				<br />
				Kosher:{props.dietaryRestrictions.isKosher ? 'Yes' : 'No'}
				<br />
				Lactose Free:{props.dietaryRestrictions.isLactoseFree ? 'Yes' : 'No'}
			</p>
		</main>
	);
}
export default FormComponent;
