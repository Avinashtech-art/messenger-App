import { Layout } from 'antd'
import React from 'react'
import styled, { css } from 'styled-components';

const { Header, Footer, Content,Sider } = Layout;

export const ThemeVariable = css`
margin: 10px;
background-color: ${(props) => props.theme.bg};
color:${(props) =>(
    props.theme.fontColor)}; 
`

const CustomHeader = styled(Header)`
${ThemeVariable}
`

const CustomContent = styled(Content)`
${ThemeVariable}
`

const CustomFooter = styled(Footer)`
${ThemeVariable}
`

const CustomSider = styled(Sider)`
 ${ThemeVariable}
background-color: ${(props) => props.theme.bg};
`
const Test = () => {
  return (
    <Layout>
         <CustomSider  >CustomSider</CustomSider>
      <Layout>
    <CustomHeader >Header</CustomHeader>
    <CustomContent >CustomContent</CustomContent>
    {/* <CustomFooter >CustomFooter</CustomFooter> */}
 
    </Layout>
  </Layout>
  )
}

export default Test
