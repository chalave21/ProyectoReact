import { Box, Skeleton, Stack } from "@mui/material";
import "./skeleton.css";

export const Skeleton = () => {
  return (
    <div className="skeletonContainer">
      <Stack
        spacing={1}
        sx={{
          boxShadow: "0px 0px 5px grey",
          borderRadius: 3,
          width: 345,
          height: 350,
          overflow: "hidden",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={345}
          height={120}
          animation="wave"
        />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Skeleton variant="text" width={220} height={50} animation="wave" />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Skeleton variant="text" width={250} height={40} animation="wave" />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Skeleton variant="text" width={200} height={40} animation="wave" />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Skeleton
            variant="rectangular"
            width={130}
            height={30}
            animation="wave"
          />
        </Box>
      </Stack>
    </div>
  );
};
