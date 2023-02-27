/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Technology } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TechnologyUpdateFormInputValues = {
    name?: string;
};
export declare type TechnologyUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechnologyUpdateFormOverridesProps = {
    TechnologyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TechnologyUpdateFormProps = React.PropsWithChildren<{
    overrides?: TechnologyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    technology?: Technology;
    onSubmit?: (fields: TechnologyUpdateFormInputValues) => TechnologyUpdateFormInputValues;
    onSuccess?: (fields: TechnologyUpdateFormInputValues) => void;
    onError?: (fields: TechnologyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechnologyUpdateFormInputValues) => TechnologyUpdateFormInputValues;
    onValidate?: TechnologyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TechnologyUpdateForm(props: TechnologyUpdateFormProps): React.ReactElement;
