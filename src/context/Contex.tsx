import { createContext } from "react";
import type { IContext } from "../interface/Interfaces";

export const Context = createContext<IContext | null>(null);
