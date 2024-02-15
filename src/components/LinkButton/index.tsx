import { Link } from "expo-router"
import { ILinkButton } from "@/interfaces/components/LinkButton"

export const LinkButton = ({ title, ...rest }: ILinkButton) => {
    return (
        <Link className="text-slate-300 text-center text-base font-body" {...rest}>
            {title}
        </Link>
    )
}
