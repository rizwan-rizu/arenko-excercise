import { Container } from "@mui/material";
import Template from "../template";

const CarbonIntesity = () => {

  const body = () => (
    <Container>
      <h1>lorem</h1>
    </Container>
  )

  return <Template headerTitle="Carbon Intensity" body={body()} />
}

export default CarbonIntesity;