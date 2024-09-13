import stylex from "@stylexjs/stylex";

export const shareStyles = stylex.create({
    pageRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '0 auto',
        minHeight: '100vh',
        color: '#333',
        width: '100%',  // 默认移动端宽度
        '@media (min-width: 64em)': {
            width: '56rem !important',
        }
    },
})
