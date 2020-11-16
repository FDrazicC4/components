import { color } from "../variables";
var OutlinedInput = {
    overrides: {
        MuiOutlinedInput: {
            root: {
                transition: 'all 0.3s',
                borderColor: color.blueGray.light,
                '&:hover $notchedOutline': {
                    borderColor: color.blueGray.light
                },
                '& fieldset': {
                    transition: 'all 0.3s',
                    borderWidth: '1px !important'
                },
                '&$disabled': {
                    opacity: 1,
                    backgroundColor: color.blueGray.light,
                    color: color.blueGray.darker
                },
                '&$disabled $notchedOutline': {
                    borderColor: color.blueGray.light
                }
            },
            input: {
                padding: '1rem',
                color: color.blueGray.darker,
                '& ~ fieldset': {
                    top: 0
                },
                '& ~ fieldset legend': {
                    display: 'none'
                }
            }
        }
    }
};
export default OutlinedInput;
