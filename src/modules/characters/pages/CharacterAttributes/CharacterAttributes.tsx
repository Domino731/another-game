import styles from './CharacterAttributes.module.scss'
import {Box, Typography} from "@mui/material";
import {GAME_COLORS} from "../../../app/styles/colors.ts";
import {Icon, IconName} from "../../../../components/Icon/Icon.tsx";
import clsx from 'clsx';
import {ActionBar} from "./ActionBar/ActionBar.tsx";

interface AttributeTitleProps {
    title: string;
    icon: IconName;
    value: number;
    buttonsPosition: 'top' | 'bottom';
}

const AttributeButtons = ({position}: { position: 'top' | 'bottom' }) => {
    const isBottom = position === 'bottom';
    return (
        <div className={clsx(styles.buttons, isBottom ? styles.buttonsBottom : styles.buttonsTop)}>
            {['-', '+'].map((symbol, index) => (
                <div
                    key={symbol}
                    className={clsx(
                        styles.buttonContainer,
                        isBottom
                            ? index === 0
                                ? styles.buttonContainer1
                                : styles.buttonContainer2
                            : index === 0
                                ? styles.buttonContainer3
                                : styles.buttonContainer4
                    )}
                >
                    <div className={styles.buttonContent}>{symbol}</div>
                </div>
            ))}
        </div>
    );
};

const AttributeTitle = ({title, icon, value, buttonsPosition}: AttributeTitleProps) => (
    <Box
        sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
        }}
    >
        <Typography color={GAME_COLORS.lightBlue} sx={{fontSize: '16px', fontWeight: 400, mb: '18px'}}>
            {title}
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <Icon name={icon} size={48}/>
            <Typography color={GAME_COLORS.lightBlue} sx={{fontSize: '24px', fontWeight: 400}}>
                {value}
            </Typography>
        </Box>
        <AttributeButtons position={buttonsPosition}/>
    </Box>
);

const attributes = [
    {title: 'REFLEX', icon: IconName.ATTRIBUTE_BODY, value: 1, buttonsPosition: 'bottom', class: styles.reflex},
    {title: 'BODY', icon: IconName.ATTRIBUTE_BODY, value: 2, buttonsPosition: 'bottom', class: styles.body},
    {
        title: 'TECHNICAL ATTRIBUTE',
        icon: IconName.ATTRIBUTE_TECHNICAL_ABILITY,
        value: 6,
        buttonsPosition: 'bottom',
        class: styles.technical
    },
    {
        title: 'INTELLIGENCE',
        icon: IconName.ATTRIBUTE_INTELLIGENCE,
        value: 6,
        buttonsPosition: 'top',
        class: styles.intelligence
    },
    {title: 'COOL', icon: IconName.ATTRIBUTE_COOL, value: 6, buttonsPosition: 'top', class: styles.cool},
    {title: 'RELIC', icon: IconName.ATTRIBUTE_RELIC, value: 6, buttonsPosition: 'top', class: styles.relic},
];

export const CharacterAttributes = () => (
    <div className={styles.container}>
        <div className={styles.tree}>
            {attributes.map(({title, icon, value, buttonsPosition, class: wrapperClass}) => (
                <div key={title} className={clsx(styles.wrapper, wrapperClass)}>
                    <div className={clsx(styles.tile, wrapperClass)}>
                        <AttributeTitle title={title} icon={icon} value={value}
                                        buttonsPosition={buttonsPosition as 'top' | 'bottom'}/>
                    </div>
                </div>
            ))}
            <div className={styles.level}>
                <p>20</p>
                <p>LEVEL</p>
            </div>
        </div>
        <ActionBar/>
    </div>
)