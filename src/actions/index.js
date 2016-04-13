import {
  FETCH_USERS
} from './types';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Giso' },
      { name: 'Andrew' },
      { name: 'Maddy' },
      { name: 'Monroe' },
      { name: 'Jasper' },
    ]
  };
}
