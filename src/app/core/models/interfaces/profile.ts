import { SocialMedia } from "./social-media";

export interface Profile {
    name: string;
    img: string;
    ocupation: string;
    about_me: Array<string>;
    social_media: SocialMedia;
}

export const EMPTY_PROFILE: Profile = {
    img: '',
    name: '',
    about_me: [],
    ocupation: '',
    social_media: {
        header: '',
        sections: []
    }
}