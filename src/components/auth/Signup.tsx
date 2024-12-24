import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import {useCreateUser} from "../../hooks/useCreateUser";

const Signup = () => {
    // useCreateUser를 호출하여 반환된 값을 createUser에 할당한다.
    const [createUser] = useCreateUser();

    return (
        <Auth submitLabel="회원가입하기" onSubmit={async ({ email, password }) => {
            await createUser({
                variables: {
                    createUserInput: {
                        email,
                        password
                    }
                }
            })
        }} >
            <Link to="/login" style={{ alignSelf: "center" }}>
                <MUILink>로그인 하러가기</MUILink>
            </Link>
        </Auth>
    )
};

export default Signup;