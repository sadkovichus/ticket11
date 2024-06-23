import { useCallback, useState } from "react";


const useStorage = (key: string, initial: any) => {
    const [storageValue, setStorageValue] = useState(() => {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initial;
    })

    const setValue = useCallback((value: any) => {
        setStorageValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [])

    return { storageValue, setValue };
}

export default useStorage;