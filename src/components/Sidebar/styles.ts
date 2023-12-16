import Link from "next/link";
import { styled } from "../../../stitches.config";

export const Container = styled('aside',{
  width:234 ,
  height:'calc(100% - 40px)' ,
  margin:20,
  backgroundColor:'$gray700',
  background: "url('/images/sidebar-bg.png') no-repeat center",
  backgroundSize:'cover',
  borderRadius:'$md',
  display:'flex' ,
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-between',
  paddingTop:'$10',
  paddingBottom:'$6',

  '.logo':{
    width: 128,
    marginBottom:64,
  }
})

export const LoginButton = styled(Link,{
  all:'unset' ,
  color:'$gray100',
  fontWeight:700,
  fontSize:'$md',
  display:'flex' ,
  alignItems:'center',
  gap:'$3' ,
  transition:'0.2s' ,
  cursor:'pointer' ,

  svg:{
    color:'$green100' ,
  },

  '&:hover':{
    fontWeight:'$bold',
    svg:{
      fontWeight:'$bold',
    }
  }
})

export const UserDetails = styled("div",{
  display:'flex' ,
  alignItems:'center',
  gap:'$3' ,

  svg:{
    color:'$red200' ,

    '&:hover':{
      cursor:'pointer' ,
      
        color:'$red100' ,
        scale:1.1 ,
    }
  },
  p:{
    maxWidth:100,
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow :'ellipsis'
  }
})