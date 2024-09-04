'use client'
import { IconType } from "react-icons";
import { Container, Header, HeaderTitle, Total } from "./styles";
interface ResumeItemProps {
  title: string;
  Icon: IconType;
  value: string;
}

export default function ResumeItem({ title, Icon, value }: ResumeItemProps) {
  return (
    <Container>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <Icon />
      </Header>
      <Total>{value}</Total>
    </Container>
  );
}
