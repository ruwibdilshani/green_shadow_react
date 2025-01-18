import { v4 as uuidv4 } from 'uuid';

export const generateUUID = (firstIndex:string) => {
    const standardUUID = uuidv4();
    const parts = standardUUID.split('-');
    return `${firstIndex}-${parts[0]}-${parts[1]}-${parts[2].substring(0, 5)}`;
}