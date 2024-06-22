"use client";
import React from "react";

export default function Calculated(props) {
  return (
    <div className="flex  flex-col items-center justify-between">
      <div>
        Invested Amount : <b>{parseInt(props.investedAmount)}</b> rs
      </div>
      <div>
        Total Amount : <b>{parseInt(props.totalAmount)}</b> rs
      </div>
      <div>
        Gained Amount :
        <b>{parseInt(props.totalAmount) - parseInt(props.investedAmount)}</b> rs
      </div>
    </div>
  );
}
