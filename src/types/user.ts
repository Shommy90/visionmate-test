export interface User {
  picture: {
    large: string;
    thumbnail: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    street: {name: string; number: number};
    city: string;
    postcode: number;
  };
  email: string;
  login: {
    username: string;
    uuid: string;
  };
}

export interface UserInfo {
  picture: {large: string};
  name: {
    first: string;
    last: string;
  };
  login: {username: string};
  location: {
    city: string;
    postcode: number;
    street: {name: string; number: number};
  };
}
