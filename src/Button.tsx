import React from "react";

type ButtonPropsType = {
    name: string
    callBack: () => void
    disable: boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
        <button
            onClick={props.callBack}
            disabled={props.disable}
        >
            {props.name}
        </button>
    )
}