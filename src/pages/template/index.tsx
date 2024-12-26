import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface iTemplateProps {
  body: ReactNode;
  headerTitle: string
}

const Template = (props: iTemplateProps) => {
  const { headerTitle, body } = props;

  return (
    <>
      <Header title={headerTitle} />
      {body}
      <Footer />
    </>
  )
}
export default Template;