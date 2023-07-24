import { useEffect, useRef, useState } from "react";
import { IconButton } from "./button";
import WechatIcon from "../icons/wechat.svg";
import wechatCode from "../imgs/my-wechat.jpg";
import Image from "next/image";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function WechatContant(props: { className?: string }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton icon={<WechatIcon />} onClick={handleClickOpen} shadow />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"加入群聊"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            添加微信好友后发送 “gpt” 等待客服拉群
          </DialogContentText>
          <Image src={wechatCode} alt="My Image" width={200} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
