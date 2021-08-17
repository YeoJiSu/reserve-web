export interface UserFormType {
  data?: string;
  identifier: string;
  password: string;
}

export interface userType {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    role: {
      id: number;
      name: string;
      description: string;
      type: string;
    };
    created_at: string;
    updated_at: string;
    user_id: string;
    tel: string;
    private: boolean;
    third_party: boolean;
    own: boolean;
    permission: number;
    socials: [];
    purchases: [];
    reserve: [];
    company: [];
    follows: [];
  };
  isLogged?: boolean;
}
