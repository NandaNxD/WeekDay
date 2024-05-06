import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

export default function FilterShimmer() {

  const shimmerList=[1,2,3,4,5,6];

  /**
   * Had to write inline css to get things done faster :(
   */

  return (
    <div style={{width:'100%',display:'flex',flexWrap:'wrap',gap:'3rem',margin:'1rem 0',justifyContent:'center'}}>
      
      {shimmerList.map((value,index) => {
        return (
            <Skeleton key={index} variant="rounded" width={200} height={50} />
        );
      })}
    </div>
  );
}
