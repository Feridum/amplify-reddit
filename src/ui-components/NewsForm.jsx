/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Post } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, TextField } from "@aws-amplify/ui-react";
export default function NewsForm(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldThreeOneFourSevenThreeZeroSevenZeroValue,
    setTextFieldThreeOneFourSevenThreeZeroSevenZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourSevenThreeZeroEightNineValue,
    setTextFieldThreeOneFourSevenThreeZeroEightNineValue,
  ] = useStateMutationAction("");
  const [imageURLValue, setImageURLValue] = useStateMutationAction("");
  const [uRLValue, setURLValue] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      title: textFieldThreeOneFourSevenThreeZeroSevenZeroValue,
      description: textFieldThreeOneFourSevenThreeZeroEightNineValue,
      thumbnail: imageURLValue,
      url: uRLValue,
    },
    model: Post,
    schema: schema,
  });
  return (
    <Flex
      gap="32px"
      direction="column"
      width="400px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="32px 16px 32px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NewsForm")}
    >
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Tytuł"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeOneFourSevenThreeZeroSevenZeroValue}
        onChange={(event) => {
          setTextFieldThreeOneFourSevenThreeZeroSevenZeroValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField31473070")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Opis"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeOneFourSevenThreeZeroEightNineValue}
        onChange={(event) => {
          setTextFieldThreeOneFourSevenThreeZeroEightNineValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField31473089")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Obrazek Url"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={imageURLValue}
        onChange={(event) => {
          setImageURLValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "ImageURL")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="URL"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={uRLValue}
        onChange={(event) => {
          setURLValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "URL")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Dodaj wpis"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
