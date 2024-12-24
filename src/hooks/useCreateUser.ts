// apollo client로 user create mutation을 호출하는 useCreateUser hook을 작성해보자.
import {gql, useMutation} from "@apollo/client";
import {User} from "../models/User";

interface CreateUserInput {
    createUserInput: {
        email: string;
        password: string;
    }
}

/**
 * gql을 사용하면 ts로 gql문을 작성할 수 있다.
 * CreateUser는 mutation의 이름으로, 클라이언트가 이 mutation을 호출할 때 사용한다.
 * ($createUserData: CreateUserInput!)는 mutation의 인자로, CreateUserInput 타입의 변수를 받는다.
 * createUser는 서버에서 정의된 mutation의 실제 함수 이름이다.
 * createUser는 _id와 email을 반환한다.
 */


const CREATE_USER = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
        _id
        email
       }
    }
`;

const useCreateUser = () => {
    // useMutation hook을 사용하여 createUser mutation을 호출하는 함수를 반환한다.
    // 첫 번째 제네릭은 반환될 타입, 두 번째는 mutation에 필요한 입력 데이터의 형식을 의미함.
    return useMutation<User, CreateUserInput>(CREATE_USER);
}

export { useCreateUser };