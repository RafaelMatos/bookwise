import { styled } from "../../../stitches.config";

export const Container= styled('main',{
  width:'100%',
  height:'100vh',
  display: 'grid',
  gridTemplateColumns:'auto 1fr',
  background:'$purple200' ,
  
})

export const Content = styled('div',{
  width: '100%',
  height: '100vh',
  maxWidth:996,
  margin:'0 auto' ,
  paddingTop:72,
  background:'$purple100' ,
})