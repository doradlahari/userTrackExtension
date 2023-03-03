import { Alert, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

const TrackTime = () => {
  const [url, setUrl] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [url4, setUrl4] = useState("");
  const [url5, setUrl5] = useState("");
  const [url6, setUrl6] = useState("");

  const fetchDataUrl = () => {
    if (!url) {
      setUrl(window.location.href);
      setUrl1(window.location.pathname);
      setUrl2(window.location.port);
      setUrl3(window.location.host);
      setUrl4(window.location.protocol);
      setUrl5(window.location.hostname);
      setUrl6(window.location.origin);
    } else {
      alert("ckeck logic");
    }
  };

  useEffect(() => {
    fetchDataUrl();
  }, []);
  return (
    <div>
      <p> {url} </p>
      <p> {url1} </p>
      <p> {url2} </p>
      <p> {url3} </p>
      <p> {url4} </p>
      <p> {url5} </p>
      <p> {url6} </p>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="outlined" severity="error">
          This is an error alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an info alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="success">
          This is a success alert — check it out!
        </Alert>
      </Stack>
    </div>
  );
};

export default TrackTime;
