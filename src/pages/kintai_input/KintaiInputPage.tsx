import { Box } from "@mui/material";
import KintaiCard from "./components/KintaiCard";
import CreateKintaiApi from "../../api/createKintaiApi";
import GetKintaiDataApi from "../../api/getKintaiDataApi";
import UpdateKintaiDataApi from "../../api/updateKintaiApi";

const KintaiInputPage = () => {

    const currentUser = localStorage.getItem("user_id")
    

    const entryKintai = async() =>{
        const currentTime = new Date()

        const submitData = {
            user_id: currentUser, 
            time: currentTime.toString()
        }

        try {
            console.log(submitData)
            const response = await CreateKintaiApi(submitData);
            const data = response.data;

            localStorage.setItem("attendance_id", data.id);

        } catch (error) {
            console.error("登録失敗")
        }
    }

    const leavinKintai = async() => { 
        const kintaiDataId = localStorage.getItem("attendance_id");

        try {
            const response = await GetKintaiDataApi(kintaiDataId);
            
            if (response.status == "success") {
                const currentTime = new Date()
                const updateData = {
                    kintai_id: kintaiDataId,
                    time: currentTime.toString()
                }

                try {
                    const updateKintai = async() => {
                        const response = await UpdateKintaiDataApi(updateData)

                        console.log(response.status)
                    }

                    updateKintai();
                     
                } catch {
                    console.error("更新失敗")
                }
            }
            

        } catch (error) {
            console.error("データが見つかりません。")
        }
    }

    return (
        <Box sx={{width: "100vw", display: "flex", justifyContent:"center", gap: "50px"}}>
            <KintaiCard label="出社" action={entryKintai}/>
            <KintaiCard label="退社" action={leavinKintai}/>
        </Box>
    )
}

export default KintaiInputPage;