import React, {useState} from "react";

type TablePropsType = {
    number: number
}
export const Table = (props: TablePropsType) => {
    return (
        <div>{props.number}</div>
    )
}