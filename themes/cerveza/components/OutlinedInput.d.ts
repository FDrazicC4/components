declare const OutlinedInput: {
    overrides: {
        MuiOutlinedInput: {
            root: {
                transition: string;
                borderColor: string;
                '&:hover $notchedOutline': {
                    borderColor: string;
                };
                '& fieldset': {
                    transition: string;
                    borderWidth: string;
                };
                '&$disabled': {
                    opacity: number;
                    backgroundColor: string;
                    color: string;
                };
                '&$disabled $notchedOutline': {
                    borderColor: string;
                };
            };
            input: {
                padding: string;
                color: string;
                '& ~ fieldset': {
                    top: number;
                };
                '& ~ fieldset legend': {
                    display: string;
                };
            };
        };
    };
};
export default OutlinedInput;
