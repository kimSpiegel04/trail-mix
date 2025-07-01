/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Trail } from "../API.ts";
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
export declare type TrailUpdateFormInputValues = {
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
export declare type TrailUpdateFormValidationValues = {
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
export declare type TrailUpdateFormOverridesProps = {
    TrailUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type TrailUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrailUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trail?: Trail;
    onSubmit?: (fields: TrailUpdateFormInputValues) => TrailUpdateFormInputValues;
    onSuccess?: (fields: TrailUpdateFormInputValues) => void;
    onError?: (fields: TrailUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrailUpdateFormInputValues) => TrailUpdateFormInputValues;
    onValidate?: TrailUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrailUpdateForm(props: TrailUpdateFormProps): React.ReactElement;
