/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SelectField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SkillExperienceLevel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SkillExperienceLevelUpdateForm(props) {
  const {
    id: idProp,
    skillExperienceLevel,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    level: undefined,
  };
  const [level, setLevel] = React.useState(initialValues.level);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = skillExperienceLevelRecord
      ? { ...initialValues, ...skillExperienceLevelRecord }
      : initialValues;
    setLevel(cleanValues.level);
    setErrors({});
  };
  const [skillExperienceLevelRecord, setSkillExperienceLevelRecord] =
    React.useState(skillExperienceLevel);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SkillExperienceLevel, idProp)
        : skillExperienceLevel;
      setSkillExperienceLevelRecord(record);
    };
    queryData();
  }, [idProp, skillExperienceLevel]);
  React.useEffect(resetStateValues, [skillExperienceLevelRecord]);
  const validations = {
    level: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
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
          level,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            SkillExperienceLevel.copyOf(
              skillExperienceLevelRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SkillExperienceLevelUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Level"
        placeholder="Please select an option"
        isDisabled={false}
        value={level}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              level: value,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
      >
        <option
          children="Basic"
          value="basic"
          {...getOverrideProps(overrides, "leveloption0")}
        ></option>
        <option
          children="Experienced"
          value="experienced"
          {...getOverrideProps(overrides, "leveloption1")}
        ></option>
      </SelectField>
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
          isDisabled={!(idProp || skillExperienceLevel)}
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
              !(idProp || skillExperienceLevel) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
