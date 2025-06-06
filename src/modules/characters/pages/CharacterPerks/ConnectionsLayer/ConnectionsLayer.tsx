import styles from './ConnectionsLayer.module.scss';

interface Connection {
    className: string
}

const connections: Connection[] = [
    {
        className: styles.connection1
    },
    {
        className: styles.connection2
    },
    {
        className: styles.connection3
    },
    {
        className: styles.connection4
    },
    {
        className: styles.connection5
    },
    {
        className: styles.connection6
    },
    {
        className: styles.connection7
    },
    {
        className: styles.connection8
    },
    {
        className: styles.connection9
    },
    {
        className: styles.connection10
    },
    {
        className: styles.connection11
    },
    {
        className: styles.connection12
    },
    {
        className: styles.connection13
    },
    {
        className: styles.connection14
    },
    {
        className: styles.connection15
    },
    {
        className: styles.connection16
    },
    {
        className: styles.connection17
    },
    {
        className: styles.connection18
    },
    {
        className: styles.connection19
    },
    {
        className: styles.connection20
    },
    {
        className: styles.connection21
    },
    {
        className: styles.connection22
    },
    {
        className: styles.connection23
    },
    {
        className: styles.connection24
    },
    {
        className: styles.connection25
    },
    {
        className: styles.connection26
    },
    {
        className: styles.connection27
    },
    {
        className: styles.connection28
    },
    {
        className: styles.connection29
    },
    {
        className: styles.connection30
    },
    {
        className: styles.connection31
    }
]

export const ConnectionsLayer = () => {
    return <div className={styles.container}>
        {connections.map(({className}) => <span className={`${styles.connectionInactive} ${className}`}/>)}
    </div>
}