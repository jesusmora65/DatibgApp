import { Photo } from "./photo.model";

export class Member{
    id:number;
    userName: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    create: Date;
    lastActive: Date;
    gender: string;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
}