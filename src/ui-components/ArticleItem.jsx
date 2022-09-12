/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ArticleItem(props) {
  const { post, overrides, ...rest } = props;
  return (
    <Flex
      gap="71px"
      width="790px"
      height="288px"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ArticleItem")}
    >
      <Flex
        gap="71px"
        width="790px"
        alignItems="flex-start"
        grow="1"
        basis="790px"
        alignSelf="stretch"
        position="relative"
        padding="32px 32px 32px 32px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Image
          width="200px"
          height="200px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src={post?.thumbnail}
          {...getOverrideProps(overrides, "866-536x354 1")}
        ></Image>
        <Flex
          gap="32px"
          direction="column"
          width="470px"
          height="221px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="11px 11px 11px 11px"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <Flex
            gap="0"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Title")}
          >
            <Text
              fontFamily="Inter"
              fontSize="48px"
              fontWeight="300"
              color="rgba(0,0,0,1)"
              lineHeight="60px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="448px"
              grow="1"
              basis="448.00006103515625px"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={post?.title}
              {...getOverrideProps(overrides, "News title")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.01px"
            width="448px"
            height="62px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={post?.description}
            {...getOverrideProps(
              overrides,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit egestas libero, consequat blandit eros sollicitudin id."
            )}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
