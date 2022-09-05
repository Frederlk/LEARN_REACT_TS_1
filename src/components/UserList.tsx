import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
    const { error, loading, users } = useTypedSelector((state) => state.user);
    // const dispatch = useTypedDispatch(); //1
    const { fetchUsers } = useActions();

    useEffect(() => {
        // dispatch(fetchUsers()); //1
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>Идёт загрузка...</h1>;
    } else if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {users.map((user, i: number) => (
                <div key={user.name + "_" + i}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserList;
