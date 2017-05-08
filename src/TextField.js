import TextField from 'material-ui/TextField'
import createComponent from './createComponent'
import mapError from './mapError'

const translate = ({errorText, ...props}, translator) => {
	return {
		errorText: translator(errorText),
		...props
	}
}

export default createComponent(TextField, ({ defaultValue, translator, ...props }) => {
	const p = mapError(props);

	if (!translator || typeof translator !== 'function')
		return p;

	return translate(p, translator);
})
