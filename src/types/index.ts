import { Session, User, WeakPassword } from "@supabase/supabase-js";

export interface formDataProps {
    first_name?: string
    email: string
    password: string
}



export interface  DataProps {
    user: User;
    session: Session;
    weakPassword?: WeakPassword | undefined;
}