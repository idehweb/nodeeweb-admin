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
    deleteItem,
    changeComponentSetting,
    toggleComponentOptionsBox,
    setSourceAddress,
    toggleOptionBox,
    length,
    address = 0,
    setExcludeArray,
    child
  } = props;
  let { settings = {} } = component;
  let { general = {} } = settings;
  let { fields = {} } = general;
  let { text = "" } = fields;
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
  
  const moveContent = (thisKey, theDestinationKey, address = 0) => {
    if (address === 0) {
      let tempContent = component[theDestinationKey];
      component[theDestinationKey] = component[thisKey];
      component[thisKey] = tempContent;
      setState({ ...state, components: component });
    } else {
      address = address.split("_");
      if (address[0] === "component") {
        address.shift();
        let theNewComponents = components;
        let mainAddress = address;
        theNewComponents.forEach((comp, inde) => {
          let the_id = "component_" + mainAddress[0];

          console.log("the_id", the_id, comp.id);
          if (!theNewComponents[inde].children) {
            theNewComponents[inde].children = [];
          }
          if (comp.id === the_id) {
            console.log(inde, " ==> ", theDestinationKey, " in:", mainAddress[1]);
            console.log(theNewComponents[inde].children[mainAddress[1]]);
            let tempContent = theNewComponents[inde].children[mainAddress[1]][theDestinationKey];
            console.log("tempContent", tempContent);
            theNewComponents[inde].children[mainAddress[1]][theDestinationKey] = theNewComponents[inde].children[mainAddress[1]][thisKey];
            theNewComponents[inde].children[mainAddress[1]][thisKey] = tempContent;
          }
        });
        setState({ ...state, components: theNewComponents });
      }
    }
  };
  const moveItem = (id,dest) => {
    let moveCurrentItem = [];
    let pushCurrentItem = [];
    let completeComponent = components;
    completeComponent.forEach((component)=>{
      if(component.id === id){
        moveCurrentItem.push(component);
      }else if(component.children){
        component.children.forEach((subCom)=>{
          if(subCom.id === id){
            moveCurrentItem.push(subCom);
          }else if(subCom.children){
            subCom.children.forEach((subAny)=>{
              if(subAny.id === id){
                moveCurrentItem.push(subAny);
              }
            })
          }
        })
      }
    })
    completeComponent.forEach((component)=>{
      if(component.id === dest){
        pushCurrentItem.push(component)
      }else if(component.children){
        component.children.forEach((child)=>{
          if(child.id === dest){
            pushCurrentItem.push(child)
          }else if(child.children){
              child.children.forEach((subChild)=>{
                if(subChild.id === dest){
                  pushCurrentItem.push(subChild)
                }
              })
          }
        })
      }
    })
if(pushCurrentItem){
  pushCurrentItem.forEach(push=>{
    if(push.hasOwnProperty('children')){
      push.children.push(moveCurrentItem[0]);
      completeComponent.splice(completeComponent.findIndex(a => a.id === id) , 1)
    }else{
      Object.assign(push,{children:moveCurrentItem})
      completeComponent.splice(completeComponent.findIndex(a => a.id === id) , 1)
    }
  })

}
    setState({ ...state, components: completeComponent });
  };
  return (
    <Fragment>
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
                  // moveItem={moveItem}
                  // moveContent={moveContent}
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
