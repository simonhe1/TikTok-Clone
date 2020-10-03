import React, { useState } from "react";
import { AddBox } from "@material-ui/icons";
import "./AddVideo.css";
import { Modal, Backdrop, Fade } from "@material-ui/core";

const AddVideo = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="add_video">
      <AddBox id="add_video_icon" onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="add_video_modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddVideo;
