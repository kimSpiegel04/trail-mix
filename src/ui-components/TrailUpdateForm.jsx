/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTrail } from "../graphql/queries";
import { updateTrail } from "../graphql/mutations";
const client = generateClient();
export default function TrailUpdateForm(props) {
  const {
    id: idProp,
    trail: trailModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    difficulty: "",
    distance: "",
    latitude: "",
    longitude: "",
    distanceMiles: "",
    elevationGain: "",
    imageUrl: "",
    location: "",
    trailPath: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [difficulty, setDifficulty] = React.useState(initialValues.difficulty);
  const [distance, setDistance] = React.useState(initialValues.distance);
  const [latitude, setLatitude] = React.useState(initialValues.latitude);
  const [longitude, setLongitude] = React.useState(initialValues.longitude);
  const [distanceMiles, setDistanceMiles] = React.useState(
    initialValues.distanceMiles
  );
  const [elevationGain, setElevationGain] = React.useState(
    initialValues.elevationGain
  );
  const [imageUrl, setImageUrl] = React.useState(initialValues.imageUrl);
  const [location, setLocation] = React.useState(initialValues.location);
  const [trailPath, setTrailPath] = React.useState(initialValues.trailPath);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = trailRecord
      ? { ...initialValues, ...trailRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setDifficulty(cleanValues.difficulty);
    setDistance(cleanValues.distance);
    setLatitude(cleanValues.latitude);
    setLongitude(cleanValues.longitude);
    setDistanceMiles(cleanValues.distanceMiles);
    setElevationGain(cleanValues.elevationGain);
    setImageUrl(cleanValues.imageUrl);
    setLocation(cleanValues.location);
    setTrailPath(cleanValues.trailPath);
    setErrors({});
  };
  const [trailRecord, setTrailRecord] = React.useState(trailModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTrail.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTrail
        : trailModelProp;
      setTrailRecord(record);
    };
    queryData();
  }, [idProp, trailModelProp]);
  React.useEffect(resetStateValues, [trailRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    difficulty: [],
    distance: [],
    latitude: [],
    longitude: [],
    distanceMiles: [],
    elevationGain: [],
    imageUrl: [],
    location: [],
    trailPath: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description: description ?? null,
          difficulty: difficulty ?? null,
          distance: distance ?? null,
          latitude: latitude ?? null,
          longitude: longitude ?? null,
          distanceMiles: distanceMiles ?? null,
          elevationGain: elevationGain ?? null,
          imageUrl: imageUrl ?? null,
          location: location ?? null,
          trailPath: trailPath ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateTrail.replaceAll("__typename", ""),
            variables: {
              input: {
                id: trailRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TrailUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              difficulty,
              distance,
              latitude,
              longitude,
              distanceMiles,
              elevationGain,
              imageUrl,
              location,
              trailPath,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              difficulty,
              distance,
              latitude,
              longitude,
              distanceMiles,
              elevationGain,
              imageUrl,
              location,
              trailPath,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Difficulty"
        isRequired={false}
        isReadOnly={false}
        value={difficulty}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              difficulty: value,
              distance,
              latitude,
              longitude,
              distanceMiles,
              elevationGain,
              imageUrl,
              location,
              trailPath,
            };
            const result = onChange(modelFields);
            value = result?.difficulty ?? value;
          }
          if (errors.difficulty?.hasError) {
            runValidationTasks("difficulty", value);
          }
          setDifficulty(value);
        }}
        onBlur={() => runValidationTasks("difficulty", difficulty)}
        errorMessage={errors.difficulty?.errorMessage}
        hasError={errors.difficulty?.hasError}
        {...getOverrideProps(overrides, "difficulty")}
      ></TextField>
      <TextField
        label="Distance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={distance}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              difficulty,
              distance: value,
              latitude,
              longitude,
              distanceMiles,
              elevationGain,
              imageUrl,
              location,
              trailPath,
            };
            const result = onChange(modelFields);
            value = result?.distance ?? value;
          }
          if (errors.distance?.hasError) {
            runValidationTasks("distance", value);
          }
          setDistance(value);
        }}
        onBlur={() => runValidationTasks("distance", distance)}
        errorMessage={errors.distance?.errorMessage}
        hasError={errors.distance?.hasError}
        {...getOverrideProps(overrides, "distance")}
      ></TextField>
      <TextField
        label="Latitude"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={latitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              difficulty,
              distance,
              latitude: value,
              longitude,
              distanceMiles,
              elevationGain,
              imageUrl,
              location,
              trailPath,
            };
            const result = onChange(modelFields);
            value = result?.latitude ?? value;
          }
          if (errors.latitude?.hasError) {
            runValidationTasks("latitude", value);
          }
          setLatitude(value);
        }}
        onBlur={() => runValidationTasks("latitude", latitude)}
        errorMessage={errors.latitude?.errorMessage}
        hasError={errors.latitude?.hasError}
        {...getOverrideProps(overrides, "latitude")}
      ></TextField>
      <TextField
        label="Longitude"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={longitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              difficulty,
              distance,
              latitude,
              longitude: value,
              distanceMiles,
              elevationGain,
              imageUrl,
              location,
              trailPath,
            };
            const result = onChange(modelFields);
            value = result?.longitude ?? value;
          }
          if (errors.longitude?.hasError) {
            runValidationTasks("longitude", value);
          }
          setLongitude(value);
        }}
        onBlur={() => runValidationTasks("longitude", longitude)}
        errorMessage={errors.longitude?.errorMessage}
        hasError={errors.longitude?.hasError}
        {...getOverrideProps(overrides, "longitude")}
      ></TextField>
      <TextField
        label="Distance miles"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={distanceMiles}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              difficulty,
              distance,
              latitude,
              longitude,
              distanceMiles: value,
              elevationGain,
              imageUrl,
              location,
              trailPath,
            };
            const result = onChange(modelFields);
            value = result?.distanceMiles ?? value;
          }
          if (errors.distanceMiles?.hasError) {
            runValidationTasks("distanceMiles", value);
          }
          setDistanceMiles(value);
        }}
        onBlur={() => runValidationTasks("distanceMiles", distanceMiles)}
        errorMessage={errors.distanceMiles?.errorMessage}
        hasError={errors.distanceMiles?.hasError}
        {...getOverrideProps(overrides, "distanceMiles")}
      ></TextField>
      <TextField
        label="Elevation gain"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={elevationGain}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              difficulty,
              distance,
              latitude,
              longitude,
              distanceMiles,
              elevationGain: value,
              imageUrl,
              location,
              trailPath,
            };
            const result = onChange(modelFields);
            value = result?.elevationGain ?? value;
          }
          if (errors.elevationGain?.hasError) {
            runValidationTasks("elevationGain", value);
          }
          setElevationGain(value);
        }}
        onBlur={() => runValidationTasks("elevationGain", elevationGain)}
        errorMessage={errors.elevationGain?.errorMessage}
        hasError={errors.elevationGain?.hasError}
        {...getOverrideProps(overrides, "elevationGain")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={imageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              difficulty,
              distance,
              latitude,
              longitude,
              distanceMiles,
              elevationGain,
              imageUrl: value,
              location,
              trailPath,
            };
            const result = onChange(modelFields);
            value = result?.imageUrl ?? value;
          }
          if (errors.imageUrl?.hasError) {
            runValidationTasks("imageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("imageUrl", imageUrl)}
        errorMessage={errors.imageUrl?.errorMessage}
        hasError={errors.imageUrl?.hasError}
        {...getOverrideProps(overrides, "imageUrl")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              difficulty,
              distance,
              latitude,
              longitude,
              distanceMiles,
              elevationGain,
              imageUrl,
              location: value,
              trailPath,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Trail path"
        isRequired={false}
        isReadOnly={false}
        value={trailPath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              difficulty,
              distance,
              latitude,
              longitude,
              distanceMiles,
              elevationGain,
              imageUrl,
              location,
              trailPath: value,
            };
            const result = onChange(modelFields);
            value = result?.trailPath ?? value;
          }
          if (errors.trailPath?.hasError) {
            runValidationTasks("trailPath", value);
          }
          setTrailPath(value);
        }}
        onBlur={() => runValidationTasks("trailPath", trailPath)}
        errorMessage={errors.trailPath?.errorMessage}
        hasError={errors.trailPath?.hasError}
        {...getOverrideProps(overrides, "trailPath")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || trailModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || trailModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
