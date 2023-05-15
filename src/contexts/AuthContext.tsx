import { createContext, useState } from "react";
import { apiAuth } from "../services/api";
import { IAuthContext, User } from "../types/types";

export const AuthContext = createContext<IAuthContext>(null!)