import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import KintaiLayout from "../../Layout";
import { useEffect, useState } from "react";
import { GetAllKintaiDataApi } from "../../api/getKintaiDataApi";
import dayjs from "dayjs";

type Kintai = {
  date: string;
  startTime: string;
  endTime: string;
};

const KintaiList = () => {
  const columns = ["日付", "出社時間", "退社時間"];

  const [data, setData] = useState<Kintai[]>();

  const formatData = (raw: Kintai) => {
    return {
      ...raw,
      startTime: dayjs(raw.startTime).format("HH:mm"),
      endTime: dayjs(raw.endTime).format("HH:mm"),
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllKintaiDataApi();
        const formatted = response.map(formatData);
        setData(formatted);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <KintaiLayout>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 550 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index} align="center">
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((kintai, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{kintai.date}</TableCell>
                  <TableCell align="center">{kintai.startTime}</TableCell>
                  <TableCell align="center">{kintai.endTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </KintaiLayout>
  );
};

export default KintaiList;
