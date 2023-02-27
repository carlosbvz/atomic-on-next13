/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TechnologyExperienceLevelCreateFormInputValues = {
    level?: string;
};
export declare type TechnologyExperienceLevelCreateFormValidationValues = {
    level?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechnologyExperienceLevelCreateFormOverridesProps = {
    TechnologyExperienceLevelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    level?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TechnologyExperienceLevelCreateFormProps = React.PropsWithChildren<{
    overrides?: TechnologyExperienceLevelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TechnologyExperienceLevelCreateFormInputValues) => TechnologyExperienceLevelCreateFormInputValues;
    onSuccess?: (fields: TechnologyExperienceLevelCreateFormInputValues) => void;
    onError?: (fields: TechnologyExperienceLevelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechnologyExperienceLevelCreateFormInputValues) => TechnologyExperienceLevelCreateFormInputValues;
    onValidate?: TechnologyExperienceLevelCreateFormValidationValues;
} & React.CSSProperties>;
export default function TechnologyExperienceLevelCreateForm(props: TechnologyExperienceLevelCreateFormProps): React.ReactElement;
