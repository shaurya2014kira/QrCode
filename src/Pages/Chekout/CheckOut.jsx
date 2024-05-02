import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import hrmsApi from "../../api/hrmsApi";
import { decryptData } from "../../utils/encrypt"


export const CheckOut = () => {
  const deparment = useMutation({
    mutationFn: hrmsApi.getDepartment
  })
  useEffect(() => {
    deparment.mutate({}, {
      onSuccess: (data) => {
        console.log("data", data)
        const def = decryptData(data.data)
        console.log("def", def.data)
      }
    })
  }, [])
  return (
    <div>

      check out
    </div>
  )
}
