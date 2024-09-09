import theme from './theme';
import {CssBaseline, ThemeProvider} from "@mui/material"
import {RecoilRoot} from "recoil";

export default async function RootLayout({children, lang}: {
    children: React.ReactNode,
    lang: string
}) {
    return (
        <html lang={lang}>
        <head>
            <base href="/"/>
            <meta charSet="utf-8"/>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
            <meta name="renderer" content="webkit"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="robots" content="index,follow"/>
            <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
            <title>Datetime</title>
        </head>
        <body>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RecoilRoot>
                {children}
            </RecoilRoot>
        </ThemeProvider>
        </body>
        </html>
    )
}
