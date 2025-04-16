import React, { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "./videoCall.css";

const VideoCall = () => {
  const { id: roomID } = useParams();
  const username = sessionStorage.getItem("username");

  let zpInstance = null;

  const myMeeting = async (element) => {
    const appID = Number(import.meta.env.VITE_APP_ID);
    const serverSecret = import.meta.env.VITE_SERVER_SECRET;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      username
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zpInstance = zp;

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      turnOnMicrophoneWhenJoining: true,
      turnOnCameraWhenJoining: true,
      onLeaveRoom: () => {
        window.location.href = "/";
      },
    });
  };

  useEffect(() => {
    return () => {
      if (zpInstance && typeof zpInstance.leaveRoom === "function") {
        zpInstance.leaveRoom();
      }
    };
  }, [zpInstance]);

  return (
    <>
      <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </>
  );
};

export default VideoCall;
