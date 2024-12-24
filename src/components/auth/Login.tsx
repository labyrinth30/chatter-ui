import {Link} from "react-router-dom";
import {Link as MUILink} from "@mui/material";
import Auth from "./Auth";
import {useLogin} from "../../hooks/useLogin";
import React from "react";

const Login = () => {
    const {login, error} = useLogin();
    return (
        <Auth submitLabel="로그인" onSubmit={async (request) => login(request)}
              error={error}
        >
            <Link to="/signup" style={{alignSelf: "center"}}>
                <MUILink>회원가입 하러가기</MUILink>
            </Link>
        </Auth>
    )

};

export default Login;