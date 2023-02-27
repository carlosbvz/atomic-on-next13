/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TechnologyExperienceLevel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TechnologyExperienceLevelUpdateFormInputValues = {
    level?: string;
};
export declare type TechnologyExperienceLevelUpdateFormValidationValues = {
    level?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechnologyExperienceLevelUpdateFormOverridesProps = {
    TechnologyExperienceLevelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    level?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TechnologyExperienceLevelUpdateFormProps = React.PropsWithChildren<{
    overrides?: TechnologyExperienceLevelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    technologyExperienceLevel?: TechnologyExperienceLevel;
    onSubmit?: (fields: TechnologyExperienceLevelUpdateFormInputValues) => TechnologyExperienceLevelUpdateFormInputValues;
    onSuccess?: (fields: TechnologyExperienceLevelUpdateFormInputValues) => void;
    onError?: (fields: TechnologyExperienceLevelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechnologyExperienceLevelUpdateFormInputValues) => TechnologyExperienceLevelUpdateFormInputValues;
    onValidate?: TechnologyExperienceLevelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TechnologyExperienceLevelUpdateForm(props: TechnologyExperienceLevelUpdateFormProps): React.ReactElement;
