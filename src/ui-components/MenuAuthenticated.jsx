/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function MenuAuthenticated(props) {
  const { overrides, ...rest } = props;
  const buttonThreeTwoFourSevenTwoSevenTwoOneOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const buttonThreeTwoFourSevenTwoSevenTwoThreeOnClick = useNavigateAction({
    type: "url",
    url: "/my-posts",
  });
  const buttonThreeTwoFourSevenTwoSevenTwoFourOnClick = useNavigateAction({
    type: "url",
    url: "/add-post",
  });
  const buttonThreeTwoFourSevenTwoSevenTwoFiveOnClick = useAuthSignOutAction({
    global: false,
  });
  return (
    <Flex
      gap="0"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="16px 0px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MenuAuthenticated")}
    >
      <Button
        display="flex"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="56px"
        position="relative"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="link"
        children="Archiwum artykułów"
        onClick={() => {
          buttonThreeTwoFourSevenTwoSevenTwoOneOnClick();
        }}
        {...getOverrideProps(overrides, "Button32472721")}
      ></Button>
      <Flex
        gap="0"
        width="fit-content"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        height="46px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Button
          display="flex"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="46px"
          position="relative"
          padding="8px 16px 8px 16px"
          size="large"
          isDisabled={false}
          variation="link"
          children="Moje posty"
          onClick={() => {
            buttonThreeTwoFourSevenTwoSevenTwoThreeOnClick();
          }}
          {...getOverrideProps(overrides, "Button32472723")}
        ></Button>
        <Button
          display="flex"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="46px"
          position="relative"
          padding="8px 16px 8px 16px"
          size="large"
          isDisabled={false}
          variation="link"
          children="Dodaj post"
          onClick={() => {
            buttonThreeTwoFourSevenTwoSevenTwoFourOnClick();
          }}
          {...getOverrideProps(overrides, "Button32472724")}
        ></Button>
        <Button
          display="flex"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="46px"
          position="relative"
          padding="8px 16px 8px 16px"
          size="large"
          isDisabled={false}
          variation="link"
          children="Wyloguj"
          onClick={() => {
            buttonThreeTwoFourSevenTwoSevenTwoFiveOnClick();
          }}
          {...getOverrideProps(overrides, "Button32472725")}
        ></Button>
      </Flex>
    </Flex>
  );
}
