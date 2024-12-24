import {useState} from "react";
import {API_URL} from "../constants/urls";
import client from "../constants/apollo-client";

interface LoginRequest {
    email: string;
    password: string;
}

const useLogin = () => {
    const [error,  setError] = useState<boolean>();

    const login = async (requset: LoginRequest) => {
        const response = await fetch(
            `${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requset),
            });
        // 상태코드가 200번대가 아닌 경우
        if (!response.ok) {
            setError(true);
            return;
        }
        setError(false);
        // 로그인 후, 활성 상태의 모든 쿼리를 재패치하여 최신 데이터를 가져옵니다.
        // 왜? 로그인 후, 사용자의 상태가 변경되었을 수 있기 때문이다.
        await client.refetchQueries({ include: "active"});
    };
    return { login, error };
};

export { useLogin };