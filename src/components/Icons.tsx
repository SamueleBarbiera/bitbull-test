import { SVGProps } from "react";

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
interface IconsProps extends SVGAttributes {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
}

const defaultProps = {
    xmlns: "http://www.w3.org/2000/svg",
    className: "",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round" as "round" | "butt" | "square" | "inherit",
    strokeLinejoin: "round" as "round" | "inherit" | "miter" | "bevel",
};

const mergeProps = (iconName: string, props: IconsProps) => ({
    ...defaultProps,
    ...props,
    className: `${defaultProps.className} ${props.className} ${iconName}`,
});

export const Icons = {
    Calendar: (props: IconsProps) => (
        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9V7a2 2 0 0 1 2-2h2M4 9h16m0 0V7a2 2 0 0 0-2-2h-2m0 0V3m0 2H8m0-2v2"
            ></path>
        </svg>
    ),
    ChevronDown: (props: IconsProps) => (
        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m6 9l6 6l6-6"
            ></path>
        </svg>
    ),
    Circle: (props: IconsProps) => (
        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="#000000"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
            ></path>
        </svg>
    ),
    Check: (props: IconsProps) => (
        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill="#000000" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"></path>
        </svg>
    ),
    DoubleArrowRight: (props: IconsProps) => (
        <svg {...props} width="512" height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                fill="#000000"
                d="m19.164 12l-6.207-6.207l-1.414 1.414L16.336 12l-4.793 4.793l1.414 1.414L19.164 12Zm-5.65 0L7.307 5.793L5.893 7.207L10.686 12l-4.793 4.793l1.414 1.414L13.514 12Z"
            />
        </svg>
    ),
    ChevronRight: (props: IconsProps) => (
        <svg {...props} width="512" height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z" />
        </svg>
    ),
    ChevronLeft: (props: IconsProps) => (
        <svg {...props} width="512" height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6L14 18Z" />
        </svg>
    ),
    DoubleArrowLeft: (props: IconsProps) => (
        <svg {...props} width="512" height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                fill="#000000"
                d="m4.836 12l6.207 6.207l1.414-1.414L7.664 12l4.793-4.793l-1.414-1.414L4.836 12Zm5.65 0l6.207 6.207l1.414-1.414L13.314 12l4.793-4.793l-1.414-1.414L10.486 12Z"
            />
        </svg>
    ),
    EyeNone: (props: IconsProps) => (
        <svg {...props} width="512" height="512" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
            <path
                fill="#000000"
                fillRule="evenodd"
                d="M13.354 2.354a.5.5 0 0 0-.708-.708L10.683 3.61A8.475 8.475 0 0 0 7.5 3C4.308 3 1.656 4.706.076 7.235a.5.5 0 0 0 0 .53c.827 1.323 1.947 2.421 3.285 3.167l-1.715 1.714a.5.5 0 0 0 .708.708l1.963-1.964c.976.393 2.045.61 3.183.61c3.192 0 5.844-1.706 7.424-4.235a.5.5 0 0 0 0-.53c-.827-1.323-1.947-2.421-3.285-3.167l1.715-1.714Zm-3.45 2.035A7.517 7.517 0 0 0 7.5 4C4.803 4 2.53 5.378 1.096 7.5c.777 1.15 1.8 2.081 3.004 2.693L9.904 4.39ZM5.096 10.61L10.9 4.807c1.204.612 2.227 1.543 3.004 2.693C12.47 9.622 10.197 11 7.5 11a7.518 7.518 0 0 1-2.404-.389Z"
                clipRule="evenodd"
            />
        </svg>
    ),
    ArrowUp: (props: IconsProps) => (
        <svg {...props} width="288" height="512" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M4.5 14c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5Z" />
            <path
                fill="#000000"
                d="M8 7.5a.47.47 0 0 1-.35-.15L4.5 4.2L1.35 7.35c-.2.2-.51.2-.71 0c-.2-.2-.2-.51 0-.71l3.5-3.5c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
            />
        </svg>
    ),
    ArrowDown: (props: IconsProps) => (
        <svg {...props} width="288" height="512" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5Z" />
            <path
                fill="#000000"
                d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
            />
        </svg>
    ),
    mixer: (props: IconsProps) => (
        <svg {...props} width="512" height="512" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
            <path
                fill="#000000"
                fillRule="evenodd"
                d="M5.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM3 5c.017 0 .033 0 .05-.002a2.5 2.5 0 0 0 4.9 0A.507.507 0 0 0 8 5h5.5a.5.5 0 0 0 0-1H8c-.017 0-.033 0-.05.002a2.5 2.5 0 0 0-4.9 0A.507.507 0 0 0 3 4H1.5a.5.5 0 0 0 0 1H3Zm8.95 5.998a2.5 2.5 0 0 1-4.9 0A.507.507 0 0 1 7 11H1.5a.5.5 0 0 1 0-1H7c.017 0 .033 0 .05.002a2.5 2.5 0 0 1 4.9 0A.506.506 0 0 1 12 10h1.5a.5.5 0 0 1 0 1H12c-.017 0-.033 0-.05-.002ZM8 10.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"
                clipRule="evenodd"
            />
        </svg>
    ),
    close: (props: IconsProps) => (
        <svg {...props} width="512" height="512" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="m7.5 7.5l6 6m0-6l-6 6" />
        </svg>
    ),
    selected: (props: IconsProps) => (
        <svg {...props} width="512" height="512" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
                fill="#000000"
                d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04l-316.8-316.8a64 64 0 0 1 0-90.496z"
            />
        </svg>
    ),
    loading: (props: IconsProps) => (
        <svg {...props} width="512" height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="mingcuteLoadingLine0" x1="50%" x2="50%" y1="5.271%" y2="91.793%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity=".55" />
                </linearGradient>
                <linearGradient id="mingcuteLoadingLine1" x1="50%" x2="50%" y1="8.877%" y2="90.415%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity=".55" />
                </linearGradient>
            </defs>
            <g fill="none">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path
                    fill="url(#mingcuteLoadingLine0)"
                    d="M8.886.006a1 1 0 0 1 .22 1.988A8.001 8.001 0 0 0 10 17.944v2c-5.523 0-10-4.476-10-10C0 4.838 3.848.566 8.886.007Z"
                    transform="translate(2 2.055)"
                />
                <path
                    fill="url(#mingcuteLoadingLine1)"
                    d="M14.322 1.985a1 1 0 0 1 1.392-.248A9.988 9.988 0 0 1 20 9.945c0 5.523-4.477 10-10 10v-2a8 8 0 0 0 4.57-14.567a1 1 0 0 1-.248-1.393Z"
                    transform="translate(2 2.055)"
                />
            </g>
        </svg>
    ),
    add: (props: IconsProps) => (
        <svg {...mergeProps("lucide-plus w-4 h-4 ", props)}>
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    ),
    attach: (props: IconsProps) => (
        <svg {...mergeProps("lucide-paperclip", props)} width="16" height="16">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
            />
        </svg>
    ),
    delete: (props: IconsProps) => (
        <svg {...mergeProps("lucide-trash-2", props)} width="16" height="16">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"
            />
        </svg>
    ),
    download: (props: IconsProps) => (
        <svg {...mergeProps("lucide-file-down", props)} width="16" height="16">
            <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <path d="M14 2v6h6m-8 10v-6m-3 3l3 3l3-3" />
            </g>
        </svg>
    ),
    edit: (props: IconsProps) => (
        <svg {...mergeProps("lucide-pencil", props)} width="16" height="16">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5L2 22l1.5-5.5Zm-2 2l4 4"
            />
        </svg>
    ),
    file: (props: IconsProps) => (
        <svg {...mergeProps("lucide-file-text", props)} width="16" height="16">
            <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <path d="M14 2v6h6m-4 5H8m8 4H8m2-8H8" />
            </g>
        </svg>
    ),
    mail: (props: IconsProps) => (
        <svg {...mergeProps("lucide-mail", props)} width="16" height="16">
            <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </g>
        </svg>
    ),
    sdi: (props: IconsProps) => (
        <svg {...mergeProps("lucide-landmark", props)} width="16" height="16">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 22h18M6 18v-7m4 7v-7m4 7v-7m4 7v-7m-6-9l8 5H4z"
            />
        </svg>
    ),
    spinner: (props: IconsProps) => (
        <svg {...mergeProps("lucide-loader-2", props)}>
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    ),
    moreMenu: (props: IconsProps) => (
        <svg {...mergeProps("lucide-more-horizontal", props)}>
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    ),
    sorting: (props: IconsProps) => (
        <svg {...mergeProps("lucide-arrow-down-up", props)} width="16" height="16">
            <path d="m3 16 4 4 4-4" />
            <path d="M7 20V4" />
            <path d="m21 8-4-4-4 4" />
            <path d="M17 4v16" />
        </svg>
    ),
    datiesterni: (props: IconsProps) => (
        <svg {...mergeProps("lucide-undo-2", props)}>
            <path d="M9 14 4 9l5-5" />
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
        </svg>
    ),
    report: (props: IconsProps) => (
        <svg {...mergeProps("lucide-bar-chart-2", props)}>
            <line x1="18" x2="18" y1="20" y2="10" />
            <line x1="12" x2="12" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="14" />
        </svg>
    ),
    timeSheet: (props: IconsProps) => (
        <svg {...mergeProps("lucide-grip", props)}>
            <circle cx="12" cy="5" r="1" />
            <circle cx="19" cy="5" r="1" />
            <circle cx="5" cy="5" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
            <circle cx="19" cy="19" r="1" />
            <circle cx="5" cy="19" r="1" />
        </svg>
    ),
    fattura: (props: IconsProps) => (
        <svg {...mergeProps("lucide-file", props)}>
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
        </svg>
    ),
    scandenze: (props: IconsProps) => (
        <svg {...mergeProps("lucide-calendar-check", props)}>
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
            <path d="m9 16 2 2 4-4" />
        </svg>
    ),
    anagrafiche: (props: IconsProps) => (
        <svg {...mergeProps("lucide-folder", props)}>
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
        </svg>
    ),
    user: (props: IconsProps) => (
        <svg {...mergeProps("lucide-users-2", props)}>
            <path d="M14 19a6 6 0 0 0-12 0" />
            <circle cx="8" cy="9" r="4" />
            <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
        </svg>
    ),
    settings: (props: IconsProps) => (
        <svg {...mergeProps("lucide-settings", props)}>
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    ),
    info: (props: IconsProps) => (
        <svg {...mergeProps("lucide-info", props)}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    ),
    dropdown: (props: IconsProps) => (
        <svg {...mergeProps("lucide-chevron-down", props)}>
            <path d="m6 9 6 6 6-6" />
        </svg>
    ),
    menu: (props: IconsProps) => (
        <svg {...mergeProps("lucide-menu", props)}>
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    ),
    logout: (props: IconsProps) => (
        <svg {...mergeProps("lucide-log-out", props)}>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    ),
};
