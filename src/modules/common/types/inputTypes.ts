export default interface InputBaseProps {
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    pattern?: string;
    title?: string;
    dataType: string;
    onValidate?: (name: string, isValid: boolean) => void;
}