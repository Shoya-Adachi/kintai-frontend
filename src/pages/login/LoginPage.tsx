import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginApi from "../../api/loginApi";
import { LoginFormInputs } from "../../common/types";

const LoginnPage = () => {
const navigate = useNavigate();

const { handleSubmit, control} = useForm<LoginFormInputs>();

const onSubmit = async (data:LoginFormInputs) => {
    try {
         const response = await LoginApi(data);

         // トークンをlocalStorageに保存
        localStorage.setItem("token", response.token);
        localStorage.setItem("user_id", response.user_id);

         navigate("/home")
        
    } catch (error) {
        console.error("ログイン失敗")
    } 
    
}

    return (
            <Box sx={{ bgcolor: '#0066CC', minWidth: '100vw', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid>
                <Paper sx={{width: 400, padding: 10}}>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <h1>Kintai</h1>
                        <Controller
                            render={({ field }) => <TextField {...field} required label="ユーザー名"/>}
                            name="name"
                            control={control}
                            defaultValue=""
                        />
                        <Controller
                            render={({ field }) => <TextField {...field} required label="パスワード"/>}
                            name="password"
                            control={control}
                            defaultValue=""
                        />
                        <Button variant="contained" type="submit">ログイン</Button>
                    </form>
                </Paper>
            </Grid>
        </Box>
        
    )
}

export default LoginnPage;