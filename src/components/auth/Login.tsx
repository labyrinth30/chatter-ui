import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const Login = () => {
    return (
        <Auth submitLabel="로그인하기" onSubmit={async () => {}} >
            <Link to="/signup" style={{ alignSelf: "center" }}>
            <MUILink>회원가입 하러가기</MUILink>
            </Link>
        </Auth>
    )

};

export default Login;