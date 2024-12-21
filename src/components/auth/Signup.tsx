import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const Signup = () => {
    return (
        <Auth submitLabel="회원가입하기" onSubmit={async () => { }} >
            <Link to="/login">
                <MUILink>로그인 하기</MUILink>
            </Link>
        </Auth>
    )
};

export default Signup;