import React, { useRef, useState,Fragment } from "react";
// import {withTranslation} from "react-i18next";
import { dFormat, PriceFormat } from "@/functions/utils";
// import "@/assets/styles/nodeeweb-page-builder.css";
import { Button } from "shards-react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddIcon from "@mui/icons-material/Add";
import CreateForm from "@/components/form/CreateForm";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from "@mui/icons-material/Close";
import {MoveIconSvg,EditIconSvg,CloseIconSvg,AddIconSvg} from "./base/Icon";
// import { useDrag } from 'react-dnd'
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
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../functions";
// import {SnapChatIcon} from "@/assets/index";

const Component = (props) => {
  let {
    index,
    component,
    moveContent,
    deleteItem,
    changeComponentSetting,
    toggleComponentOptionsBox,
    setSourceAddress,
    toggleOptionBox,
    moveItem,
    length,
    address = 0,
    setExcludeArray,
    child
  } = props;
  let { settings = {} } = component;
  let { general = {} } = settings;
  let { fields = {} } = general;
  let { text = "" } = fields;
  console.log('Elementttttttttt',component);
  let [dragElement, setDragElement] = useState(null);
  let [enterElement, setEnterElement] = useState(null);
  const [componentForSetting, setComponentForSetting] = useState(false);
  const returnArrayOfComponent = (component) => {
    let tempArr = [];
    let xx = 1;
    if (component.settings && component.settings.general && component.settings.general.fields && component.settings.general.fields.colCount) {
      xx = parseInt(component.settings.general.fields.colCount);
    }
    for (let i = 0; i < xx; i++) {
      tempArr.push({});
      // let index=findItem(component.id);
      // component.children=tempArr;
      // components[index]=component;
      // setComponents(components);
    }
    // } else {
    // tempArr.push({});
    // }
    // console.log('===> response', tempArr)
    return tempArr;
  };
  // const handleDelete = (id) => {
  //   console.log('handleDelete...', id)
  //   deleteItem(id);
  //
  //
  // };
  const dragItem = useRef();
  const dragOverItem = useRef();
  // const [collected, drag, dragPreview] = useDrag(() => ({
  //   type,
  //   item: { id }
  // }))
  const dragStart = (e, component) => {
    // dragItem.current = position;
    if (dragElement == null) {
      dragElement = component.id;
      console.log("dragStart: ", component.id);
      setDragElement(component.id);
    }
  };
  const dragEnter = (e, component) => {
    console.log("dragEnter: ", component.id);
    setEnterElement(component.id);
  };
  const onDrop = (e) => {
    // if (dragElement && e.id) {
    console.log("drop on id => dragElement:", dragElement, "     enterElement:", enterElement, "       this.id:", e.id);
    setDragElement(null);
    setEnterElement(null);

    // }
  };
  const [{ isOver, canDrop }, drop] = useDrop({
      accept: ItemTypes.KNIGHT,
      drop: (item, monitor) => {
        // console.log("item:", item, "monitor:", monitor.getItem());
        return ({ id: component.id });
      },
      // canDrop: () => canMoveKnight(x, y),
      collect: (monitor) => {
        // console.log('props',props)
        return ({
          isOver: !!monitor.isOver()
          // canDrop: !!monitor.canDrop()
        });
      }
    });
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    item: { id: component.id },
    end: (item, monitor) => {
      let res = monitor.getDropResult();
      console.log('Reeeessssss',item);
      moveItem(item.id, res.id);
    },
    collect: (monitor) => {

      return ({
        isDragging: !!monitor.isDragging()
      });
    }
  }));
  return (
    <Fragment>
        {/* <section className={'nodeweb-element-wrapper'}>


        </section> */}
      <div className={"nodeweb-element-wrapper"} id={component.id}>
        <div className={'element-header'}>
            <span>Element:&nbsp;&nbsp; {component.name + " " + (index + 1)}</span>
            {/* <span>Element:&nbsp;&nbsp; {component.name + " " + (index + 1)} &nbsp;&nbsp;&nbsp; Component:{"#" + component.id}</span> */}
        </div>
        <div className={'controller'}>
          <span className={'move'} style={{border:'1px solid #ddd',padding:'1px 3px',cursor:'grab'}}>
            <MoveIconSvg width="15px" height="15px" background="#464D55"/>
          </span>
          <span
          onClick={()=>setComponentForSetting(!componentForSetting)}
           className={'edit'} style={{border:'1px solid #ddd',borderTop:'none',padding:'1px 3px',cursor:'pointer'}}>
            <EditIconSvg width="15px" height="15px" fill="none"  background="#464D55"/>
          </span>
        </div>
        <div className={'content'}>
          {/* {
            component.addable === false &&(
              <ShowSingleElement component={component}/>
            )
          } */}
        {!componentForSetting && <div
        >

          {component.addable && <div className={"add-part p-2 name-" + component.name}>
            <div className={"element-wrapper-child"}>
              {Boolean(component.children && (component.children instanceof Array)) && component.children.map((comp, jj) => {
                return (<Component
                  key={jj}
                  index={jj}
                  component={comp}
                  moveItem={moveItem}
                  moveContent={moveContent}
                  setComponentForSetting={setComponentForSetting}
                  toggleComponentOptionsBox={toggleComponentOptionsBox}
                  setExcludeArray={() => setExcludeArray([])}
                  changeComponentSetting={(e, j, d) => changeComponentSetting(e, j, d)}
                  deleteItem={(e) => {
                    setComponentForSetting(false);
                    deleteItem(e);
                  }}
                  toggleOptionBox={toggleOptionBox}
                  length={component.children.length}
                  address={component.id + "_" + jj}
                  child={true}
                />);
              })}
            </div>
          </div>}




         
        </div>}
        {/*StartModalSetting*/}
        {componentForSetting && <div draggable={true} className={"component-set-for-setting"} >
          <div className={"csfs-a"}>
            <div className={"csfs-c"}>
              <div className={"top-bar-settings"}>
                <Button className={"closeIcon"} onClick={() => {
                  setComponentForSetting(!componentForSetting);
                  }}><CloseIcon/>
                </Button>
                <Button
                  className={"redxxx"}
                  onClick={(e) => {
                    e.preventDefault();
                    setComponentForSetting(false);
                    deleteItem(component.id);
                  }}>
                  <DeleteForeverIcon/>{("Delete")}
                </Button>
              </div>
              <div className={"bottom-bar-settings"} >
                {/*{JSON.stringify(component.settings.general.fields)}*/}
                {component.settings && component.settings.general && <CreateForm
                  onSubmit={(e) => {
                    changeComponentSetting(component, "general", e);
                    setComponentForSetting(!componentForSetting);
                  }}
                  rules={{ fields: component.settings.general.rules }}
                  buttons={[]}
                  componentType={component.name}

                  fields={component.settings.general.fields}/>}
              </div>
            </div>
          </div>
        </div>}
        </div>
        <div className={'element-footer'}>
        <div>
          <span style={{cursor:'pointer'}}
            onClick={(e) => {
              e.preventDefault();
              setComponentForSetting(false);
              deleteItem(component.id);
            }}
          ><CloseIconSvg width="20px" height="20px"  background={'#464D55'}/></span>
          <span style={{margin:'0px 10px',cursor:'pointer'}}
            onClick={()=>setComponentForSetting(!componentForSetting)}
          
          ><EditIconSvg width="15px" height="15px" background={'#464D55'}/></span>
          {
            component.addable && (
              <span style={{cursor:'pointer'}}
              onClick={(e) => {
                let address = component.id + "_";
                let mainAddress = address.split("_");
                let update = { sourceAddress: component.id };
                if (mainAddress[4]) {
                  update["excludeArray"] = ["row"];
                } else {
                  update["excludeArray"] = [];
                }
                toggleOptionBox(update);
              }}
              
              ><AddIconSvg width="15px" height="15px" fill="#464D55"/></span>
            )
          }
         
        </div>
        </div>
      </div>
      
    </Fragment>
  );
};
const ShowSingleElement = (props) =>{
  const {component} = props
  const type = component.name;
  const {settings} = component;
  const {general} = settings;
  const {fields} = general;
  switch(type){
    case 'button':
      return <button style={{
        textAlign:'center',
        padding:'8px 20px',
        margin:'10px',
        borderRadius:'8px'
      }}>
        {fields.text}
        {/* <span style={{flexBasis: '90%',margin:'10px'}}>value: {fields.text}</span>
        <span
          style={{
            flexBasis: '10%',
            padding:'10px 12px',
            borderRadius:'10px',
            background:'#464C54',
            color:'#fff'
          }}
        
        ><AddIconSvg width="15px" height="15px" fill="#ffffff"/></span> */}
      </button>
  }
return(
  <>

  </>
)
}
export const PageServer = [
  {}
];
export default (Component);
