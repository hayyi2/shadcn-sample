interface AppConfig {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfig = {
    name: "Shadcn Sample",
    github: {
        title: "Shadcn Sample",
        url: "https://github.com/hayyi2/shadcn-sample",
    },
    author: {
        name: "hayyi",
        url: "https://github.com/hayyi2/",
    }
}