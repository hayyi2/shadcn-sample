import { Icons } from "@/components/icons"

interface NavItem {
    title: string
    to?: string
    href?: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
    label?: string
}

interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[]
}

export const mainMenu: NavItemWithChildren[] = [
    {
        title: 'Dashboard',
        to: '/',
    },
    {
        title: 'Layouts',
        items: [
            {
                title: 'Topnav Layout',
                to: '/layout/topnav',
            },
            {
                title: 'Sidenav Layout',
                to: '/layout/sidenav',
            },
        ],
    },
    {
        title: 'Elements',
        items: [
            {
                title: 'Forms',
                to: '/element/forms',
            },
            {
                title: 'Tables',
                to: '/element/table',
            },
            {
                title: 'Widgets',
                to: '/element/widgets',
            },
            {
                title: 'More Components',
            },
            {
                title: 'Components',
                to: '/element/forms',
            },
        ],
    },
    {
        title: 'Pages',
        items: [
            {
                title: 'Empty',
                to: '/empty',
            },
            {
                title: 'Error',
                to: '/error',
            },
            {
                title: 'Auth Pages',
            },
            {
                title: 'Login',
                to: '/auth/login',
            },
            {
                title: 'Register',
                to: '/auth/register',
            },
        ],
    },
]

export const sideMenu: NavItemWithChildren[] = [
    
    {
        title: 'Dashboard',
        to: '/',
    },
    {
        title: 'Layouts',
        items: [
            {
                title: 'Topnav Layout',
                to: '/layout/topnav',
            },
            {
                title: 'Sidenav Layout',
                to: '/layout/sidenav',
            },
        ],
    },
    {
        title: 'Elements UI',
    },
    {
        title: 'Forms',
        to: '/element/forms',
    },
    {
        title: 'Tables',
        to: '/element/table',
    },
    {
        title: 'Widgets',
        to: '/element/widgets',
    },
    {
        title: 'Components',
        to: '/element/forms',
    },
    {
        title: 'Extra UI',
    },
    {
        title: 'Auth Pages',
        items: [
            {
                title: 'Login',
                to: '/auth/login',
            },
            {
                title: 'Register',
                to: '/auth/register',
            },
        ],
    },
    {
        title: 'Empty Page',
        to: '/empty',
    },
    {
        title: 'Error Page',
        to: '/error',
    },
]
