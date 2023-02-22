import React, { useEffect, useState } from "react";
// import {withTranslation} from "react-i18next";
import { useParams } from "react-router";

import { dFormat, PriceFormat } from "@/functions/utils";
import CustomModal from "@/components/Modal";
import {
  addBookmark,
  clearPost,
  getBlogPost,
  GetBuilder,
  isClient,
  loadPost,
  loveIt,
  MainUrl,
  SaveBuilder,
  savePost
} from "@/functions/index";
import { useDispatch, useSelector } from "react-redux";
// import {ListGroup, ListGroupItem} from "shards-react";
// import "@/assets/nodeeweb-page-builder.css";

const ListGroup = ({ children }) => {
  return <div>{children}</div>;
};
const ListGroupItem = ({ children }) => {
  return <div>{children}</div>;
};
const OptionBox = (props) => {
  let { onClose, open, addToComponents, t, exclude, defaultOptions } = props;
// console.clear();
  let para = useParams();
  let { model } = para;
  // console.log('props',para)
//   let Options=defaultOptions;
  // console.log('exclude',exclude);
  const themeData = useSelector((st) => st.themeData);
  // const dispatch = useDispatch();

  const [Options, SetOptions] = useState(defaultOptions);


  useEffect(() => {
    console.log("use Effect Option box");
    let tempOption = [];

    defaultOptions.forEach((dO) => {
      if (exclude.indexOf(dO.name) === -1) {
        tempOption.push(dO);
      }
    });
    SetOptions(tempOption);
  }, [exclude]);
  useEffect(() => {
    if (themeData && themeData.components) {
      let tempOption = Options;
      themeData.components.forEach((dO) => {

        tempOption.push(dO);

      });
      SetOptions(tempOption);

    }
    //

  }, [themeData]);
  console.log("Options", Options);
  if(model=='form'){
    // SetOptions([])
  }
  console.log("exclude", exclude);
  return (

    <CustomModal onClose={onClose} open={open} className={"width50vw sdfghyjuikol kiuytgfhjuyt modal"}
                 title={("Choose Element")}>
      <ListGroup flush>

        {Options && Options.map((option, key) => {

          return <ListGroupItem className="" key={key}>
            <div className={"block clickable p-3"} onClick={(e) => {
              // console.log('theCom choosed',onClose)
              // onClose();

              addToComponents(option, { optionBox: false });

            }}>
              {JSON.stringify(option.label)}
            </div>
          </ListGroupItem>;
        })}

      </ListGroup>
    </CustomModal>
  );
};
export const PageServer = [
  {}
];
export default (OptionBox);
