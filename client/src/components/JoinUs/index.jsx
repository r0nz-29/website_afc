import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { loremIpsum } from "lorem-ipsum";
import { useState } from "react";

export default function JoinUs() {
  const [b] = useState(false);
  return (
    <Box sx={{ my: "100px" }}>
      <Container sx={{ border: b && "1px solid blue" }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          border={b && "1px solid red"}
          spacing={4}
        >
          <Typography
            variant="h1"
            fontWeight="bolder"
            color="text.primary"
            border={b && "1px solid red"}
          >
            lorem ipsum dolor sit amet
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            border={b && "1px solid red"}
            maxWidth="600px"
          >
            {loremIpsum()}
          </Typography>
        </Stack>
        <Grid container spacing={4} mt={(theme) => theme.spacing(4)}>
          {[1, 2, 3].map((item, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Paper>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  mb={(theme) => theme.spacing(2)}
                >
                  {loremIpsum()}
                </Typography>
                <Button fullWidth variant="contained">
                  Register
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
