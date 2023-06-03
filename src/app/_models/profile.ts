export interface Profile {
    name: string;
    img: string;
    ocupation: string;
    about_me: Array<string>;
    social_media: SocialMedia;
}


interface SocialMedia {
    header: string;
    sections: Array<SocialMediaSection>;
}

interface SocialMediaSection {
    icon: string;
    text: string;
    url: string;
}