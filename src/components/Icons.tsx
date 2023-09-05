import {
    AlarmClock,
    AlertTriangle,
    ArrowDown,
    ArrowUp,
    BarChart3,
    CalendarDays,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    ChevronsUpDown,
    ChevronUp,
    Circle,
    Copy,
    CreditCard,
    Crop,
    DollarSign,
    Download,
    Edit,
    Eye,
    EyeOff,
    FileTerminal,
    Filter,
    Footprints,
    HardHat,
    Image,
    Loader2,
    LogOut,
    Menu,
    MessageSquare,
    Minus,
    Moon,
    MoreHorizontal,
    MoreVertical,
    Package,
    Plus,
    PlusCircle,
    RefreshCw,
    Search,
    Send,
    Settings,
    Shirt,
    ShoppingBag,
    ShoppingCart,
    Sliders,
    SlidersHorizontal,
    Star,
    SunMedium,
    Trash,
    Twitter,
    UploadCloud,
    User,
    Volume2,
    VolumeX,
    Wallet,
    X,
} from "lucide-react";
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
    sun: SunMedium,
    moon: Moon,
    star: Star,
    twitter: Twitter,
    close: X,
    spinner: Loader2,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    chevronsLeft: ChevronsLeft,
    chevronsRight: ChevronsRight,
    chevronUp: ChevronUp,
    chevronDown: ChevronDown,
    chevronUpDown: ChevronsUpDown,
    arrowUp: ArrowUp,
    arrowDown: ArrowDown,
    menu: Menu,
    verticalThreeDots: MoreVertical,
    horizontalThreeDots: MoreHorizontal,
    verticalSliders: Sliders,
    horizontalSliders: SlidersHorizontal,
    circle: Circle,
    check: Check,
    add: Plus,
    addCircle: PlusCircle,
    remove: Minus,
    view: Eye,
    hide: EyeOff,
    trash: Trash,
    edit: Edit,
    crop: Crop,
    reset: RefreshCw,
    send: Send,
    copy: Copy,
    downlaod: Download,
    warning: AlertTriangle,
    search: Search,
    filter: Filter,
    alarm: AlarmClock,
    calendar: CalendarDays,
    user: User,
    terminal: FileTerminal,
    settings: Settings,
    logout: LogOut,
    volumne: Volume2,
    volumneMute: VolumeX,
    message: MessageSquare,
    billing: CreditCard,
    wallet: Wallet,
    dollarSign: DollarSign,
    cart: ShoppingCart,
    product: Package,
    chart: BarChart3,
    upload: UploadCloud,
    placeholder: Image,
    clothing: Shirt,
    shoes: Footprints,
    accessories: HardHat,

    nextjs: (props: IconsProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
            />
        </svg>
    ),
    gitHub: (props: IconsProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    logo: (props: IconsProps) => (
        <svg width="512" height="512" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="#000000"
                fillRule="evenodd"
                d="M6.229.199a8 8 0 0 1 9.727 6.964a.75.75 0 0 1-1.492.157a6.5 6.5 0 1 0-7.132 7.146a.75.75 0 1 1-.154 1.492a8 8 0 0 1-.95-15.76Zm5.051 10.02a.75.75 0 1 0-1.06 1.061L11.94 13l-1.72 1.72a.75.75 0 1 0 1.06 1.06L13 14.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L14.06 13l1.72-1.72a.75.75 0 1 0-1.06-1.06L13 11.94l-1.72-1.72Zm.25-3.939a.75.75 0 0 0-1.06-1.06L6.5 9.19L5.28 7.97a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l4.5-4.5Z"
                clipRule="evenodd"
            />
        </svg>
    ),
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
};
