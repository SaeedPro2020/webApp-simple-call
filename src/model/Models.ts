export type userType = {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
}

export type PostType  = {
    id: number;
    user_id: number;
    title: string;
    body: string;
}

export type CommentType = {
    id: number;
    post_id: number;
    name: string;
    email: string;
    body: string;
}


export type missionsType = {
    missions: missionType[]
}


export type missionType = {
    name: string;
    website: string;
    __typename: string;
    manufacturers: string[];
    payloads: missionPayload[];
}

export type missionPayload = {
            orbit: string;
            nationality: string | null;
            manufacturer: string;
            __typename: string;
}