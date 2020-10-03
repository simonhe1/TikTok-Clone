import React, { useState } from "react";
import { AddBox } from "@material-ui/icons";
import "./AddVideo.css";
import { Modal, Fade } from "@material-ui/core";

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
      >
        <Fade in={open}>
          <div className="modal_box">
            <h2 id="modal_username">@larrygao</h2>
            <h2>Description</h2>
            <textarea id="description" />
            <h2>Song</h2>
            <input type="text" id="song" />
            <input type="file" accept="video/*" />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddVideo;
