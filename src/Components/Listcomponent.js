import React,{useRef,useEffect} from 'react'
import {IoMdCloseCircle} from "react-icons/io"
import styled from "styled-components"
import gsap from "gsap"
const Content=styled.div`
border-radius:10px;
border:2px solid transparent;
&:hover{
    border:2px solid #48bb78;
}
`
const Listcomponent = ({data,onClick}) => {
    useEffect(() => {
        gsap.from(MyRef.current,{yPercent:-30,duration:1,opacity:0,ease:"Power2.inOut"})
    }, [])
    const MyRef=useRef()
    return (
        <Content className="flex  flex-row justify-between items-center w-full bg-green-200 p-4 m-2 shadow-2xl text-wrap" ref={MyRef}>
           <span className="flex break-words">{data}</span>
           <span>
           <IoMdCloseCircle onClick={()=>(gsap.to(MyRef.current,{opacity:0,duration:1,onComplete:()=>{
               onClick()
               gsap.to(MyRef.current,{opacity:1,duration:1})} }))} size={35} color="#a0aec0" className="cursor-pointer transform hover:scale-125 transition-all duration-300 ease-in-out" width="50px" height="50px"/>
            </span>
        </Content>
    )
}

export default Listcomponent
