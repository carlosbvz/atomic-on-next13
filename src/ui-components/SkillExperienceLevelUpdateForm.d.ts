/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SkillExperienceLevel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SkillExperienceLevelUpdateFormInputValues = {
    level?: string;
};
export declare type SkillExperienceLevelUpdateFormValidationValues = {
    level?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkillExperienceLevelUpdateFormOverridesProps = {
    SkillExperienceLevelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    level?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SkillExperienceLevelUpdateFormProps = React.PropsWithChildren<{
    overrides?: SkillExperienceLevelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    skillExperienceLevel?: SkillExperienceLevel;
    onSubmit?: (fields: SkillExperienceLevelUpdateFormInputValues) => SkillExperienceLevelUpdateFormInputValues;
    onSuccess?: (fields: SkillExperienceLevelUpdateFormInputValues) => void;
    onError?: (fields: SkillExperienceLevelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SkillExperienceLevelUpdateFormInputValues) => SkillExperienceLevelUpdateFormInputValues;
    onValidate?: SkillExperienceLevelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SkillExperienceLevelUpdateForm(props: SkillExperienceLevelUpdateFormProps): React.ReactElement;
