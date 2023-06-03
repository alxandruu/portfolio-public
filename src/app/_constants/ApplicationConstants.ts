import { Category } from "../_models/category";

export class ApplicationConstants {
    static readonly portfolioImageURL: string = "portfolio.jpg"

    static readonly registerConstants: RegisterConstants = {
        types: {
            success: "success",
            warning: "warning",
            danger: "danger",

        },
        actions: {
            create: "create",
            modify: "modify",
            delete: "delete",
            login: "login"
        }
    }

    static readonly resourcesConstants: ResourcesConstants = {
        viewerCookie: "resources-viewer",
        default_category: {
            id: 'c0',
            name: 'All Categories'
        },
    }
}

interface ResourcesConstants {
    viewerCookie: string;
    default_category: Category;
}

interface RegisterConstants {
    types: {
        success: string;
        warning: string;
        danger: string;
    },
    actions: {
        create: string;
        modify: string;
        delete: string;
        login: string;
    }
}
