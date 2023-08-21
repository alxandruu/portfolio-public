import { RegisterConstants, ResourcesConstants } from "./models/interfaces"

export const portfolioImageURL: string = "portfolio.jpg"

export const registerConstants: RegisterConstants = {
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

export const resourcesConstants: ResourcesConstants = {
    viewerCookie: "resources-viewer",
    default_category: {
        id: 'c0',
        name: 'All Categories'
    }
}

