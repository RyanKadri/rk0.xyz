import { createContext } from "react";

const isProfessorKey = "i.am.gandalf";

export function isProfessor() {
    return typeof localStorage !== "undefined"
        ? localStorage.getItem(isProfessorKey) === "true"
        : false
}

export interface UserSettings {
    isProfessor: boolean;
}

export const UserContext = createContext<UserSettings>({
    isProfessor: false
})