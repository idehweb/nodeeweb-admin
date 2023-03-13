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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center !important',
  cursor: 'pointer',
  color: theme.palette.text.secondary,
}));
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
          <Grid container  spacing={4} columns={12} style={{marginBottom:'20px'}} >

            <Grid xs={10}>
              <Item>{title}</Item>
            </Grid>
            <Grid xs={1}>
              <Item>
                <Tooltip title={('cancel')}>
                  <CloseRounded onClick={onClose} />
                </Tooltip>
              </Item>
            </Grid>
          </Grid>
          <Grid container rowSpacing={1}  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Options && Options.map((option, key) => {
              return <Grid item xs={2} key={key}>
                <Item onClick={(e) => {
                  addToComponents(option, { optionBox: false })}}
                >{option.label}</Item>
              </Grid>
            })}
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
