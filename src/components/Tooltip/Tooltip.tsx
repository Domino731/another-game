import type {ReactNode} from "react";
import {styled, Tooltip as MuiTooltip} from '@mui/material';
import {tooltipClasses} from '@mui/material/Tooltip';
import {GAME_COLORS} from "../../modules/app/styles/colors.ts";

interface TooltipProps {
    children: ReactNode;
    title: string
}

export const Tooltip = (props: TooltipProps) => {
    const HtmlTooltip = styled(({className, ...props}: TooltipProps) => (
        < MuiTooltip {...props} classes={{popper: className}}/>
    ))(({theme}) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: GAME_COLORS.red2,
            color: GAME_COLORS.white,
            maxWidth: 220,
            fontSize: '16px',
            borderRadius: 0
        },
    }));

    return <HtmlTooltip {...props}/>
}