import { useState, type ReactElement } from "react"
import type { DefaultFormFields, SubscribeArg, ResponseArgs } from 'react-mailchimp-subscribe';
import validator from 'validator';

interface NewsSignUpProps {
	onValidated: (formData: DefaultFormFields) => void,
	message: ResponseArgs['message'] | null,
	status: ResponseArgs['status'] | null | "sending",
}

export const NewsSignUp: (props: NewsSignUpProps) => ReactElement = ({ onValidated, message, status }) => {
	const [email, setEmail] = useState('')
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		email &&
			validator.isEmail(email) &&
			onValidated({
				EMAIL: email,
			});
	}

	return <div id="signUpHolder">
		<form onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="email">Sign Up for the Newsletter:</label>
			<input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<input type="submit" value="submit" />
		</form>
	</div>
}

