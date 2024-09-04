'use client'
import { Container, Header, HeaderTitle, Total } from "./styles"

export default function ResumeItem({ title, Icon, value }) {
  return (
    <Container>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <Icon />
      </Header>
      <Total>{value}</Total>
    </Container>
  )
}