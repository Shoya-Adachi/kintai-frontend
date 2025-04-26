import { Box } from "@mui/material";
import KintaiCard from "./components/KintaiCard";
import { KintaiData } from "../../common/types";
import CreateKintaiApi from "../../api/createKintaiApi";

const KintaiInputPage = () => {

    const currentUser = localStorage.getItem("user_id")
    

    const createKintai = async() =>{
        const currentTime = new Date()

        const submitData = {
            user_id: currentUser, 
            start_time: currentTime.toString()
        }

        try {
            const response = await CreateKintaiApi(submitData);

            console.log(response)

        } catch (error) {
            console.error("登録失敗")
        }
    }

    return (
        <Box sx={{width: "100vw", display: "flex", justifyContent:"center", gap: "50px"}}>
            <KintaiCard label="出社" action={createKintai}/>
            <KintaiCard label="退社" action={createKintai}/>
        </Box>
    )
}

export default KintaiInputPage;