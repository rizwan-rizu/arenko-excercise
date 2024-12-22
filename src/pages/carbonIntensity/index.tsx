import { Container } from "@mui/material";
import Template from "../template";
import DateTimeField from "../../commonComponents/dateTimeField";
import { Dayjs } from "dayjs";

const CarbonIntesity = () => {

  const body = () => (
    <Container>
      <DateTimeField label="From" handleChange={(value: Dayjs) => console.log(value)} />
    </Container>
  )

  return <Template headerTitle="Carbon Intensity" body={body()} />
}

export default CarbonIntesity;