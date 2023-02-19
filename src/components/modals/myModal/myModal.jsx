import React, {cloneElement} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: 300, md: 400},
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  fontSize: {xs: "14px", md: "20px"},
  transition: 'transform 3s'
};

export const MyModal = ({modalOpen, setModalOpen, children}) => {
  const handleClose = () => setModalOpen(false);

  children = cloneElement(children, {...children.props, handleClose});

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {backdropFilter: 'blur(10px)'}
        },
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
      >
        {children}
      </Box>
    </Modal>
  );
};
