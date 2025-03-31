export default interface InputBaseProps {
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    pattern?: string;
    title?: string;
    width?: "25%" | "50%" | "75%" | "100%"
    dataType: string;
    onValidate?: (name: string, isValid: boolean) => void;
}