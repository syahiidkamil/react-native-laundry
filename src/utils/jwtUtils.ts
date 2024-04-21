import {jwtDecode} from 'jwt-decode';

export interface DecodedToken {
  iss: 'string';
  exp: number;
  iat: number;
  userId: string;
  role: string;
  services: string;
}

export const decodeToken = (token: string): DecodedToken | null => {
  try {
    const decodedToken: DecodedToken = jwtDecode(token);
    console.log('decodeToken', decodedToken);

    return decodedToken;
  } catch (error) {
    console.log('Error decoding token:', error);
    return null;
  }
};
