import { Logo } from "@/assests";
import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
const AuthLogo = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} mb={5}>
      <Stack sx={{ width: "300px" }}>
        <Image
          src={Logo}
          layout="responsive"
          width={150}
          height={70}
          alt="tender-logo"
        />
      </Stack>
    </Stack>
  );
};

export default AuthLogo;
