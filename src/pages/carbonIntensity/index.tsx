import { Checkbox, Container, FormControlLabel, Stack } from "@mui/material";
import Template from "../template";
import DateTimeField from "../../commonComponents/dateTimeField";
import { Dayjs } from "dayjs";
import CheckBox from "../../commonComponents/checkbox";

const CarbonIntesity = () => {

  const body = () => (
    <Container>
      <Stack direction="row" spacing={2}>
        <DateTimeField label="From" handleChange={(value: Dayjs) => console.log(value)} />
        <DateTimeField label="To" handleChange={(value: Dayjs) => console.log(value)} />
        <CheckBox size="medium" defaultChecked={false} label="Actual" handleChange={(value: boolean) => console.log(value)} />
        <CheckBox size="medium" defaultChecked={false} label="Forecasted" handleChange={(value: boolean) => console.log(value)} />
      </Stack>
    </Container>
  )

  return <Template headerTitle="Carbon Intensity" body={body()} />
}

export default CarbonIntesity;