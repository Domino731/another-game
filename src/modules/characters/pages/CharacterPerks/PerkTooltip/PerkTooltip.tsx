import {tooltipClasses, TooltipProps} from "@mui/material/Tooltip";
import {Stack, styled, Tooltip, Typography} from "@mui/material";
import {ReactNode} from "react";
import {GAME_COLORS} from "../../../../app/styles/colors";
import type {Perk} from "../utils";

const HtmlTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: GAME_COLORS.black,
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: theme.typography.pxToRem(1),
        border: `0.1em solid ${GAME_COLORS.yellow}`,
        borderRadius: 0,
        padding: '14px'
    },
}));

interface PerkTooltipProps {
    children: ReactNode;
    perk: Perk;
}

export const PerkTooltip = ({children, perk}: PerkTooltipProps) => {
    return <HtmlTooltip title={<Stack direction="column" gap="4px">
        <Typography variant="subtitle2" sx={{fontWeight: 700}} color={GAME_COLORS.white}>{perk.name}</Typography>
        {perk.limitationDescription &&
            <Typography variant="body2" color={GAME_COLORS.red1}>{perk.limitationDescription}</Typography>}
        <Typography variant="body2" color={GAME_COLORS.grey1}
                    dangerouslySetInnerHTML={{__html: perk.description?.replace(/\\n/g, "<br/>")}}/>
    </Stack>}>
        {children}
    </HtmlTooltip>
}