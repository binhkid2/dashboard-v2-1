import PocketBase from 'pocketbase';
export const pbUrl=import.meta.env.VITE_POCKETBASE
export const pb = new PocketBase(pbUrl);