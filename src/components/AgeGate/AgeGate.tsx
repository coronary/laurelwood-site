import '~home/App.css'
import './AgeGate.css'
import text_logo from '~assets/text_logo.png'
import type { ReactElement } from 'react'

const handleNo = () => { history.back() }

interface AgeGateProps {
	show: boolean,
	handleYes: (state: boolean) => void
}

export const AgeGate: (props: AgeGateProps) => ReactElement = ({ show, handleYes }) => {
	return show ? <div id="privacyScreen">
		<div id="ageGate" className="mx-auto sm:w-1/2 py-8 mt-12">
			<img src={text_logo} className="w-3/4 mb-8" />
			<h1 className="ageText mx-auto my-8">Are You 21 Years of Age or Older?</h1>
			<div id="ageButtons" className="flex row justify-center">
				<button id="yes" onClick={() => handleYes(false)} className=""><h1 className="">YES</h1></button>
				<button id="no" onClick={handleNo}> <h1 className="">NO</h1></button>
			</div>
		</div>
	</div> : <></>
}
