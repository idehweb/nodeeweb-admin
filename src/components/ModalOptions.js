import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Row} from "shards-react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {CloseRounded} from "@mui/icons-material";
import Tooltip from '@/components/Tooltip';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:' 80%',
  textAlign: 'center !important',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ModalOptions({
                                       open = false,
                                       onClose,
                                       title,
                                       className,
                                       children,
                                       addToComponents,
                                       Options,
                                       t
                                     }) {

  return (
    <div>
      <Modal
        open={open}
        closeAfterTransition
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        disablebackdropclick="true"
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ width: '100%' }} style={style}>
        <Grid container item spacing={2}>
        <Grid container  spacing={4} columns={12} 
            style={{
              // marginBottom:'20px',
              background:'#464D55',
              color:'#fff',
              padding:'5px 20px',
              borderTopRightRadius:'5px',
              borderTopLeftRadius:'5px',
              }} >
              <Grid xs={2}>
                <span><CloseRounded onClick={onClose} /></span>
              </Grid>
              <Grid xs={10} style={{textAlign:'left'}}>
              <span>Add Element</span>
              </Grid>
          </Grid>
          <Grid container  spacing={4} columns={12} 
            style={{
              // marginBottom:'20px',
              background:'#ffffff',
              color:'#000',
              padding:'20px 20px',
              marginTop:'0px'
              }} >
              <Grid container    columns={{ xs: 2,md:8}} style={{direction:'ltr'}}>
              {/* <Grid container    columns={{ xs: 4, sm: 8, md: 12 }} style={{direction:'ltr'}}> */}
                  {Options && Options.map((option, key) => {
                return <Grid item xs={2} key={key}>
                  <div
                    style={{
                      backgroundColor: '#fff',
                      cursor: 'pointer',
                      color: '#464D55',
                      border:'1px solid #ddd',
                      padding:'10px 25px',
                      height:'60px',
                      fontSize:'10px',
                      display:'flex',
                      lineHeight:'60px'
                    }}
                  onClick={(e) => {
                    addToComponents(option, { optionBox: false })}}
                  >
                    <span><ShowElementIcon type={option.name}/></span>
                    <span
                    style={{
                          display:'block',
                          height:'40px',
                          lineHeight:'40px',
                          textAlign:'center',
                          marginLeft:'10px'
                      }}
                    >{option.label}</span>
                    </div>
                </Grid>
              })} 
              </Grid>
              
          </Grid>
          {/* <Grid 
          //  <Grid container rowSpacing={1}  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
            style={{
              background:'#ffffff',
              // display:'flex',
              width:'100%'
            }}
          >
            dsafsdfsdfsd
           
          </Grid> */}
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
const ShowElementIcon = (props) =>{
  const {type} = props;
 console.log('ShowElementIcon',type);
  if(type === 'button'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M20.5 17h-17A2.502 2.502 0 0 1 1 14.5v-4A2.502 2.502 0 0 1 3.5 8h17a2.502 2.502 0 0 1 2.5 2.5v4a2.502 2.502 0 0 1-2.5 2.5zm-17-8A1.502 1.502 0 0 0 2 10.5v4A1.502 1.502 0 0 0 3.5 16h17a1.502 1.502 0 0 0 1.5-1.5v-4A1.502 1.502 0 0 0 20.5 9zM17 12H7v1h10z"/>
          <path fill="none" d="M0 0h24v24H0z"/>
        </svg>
      </span>
    )
  }
  if(type === 'chatgpt'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
        <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
        </svg>
      </span>
    )
  }
  if(type === 'html'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
        <svg width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" fill="none" width="20" height="20"/>
          <g>
          <path fill="#ffffff" d="M4 16v-2H2v2H1v-5h1v2h2v-2h1v5H4zM7 16v-4H5.6v-1h3.7v1H8v4H7zM10 16v-5h1l1.4 3.4h.1L14 11h1v5h-1v-3.1h-.1l-1.1 2.5h-.6l-1.1-2.5H11V16h-1zM19 16h-3v-5h1v4h2v1zM9.4 4.2L7.1 6.5l2.3 2.3-.6 1.2-3.5-3.5L8.8 3l.6 1.2zm1.2 4.6l2.3-2.3-2.3-2.3.6-1.2 3.5 3.5-3.5 3.5-.6-1.2z"/>
          </g>
          </svg>
      </span>
    )
  }
  if(type === 'navigation'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
          <svg  width="30px" height="30px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/>
            <path fill="#ffffff" d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/>
            <path fill="#ffffff" d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/>
          </svg>
      </span>
    )
  }
  if(type === 'navigationitem'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
          <svg  width="30px" height="30px" viewBox="0 -2 28 28" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="m5.216 11.998c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z"/>
            <path fill="#ffffff" d="m5.216 2.608c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z"/>
            <path fill="#ffffff" d="m5.216 21.389c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z"/>
            <path fill="#ffffff" d="m9.794 0h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/>
            <path fill="#ffffff" d="m9.794 9.39h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/>
            <path fill="#ffffff" d="m9.794 18.781h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/>
          </svg>
      </span>
    )
  }
  if(type === 'searchbar'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Interface / Search_Magnifying_Glass">
          <path  id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          </svg>
      </span>
    )
  }
  if(type === 'conditionsteps' || type === 'conditionstep'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	            width="30px" height="30px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" xmlSpace="preserve">
            <g>
              <path fill="#ffffff" d="M32,30.5v-12v-10v-7C32,0.673,31.323,0,30.491,0h-9.982C19.677,0,19,0.673,19,1.5v5.147
                c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V1.5C20,1.225,20.228,1,20.509,1h9.982C30.772,1,31,1.225,31,1.5V8H11.526
                C10.685,8,10,8.683,10,9.521v6.424c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V9.521C11,9.234,11.236,9,11.526,9H31v9H1.5
                C0.673,18,0,18.673,0,19.5v11C0,31.327,0.673,32,1.5,32h29C31.327,32,32,31.327,32,30.5z M31,30.5c0,0.275-0.224,0.5-0.5,0.5h-29
                C1.224,31,1,30.775,1,30.5v-11C1,19.225,1.224,19,1.5,19H31V30.5z"/>
            </g>
            </svg>
      </span>
    )
  }
  if(type === 'slider'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill="#ffffff" d="M18 7V17C18 17.62 17.98 18.17 17.91 18.66C17.62 21.29 16.38 22 13 22H11C7.62 22 6.38 21.29 6.09 18.66C6.02 18.17 6 17.62 6 17V7C6 6.38 6.02 5.83 6.09 5.34C6.38 2.71 7.62 2 11 2H13C16.38 2 17.62 2.71 17.91 5.34C17.98 5.83 18 6.38 18 7Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             <path fill="#ffffff" d="M6 17.0001C6 17.6201 6.02 18.1701 6.09 18.6601C5.95 18.6701 5.82 18.6701 5.67 18.6701H5.33C2.67 18.6701 2 18.0001 2 15.3301V8.67008C2 6.00008 2.67 5.33008 5.33 5.33008H5.67C5.82 5.33008 5.95 5.33008 6.09 5.34008C6.02 5.83008 6 6.38008 6 7.00008V17.0001Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             <path fill="#ffffff" d="M22 8.67008V15.3301C22 18.0001 21.33 18.6701 18.67 18.6701H18.33C18.18 18.6701 18.05 18.6701 17.91 18.6601C17.98 18.1701 18 17.6201 18 17.0001V7.00008C18 6.38008 17.98 5.83008 17.91 5.34008C18.05 5.33008 18.18 5.33008 18.33 5.33008H18.67C21.33 5.33008 22 6.00008 22 8.67008Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </span>
    )
  }
  if(type === 'text'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Edit / Text">
                <path id="Vector" d="M10 19H12M12 19H14M12 19V5M12 5H6V6M12 5H18V6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
      </span>
    )
  }
  if(type === 'row'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M8.976 3C4.05476 3 3 4.05476 3 8.976L3 15.024C3 19.9452 4.05476 21 8.976 21L15.024 21C19.9452 21 21 19.9452 21 15.024L21 8.976C21 4.05477 19.9452 3 15.024 3L8.976 3Z"
              stroke="#ffffff" stroke-width="2"/>
             <path d="M3 12L21 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M12 21L12 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </span>
    )
  }
  if(type === 'col'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.1" d="M12 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H12V3Z" fill="#ffffff"/>
          <path d="M21 8.976C21 4.05476 19.9452 3 15.024 3H8.976C4.05476 3 3 4.05476 3 8.976V15.024C3 19.9452 4.05476 21 8.976 21H15.024C19.9452 21 21 19.9452 21 15.024V8.976Z" stroke="#ffffff" stroke-width="2"/>
          <path d="M12 3V21" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 12L12 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </span>
    )
  }
  if(type === 'image'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M18 4.25H6C5.27065 4.25 4.57118 4.53973 4.05546 5.05546C3.53973 5.57118 3.25 6.27065 3.25 7V17C3.25 17.7293 3.53973 18.4288 4.05546 18.9445C4.57118 19.4603 5.27065 19.75 6 19.75H18C18.7293 19.75 19.4288 19.4603 19.9445 18.9445C20.4603 18.4288 20.75 17.7293 20.75 17V7C20.75 6.27065 20.4603 5.57118 19.9445 5.05546C19.4288 4.53973 18.7293 4.25 18 4.25ZM6 5.75H18C18.3315 5.75 18.6495 5.8817 18.8839 6.11612C19.1183 6.35054 19.25 6.66848 19.25 7V15.19L16.53 12.47C16.4589 12.394 16.3717 12.3348 16.2748 12.2968C16.178 12.2587 16.0738 12.2427 15.97 12.25C15.865 12.2561 15.7622 12.2831 15.6678 12.3295C15.5733 12.3759 15.4891 12.4406 15.42 12.52L14.13 14.07L9.53 9.47C9.46222 9.39797 9.37993 9.34111 9.28858 9.30319C9.19723 9.26527 9.09887 9.24714 9 9.25C8.89496 9.25611 8.79221 9.28314 8.69776 9.32951C8.60331 9.37587 8.51908 9.44064 8.45 9.52L4.75 13.93V7C4.75 6.66848 4.8817 6.35054 5.11612 6.11612C5.35054 5.8817 5.66848 5.75 6 5.75ZM4.75 17V16.27L9.05 11.11L13.17 15.23L10.65 18.23H6C5.67192 18.23 5.35697 18.1011 5.12311 17.871C4.88926 17.6409 4.75525 17.328 4.75 17ZM18 18.25H12.6L16.05 14.11L19.2 17.26C19.1447 17.538 18.9951 17.7884 18.7764 17.9688C18.5577 18.1492 18.2835 18.2485 18 18.25Z" />
          </svg>
      </span>
    )
  }
  if(type === 'header'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
              width="30px" height="30px" viewBox="0 0 35 32" enableBackground="new 0 0 35 32" xmlSpace="preserve">
                  <g>
                    <path fill="#ffffff" d="M33.5,0h-32C0.673,0,0,0.673,0,1.5v10C0,12.327,0.673,13,1.5,13h32c0.827,0,1.5-0.673,1.5-1.5v-10
                      C35,0.673,34.327,0,33.5,0z M34,11.5c0,0.275-0.224,0.5-0.5,0.5h-32C1.224,12,1,11.775,1,11.5v-10C1,1.225,1.224,1,1.5,1h32
                      C33.776,1,34,1.225,34,1.5V11.5z"/>
                    <path fill="#ffffff" d="M4.5,14.5C4.224,14.5,4,14.724,4,15v15.5C4,31.327,4.673,32,5.5,32h24c0.827,0,1.5-0.673,1.5-1.5V16
                      c0-0.276-0.224-0.5-0.5-0.5S30,15.724,30,16v14.5c0,0.275-0.224,0.5-0.5,0.5h-24C5.224,31,5,30.775,5,30.5V15
                      C5,14.724,4.776,14.5,4.5,14.5z"/>
                    <path fill="#ffffff" d="M9.5,14.5C9.224,14.5,9,14.724,9,15v5.5c0,0.827,0.673,1.5,1.5,1.5h14c0.827,0,1.5-0.673,1.5-1.5V16
                      c0-0.276-0.224-0.5-0.5-0.5S25,15.724,25,16v4.5c0,0.275-0.224,0.5-0.5,0.5h-14c-0.276,0-0.5-0.225-0.5-0.5V15
                      C10,14.724,9.776,14.5,9.5,14.5z"/>
                  </g>
            </svg>
      </span>
    )
  }
  if(type === 'hr'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
         <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Interface / Line_Xl">
          <path id="Vector" d="M12 21V3" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          </svg>
      </span>
    )
  }
  if(type === 'tabs' || type === 'tab'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
        <svg width="30px" height="30px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path fill="#ffffff" d="M14 4v-2h-14v12h16v-10h-2zM10 3h3v1h-3v-1zM6 3h3v1h-3v-1zM15 13h-14v-10h4v2h10v8z">
        </path>
        </svg>
      </span>
    )
  }
  if(type === 'loadmore'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.23852 14.8117C5.63734 16.3002 6.51616 17.6154 7.73867 18.5535C8.96118 19.4915 10.4591 20 12 20C13.5409 20 15.0388 19.4915 16.2613 18.5535C17.4838 17.6154 18.3627 16.3002 18.7615 14.8117" stroke="#ffffff" stroke-width="2"/>
        <path d="M12 13L11.3753 13.7809L12 14.2806L12.6247 13.7809L12 13ZM13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44771 11 4L13 4ZM6.37531 9.78087L11.3753 13.7809L12.6247 12.2191L7.6247 8.21913L6.37531 9.78087ZM12.6247 13.7809L17.6247 9.78087L16.3753 8.21913L11.3753 12.2191L12.6247 13.7809ZM13 13L13 4L11 4L11 13L13 13Z" fill="#ffffff"/>
        </svg>
      </span>
    )
  }
  if(type === 'pagination'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
        <svg width="30px" height="30px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="ic_fluent_phone_pagination_24_regular" fill="#ffffff" fill-rule="nonzero">
                   <path fill="#ffffff" d="M15.75,2 C16.9926407,2 18,3.00735931 18,4.25 L18,19.75 C18,20.9926407 16.9926407,22 15.75,22 L8.25,22 C7.00735931,22 6,20.9926407 6,19.75 L6,4.25 C6,3.00735931 7.00735931,2 8.25,2 L15.75,2 Z M15.75,3.5 L8.25,3.5 C7.83578644,3.5 7.5,3.83578644 7.5,4.25 L7.5,19.75 C7.5,20.1642136 7.83578644,20.5 8.25,20.5 L15.75,20.5 C16.1642136,20.5 16.5,20.1642136 16.5,19.75 L16.5,4.25 C16.5,3.83578644 16.1642136,3.5 15.75,3.5 Z M9.49877889,17.7544525 C9.91299245,17.7544525 10.2487789,18.0902389 10.2487789,18.5044525 C10.2487789,18.9186661 9.91299245,19.2544525 9.49877889,19.2544525 C9.08456533,19.2544525 8.74877889,18.9186661 8.74877889,18.5044525 C8.74877889,18.0902389 9.08456533,17.7544525 9.49877889,17.7544525 Z M11.9987789,17.7544525 C12.4129925,17.7544525 12.7487789,18.0902389 12.7487789,18.5044525 C12.7487789,18.9186661 12.4129925,19.2544525 11.9987789,19.2544525 C11.5845653,19.2544525 11.2487789,18.9186661 11.2487789,18.5044525 C11.2487789,18.0902389 11.5845653,17.7544525 11.9987789,17.7544525 Z M14.4987789,17.7544525 C14.9129925,17.7544525 15.2487789,18.0902389 15.2487789,18.5044525 C15.2487789,18.9186661 14.9129925,19.2544525 14.4987789,19.2544525 C14.0845653,19.2544525 13.7487789,18.9186661 13.7487789,18.5044525 C13.7487789,18.0902389 14.0845653,17.7544525 14.4987789,17.7544525 Z" id="🎨Color">

                  </path>
                          </g>
                      </g>
          </svg>
      </span>
    )
  }
  if(type === 'grid'){
    return (
      <span style={{
                      display:'block',
                      width:'40px',height:'40px',
                      color:'#fff',
                      background:'#464D55',
                      borderRadius:'5px',
                      lineHeight:'40px',
                      textAlign:'center'
        }}>
        <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 32h-10c-1.105 0-2-0.895-2-2v-10c0-1.105 0.895-2 2-2h10c1.105 0 2 0.895 2 2v10c0 1.105-0.895 2-2 2zM30 20h-10v10h10v-10zM30 14h-10c-1.105 0-2-0.896-2-2v-10c0-1.105 0.895-2 2-2h10c1.105 0 2 0.895 2 2v10c0 1.104-0.895 2-2 2zM30 2h-10v10h10v-10zM12 32h-10c-1.105 0-2-0.895-2-2v-10c0-1.105 0.895-2 2-2h10c1.104 0 2 0.895 2 2v10c0 1.105-0.896 2-2 2zM12 20h-10v10h10v-10zM12 14h-10c-1.105 0-2-0.896-2-2v-10c0-1.105 0.895-2 2-2h10c1.104 0 2 0.895 2 2v10c0 1.104-0.896 2-2 2zM12 2h-10v10h10v-10z"></path>
        </svg>
      </span>
    )
  }
return null
}
