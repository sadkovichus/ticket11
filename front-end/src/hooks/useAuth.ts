import { useState } from "react";
import { StorageName } from "../app/routing/Routing";

const useAuth = (): { status: boolean; data: string; } => {
    const storage = window.localStorage.getItem(StorageName.UserData);
    const [state] = useState<{status: boolean; data: string}>(() => {
        if (storage) return { status: true, data: storage };
        return { status: false, data: '' };
    });

    return state;
};

export default useAuth;
