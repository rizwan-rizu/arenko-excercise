import Footer from "./footer";
import Header from "./header";

interface iTemplateProps {
  body: any;
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