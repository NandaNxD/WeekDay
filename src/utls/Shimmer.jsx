import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

export default function Shimmer() {

  const shimmerList=[1,2,3,4,5,6]

  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:'3rem',rowGap:'100px',marginTop:'1rem',justifyContent:'center'}}>
      
      {shimmerList.map((value,index) => {
        return (
          <Stack spacing={1} key={index}> 
            {/* For other variants, adjust the size with `width` and `height` */}
            <div style={{display:'flex',gap:'1rem'}}>
                <Skeleton variant="circular" width={40} height={40} />
                <div style={{display:'flex',gap:'1rem',flexDirection:'column'}}>
                    <Skeleton variant="rounded" width={350} height={20} />
                    <Skeleton variant="rounded" width={350} height={20} />
                    <Skeleton variant="rounded" width={350} height={20} />
                </div>
            </div>
           
            <Skeleton variant="rounded" width={310} height={100} />
            <Skeleton variant="rounded" width={310} height={50} />
          </Stack>
        );
      })}
    </div>
  );
}
