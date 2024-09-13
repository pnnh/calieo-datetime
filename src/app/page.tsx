import React from 'react'
import * as stylex from '@stylexjs/stylex';
import {TimestampHelper} from "@/app/timestamp";
import {shareStyles} from "@/app/style";

const styles = stylex.create({
    pageTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    timestampTable: {
        width: '100%',
        marginBottom: '1rem',
        padding: 0,
        display: 'table',
        borderTop: '0.25px solid #f0f0f0',
        borderLeft: '0.25px solid #f0f0f0',
    },
    tableRow: {
        padding: 0,
        textAlign: 'left',
        display: 'table-row',
    },
    rowLabel: {
        fontSize: '1.1rem',
        fontWeight: 'bolder',
        width: '10rem',
        display: 'table-cell',
        alignItems: 'center',
        padding: '0.5rem',
        borderRight: '0.25px solid #f0f0f0',
        borderBottom: '0.25px solid #f0f0f0',
    },
    tableCell: {
        padding: '0.5rem',
        display: 'table-cell',
        borderRight: '0.25px solid #f0f0f0',
        borderBottom: '0.25px solid #f0f0f0',
    },
});

export default function AppIndex() {
    const now = new Date()
    const timestamp = Math.floor(now.getTime() / 1000)
    return <div {...stylex.props(
        shareStyles.pageRoot,
    )}>
        <h1 {...stylex.props(
            styles.pageTitle,
        )}>时间戳工具
        </h1>
        <div {...stylex.props(
            styles.timestampTable,
        )}>
            <div {...stylex.props(
                styles.tableRow,
            )}>
                <div {...stylex.props(
                    styles.rowLabel,
                )}>当前的时间戳是
                </div>
                <div {...stylex.props(
                    styles.tableCell,
                )}>{timestamp}</div>
            </div>
            <div {...stylex.props(
                styles.tableRow,
            )}>
                <div {...stylex.props(
                    styles.rowLabel,
                )}>当前的时间是
                </div>
                <div {...stylex.props(
                    styles.tableCell,
                )}>{now.toLocaleString()}</div>
            </div>
        </div>
        <TimestampHelper/>
    </div>
}
