import React from "react"

export function Heading(props: any) {
    return(
        <div className="container px-[235px] mx-auto">
            <h1 className="text-center text-[48px] text-[#5501EE] font-bold pt-[195px] pb-[40px]">{props.heading}</h1>
            <p className="text-[20px] text-[#5501EE]">{props.title}</p>
        </div>
    )
}