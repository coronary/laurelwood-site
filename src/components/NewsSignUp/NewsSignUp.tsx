import "./NewsSignUp.css"
import { useEffect, useState, type ReactElement } from "react"
import type { DefaultFormFields, ResponseArgs } from 'react-mailchimp-subscribe';
import validator from 'validator';

interface NewsSignUpProps {
	onValidated: (formData: DefaultFormFields) => void,
	message: ResponseArgs['message'] | null,
	status: ResponseArgs['status'] | null | "sending",
}

export const NewsSignUp: (props: NewsSignUpProps) => ReactElement = ({ onValidated, message, status }) => {
	const [email, setEmail] = useState('')
	const [emailValid, setEmailValid] = useState(true)
	const resetEmail = () => setEmail("")
	useEffect(() => {
		if (status == "success") {
			resetEmail()
		}
	}, [status])


	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (email && !validator.isEmail(email)) {
			setEmailValid(false)
		}
		else if (email) {
			setEmailValid(true)
			onValidated({
				EMAIL: email,
			});
		}
	}

	const statusText = () => {
		const messageText = (defaultText: string) => message instanceof Error ? defaultText : message;
		switch (status) {
			case 'error': {
				return <p className="subStatus error">{messageText("Error Subscribing")}</p>
			}
			case 'sending': {
				return <p className="subStatus">Subscribing</p>
			}
			case 'success': {
				return <p className="subStatus success">{messageText("Subscribed")}</p>
			}
			default: {
				return emailValid ? <></> : <p className="subStatus invalid">Invalid Email</p>
			}
		}
	}

	return <div id="signUpHolder w-full">
		<form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="email"><h1>Sign Up for the Newsletter:</h1></label>
			<input className="bg-white p-2 w-full my-4" type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			{statusText()}
			<input className="text-2xl p-2" type="submit" value="submit" />
		</form>
	</div>
}

