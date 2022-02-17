import { FunctionComponent } from "react";
import { Circle } from "./components";
import "./App.scss";
import { LocalizationProvider } from "@mui/lab";
import AdapterDayjs from "@mui/lab/AdapterDayjs";
import { Dayjs } from "dayjs";

interface Props {}

const App: FunctionComponent<Props> = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App-root">
        <div
          style={{
            position: "fixed",
            top: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Circle>الحرم</Circle>
          <Circle>مكة</Circle>
          <Circle>منى</Circle>
          <Circle>الجمرات</Circle>
          <Circle>عرفات</Circle>
          <Circle>مزدلفة</Circle>
        </div>

        <div
          id="line"
          style={{ height: "150px", width: "100%", border: "1px solid black" }}
        ></div>
      </div>
    </LocalizationProvider>
  );
};

export default App;
