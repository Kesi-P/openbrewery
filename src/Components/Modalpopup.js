import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid rgb(255,188,0)',
  },
  paper: {
    backgroundColor: 'white',
    border: '2px solid rgb(255,188,0)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Modalpopup(prop) {
    const {open, handleClose,data} = prop
    const handleCloseRequest = (property) => (event) => {
        //sending back the property name
        handleClose(event, property)       
    }
   const classes = useStyles();
 
    return (
        <>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleCloseRequest('close')}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open} > 
                {/* in={open}> */}
              <div className={classes.paper}>
                <h2 id="transition-modal-title" style={{color: 'rgb(255,188,0)'}}>Name: {data.name}</h2>
                <p id="transition-modal-description">Address: {data.address_2}{` `}{data.address_3}{` `}{data.street}{` `}{data.city}
                {` `}{data.state}{` `}{data.country}{` `}{data.postal_code}</p>
                <p id="transition-modal-description">Brewery Type: {data.brewery_type}</p>
                <p id="transition-modal-description">Created At: {data.created_at}</p>
                <p id="transition-modal-description">Phone: {data.phone}</p>
              </div>
            </Fade>
          </Modal>
        </>
    )
}

