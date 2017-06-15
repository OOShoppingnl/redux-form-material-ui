import TextField from 'material-ui/TextField'
import createComponent from './createComponent'
import mapError from './mapError'

import { castArray } from 'lodash';

const transProps = ["errorText", "floatingLabelText", "hintText"];

const translate = (props, translator) => {

	transProps.forEach(tp => {

		const prop = props[tp] && props[tp].toJS && typeof props[tp].toJS === 'function' ? props[tp].toJS() : props[tp];
		if (props[tp]) 
			props[tp] = translator(...castArray(prop));
	})

	return props
}

export default createComponent(TextField, ({ defaultValue, translator, ...props }) => {
	const p = mapError(props);

	if (!translator || typeof translator !== 'function')
		return p;

	return translate(p, translator);
})
