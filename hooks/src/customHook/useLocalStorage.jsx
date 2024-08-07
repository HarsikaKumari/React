import { useEffect, useState } from 'react';

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}

const useLocalStorage = (key, initialState) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialState);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];

}

export default useLocalStorage;