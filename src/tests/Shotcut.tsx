import { RootState } from '@/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Shotcut() {
  const dispatch = useDispatch();
    const EXPAND  = useSelector((state:RootState) => state.modyfier.EXPAND)
    console.log(EXPAND,dispatch);
  return (
    <div>shotcut</div>
  )
}
