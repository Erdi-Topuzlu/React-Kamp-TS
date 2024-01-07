import { Box, Button } from "@mui/material";

type Props = { signIn: any };

const SingedOut = ({ signIn }: Props) => {
  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <Button
          onClick={signIn}
          variant="outlined"
          color="inherit"
          style={{ marginLeft: "5px" }}
        >
          Sign In
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          style={{ marginLeft: "5px" }}
        >
          Sign Up
        </Button>
      </Box>
    </div>
  );
};

export default SingedOut;
