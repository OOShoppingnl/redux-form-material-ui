import TextField from 'material-ui/TextField'
import createComponent from './createComponent'
import mapError from './mapError'


const transProps = ["errorText", "floatingLabelText", "hintText"];

const translate = (props, translator) => {

	transProps.forEach(tp => {
		if (props[tp])
			props[tp] = translator(props[tp])
	})

	return props
}

export default createComponent(TextField, ({ defaultValue, translator, ...props }) => {
	const p = mapError(props);

	if (!translator || typeof translator !== 'function')
		return p;

	return translate(p, translator);
})
