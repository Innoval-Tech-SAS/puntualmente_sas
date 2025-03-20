import { ReactElement } from "react";
import InputBaseProps from "./inputTypes";

export default interface FormBaseProps {
    title: string;
    children: ReactElement<InputBaseProps> | ReactElement<InputBaseProps>[];
    textContent?: string;
    onValidate?: (name: string, isValid: boolean) => void;
}
