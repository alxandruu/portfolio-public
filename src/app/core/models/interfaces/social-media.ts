export interface SocialMedia {
    header: string;
    sections: Array<SocialMediaSection>;
}

export interface SocialMediaSection {
    icon: string;
    text: string;
    url: string;
    target: string;
}
