import "~home/App.css"
import "./Newsletter.css"
import MailChimpSubscribe, { type DefaultFormFields } from 'react-mailchimp-subscribe'
import { NewsSignUp } from "../../components/NewsSignUp/NewsSignUp"

const postUrl = `https://laurelwoodbrewpub.us7.list-manage.com/subscribe/post?u=${import.meta.env.VITE_CHIMP_U};id=${import.meta.env.VITE_CHIMP_ID};f_id=${import.meta.env.VITE_CHIMP_F_ID}`

export const Newsletter = () => {
	return (
		<section className="mainContent">
			<MailChimpSubscribe
				url={postUrl}
				render={({ subscribe, status, message }) => {
					return (
						<NewsSignUp
							status={status}
							message={message}
							onValidated={(formData: DefaultFormFields) => subscribe(formData)}
						/>
					)
				}}
			/>
		</section>
	)
}
