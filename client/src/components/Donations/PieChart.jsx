import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Box, Grid, Paper, Stack, Typography, useTheme } from "@mui/material";

export default function Chart({ shrinked }) {
  const theme = useTheme();
  const [chartState, setChartState] = useState({
    series: [60, 40],
    options: {
      chart: {
        type: "donut",
      },
      labels: [
        "used for nutrition supplements and cloth drives for the children and women in slums and remote areas.",
        "used for plantation drives and betterment of society",
      ],
      legend: {
        show: false,
      },
      colors: [theme.palette.primary.main, theme.palette.background.footer],
    },
  });

  return (
    <Box id="chart">
      <Grid container justifyContent="flex-start" alignItems="center">
        <Grid item xs={12} sm={6}>
          <ReactApexChart
            width="100%"
            options={chartState.options}
            series={chartState.series}
            type="donut"
          />
        </Grid>
        <Grid item xs={12} sm={6} alignSelf="stretch">
          <Stack
            justifyContent="space-evenly"
            height="100%"
            mt={shrinked ? (theme) => theme.spacing(4) : 0}
            rowGap={shrinked ? 2 : 0}
          >
            {[
              [
                "60%",
                "used for nutrition supplements and cloth drives for the children and women in slums and remote areas.",
              ],
              ["40%", "used for plantation drives and betterment of society"],
            ].map((item, i) => (
              <Paper
                key={i}
                sx={{
                  p: (theme) => theme.spacing(4),
                  bgcolor: (theme) => theme.palette.background.alternate,
                  boxShadow: "none",
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs={3}>
                    <Typography variant="h3" fontWeight="bolder">
                      {item[0]}
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>{item[1]}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
