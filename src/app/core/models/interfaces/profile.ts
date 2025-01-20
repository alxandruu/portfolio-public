import { Link } from "./link";
import { SocialMedia } from "./social-media";

export interface Profile {
    name: string;
    img: string;
    ocupation: string;
    about_me: Array<string>;
    social_media: SocialMedia;
}

export interface HomeProfile {
    name: string;
    image: string;
    ocupation: string;
    description_html: string;
    social_media: Array<SocialMedia>;
}