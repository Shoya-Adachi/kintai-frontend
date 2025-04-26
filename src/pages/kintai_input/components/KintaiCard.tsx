import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

type kintaiProps = {
    label: string,
    action: () => void
}

const KintaiCard = ({label, action}: kintaiProps) => {
    return (
        <Card sx={{ width:"400px", height: "300px" }}>
                <CardActionArea
                onClick={action}
                sx={{height: "100%"}}
                >
                    <CardContent sx={{height:"100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Typography variant="h1" component="div">
                        {label}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}

export default KintaiCard;