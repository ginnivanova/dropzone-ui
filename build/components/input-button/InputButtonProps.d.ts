import { MaterialButtonProps } from "@unlimited-react-components/material-button";
export interface InputButtonProps extends MaterialButtonProps {
    /**
     * the id of the component
     */
    id?: string;
    /**
     * whether to accept multiple files or not
     */
    multiple?: boolean;
    /**
     * The list of mimetypes and extensions of files
     * to accept. This is a comma separated list of
     *  mime types or file extensions.
     * Eg.: image/\*,application/pdf,.psd
     */
    accept?: string;
    /**
     * If given, this label will be shwed inside the button
     */
    label?: string;
    /**
     * what to do after selecting the files. Returns the File[] to the parent component
     */
    onChange?: Function;
    /**
   * custom validator
   * must be a function that recieves as first parameter a File Object
   * and must return a boolean value
   */
    validator?: (f: File) => boolean;
    /**
     * Max number of files to be accepted.
     */
    /**
     * max file size allowed in bytes
     */
    maxFileSize?: number;
}
/**
 * The default props when not given
 */
export declare const InputButtonDefaultProps: InputButtonProps;
