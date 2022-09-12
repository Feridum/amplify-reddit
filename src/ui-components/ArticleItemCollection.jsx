/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Post } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ArticleItem from "./ArticleItem";
import { Collection } from "@aws-amplify/ui-react";
export default function ArticleItemCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Post,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ArticleItemCollection")}
    >
      {(item, index) => (
        <ArticleItem
          post={item}
          height="auto"
          width="auto"
          margin="0px 0 0 0px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ArticleItem>
      )}
    </Collection>
  );
}
