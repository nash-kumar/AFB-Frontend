export interface Tile {
  firstname: string;
  surname: string;
  mobile: number;
  email: string;
  dob: string;
  password: string;
  gender: string
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
 }