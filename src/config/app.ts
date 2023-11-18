interface AppConfig {
    name: string,
    github: {
        title: string,
        url: string
    },
}

export const appConfig: AppConfig = {
    name: "Shadcn Sample",
    github: {
        title: "Shadcn Sample",
        url: "https://github.com/hayyi2/shadcn-sample",
    }
}