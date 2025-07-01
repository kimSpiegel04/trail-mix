/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TrailCreateFormInputValues = {
    name?: string;
    description?: string;
    difficulty?: string;
    distance?: number;
    latitude?: number;
    longitude?: number;
    distanceMiles?: number;
    elevationGain?: number;
    imageUrl?: string;
    location?: string;
    trailPath?: string;
};
export declare type TrailCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    difficulty?: ValidationFunction<string>;
    distance?: ValidationFunction<number>;
    latitude?: ValidationFunction<number>;
    longitude?: ValidationFunction<number>;
    distanceMiles?: ValidationFunction<number>;
    elevationGain?: ValidationFunction<number>;
    imageUrl?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    trailPath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrailCreateFormOverridesProps = {
    TrailCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    difficulty?: PrimitiveOverrideProps<TextFieldProps>;
    distance?: PrimitiveOverrideProps<TextFieldProps>;
    latitude?: PrimitiveOverrideProps<TextFieldProps>;
    longitude?: PrimitiveOverrideProps<TextFieldProps>;
    distanceMiles?: PrimitiveOverrideProps<TextFieldProps>;
    elevationGain?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    trailPath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrailCreateFormProps = React.PropsWithChildren<{
    overrides?: TrailCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TrailCreateFormInputValues) => TrailCreateFormInputValues;
    onSuccess?: (fields: TrailCreateFormInputValues) => void;
    onError?: (fields: TrailCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrailCreateFormInputValues) => TrailCreateFormInputValues;
    onValidate?: TrailCreateFormValidationValues;
} & React.CSSProperties>;
export default function TrailCreateForm(props: TrailCreateFormProps): React.ReactElement;
