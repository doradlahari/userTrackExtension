import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Facebook,
  GitHub,
  Instagram,
  Telegram,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { Google } from "@mui/icons-material";
import { Grid } from "@mui/material";
import "../homePage/homePage.css";
export default function HomePage() {
  const [url, setUrl] = useState("");

  const fetchDataUrl = () => {
    if (!url) {
      setUrl(window.location.href);
      window.location.href.includes(window.location.href);
    }
  };

  useEffect(() => {
    fetchDataUrl();
  }, []);
  (function () {
    var secondsSpentElement = document.getElementById("seconds-spent");
    var millisecondsSpentElement =
      document.getElementById("milliseconds-spent");

    requestAnimationFrame(function updateTimeSpent() {
      var timeNow = performance.now();

      secondsSpentElement.value = round(timeNow / 1000);
      millisecondsSpentElement.value = round(timeNow);

      requestAnimationFrame(updateTimeSpent);
    });
    var performance = window.performance,
      round = Math.round;
  })();
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={6}>
          <Card>
            <Box>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Time Spent On Social Media
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  It is {new Date().toLocaleString()}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {url}
                </Typography>
                Seconds spent on page:&nbsp;
                <input id="seconds-spent" size="6" readonly="" />
                <br />
                Milliseconds spent here:
                <input id="milliseconds-spent" size="6" readonly="" />
                <Box
                  sx={{
                    boxShadow: 5,
                    width: "8rem",
                    height: "5rem",
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark" ? "#101010" : "#fff",
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                    p: 1,
                    m: 1,
                    borderRadius: 2,
                    textAlign: "center",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                  }}
                >
                  <YouTube />
                  <Facebook />
                  <Instagram />
                  <Twitter />
                  <WhatsApp />
                  <Telegram />
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card>
            <Box>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Time Spent On Social Media
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  It is {new Date().toLocaleString()}
                </Typography>
                <Box
                  sx={{
                    boxShadow: 5,
                    width: "8rem",
                    height: "5rem",
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark" ? "#101010" : "#fff",
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                    p: 1,
                    m: 1,
                    borderRadius: 2,
                    textAlign: "center",
                    fontSize: "0.875rem",
                    fontWeight: "700",
                  }}
                >
                  <GitHub />
                  <Google />
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
