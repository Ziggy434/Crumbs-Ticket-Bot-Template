
<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <style>
            html, body {
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizelegibility;
                width: 100%;
                height:100%;
                overflow: hidden;
                user-select: none;
                outline: none;
            }
            body.dragging * {
                cursor: grabbing !important;
            }
            * {
                box-sizing: border-box;
            }
            *:focus, *:hover {
                outline: none;
            }
            .gitbook-root, .gitbook-splashscreen { position: fixed; top:0; right: 0; bottom: 0; left: 0; display:flex; width: 100%; height:100%; }
            .slate-spacer {
                height: 0;
                color: transparent;
                outline: none;
                position: absolute;
            }
            @keyframes LoadingIndicator {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            [data-loading-indicator="true"] {
                animation: LoadingIndicator 0.6s ease infinite;
            }
        </style>
        <title>GitBook</title>
        <link rel="manifest" href="/public/manifest.json" />
        <link rel="icon" sizes="512x512" href="/public/images/icon-512.png?v=10.9.116-b00d4d30368fef27755b10b9da7bae4d67aded4d-2590217428" />
        <link rel="apple-touch-icon" sizes="512x512" href="/public/images/icon-ios/icon_512x512.png?v=10.9.116-b00d4d30368fef27755b10b9da7bae4d67aded4d-2590217428" />
        <link rel="apple-touch-icon" sizes="512x512@2x" href="/public/images/icon-ios/icon_512x512@2x.png?v=10.9.116-b00d4d30368fef27755b10b9da7bae4d67aded4d-2590217428" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GitBook" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="GitBook">
        <link rel="preload" as="font" type="font/woff2" href="https://app.gitbook.com/public/fonts/Inter/Inter-Bold.woff2?v=3.19" crossorigin="anonymous">
<link rel="preload" as="font" type="font/woff2" href="https://app.gitbook.com/public/fonts/Inter/Inter-BoldItalic.woff2?v=3.19" crossorigin="anonymous">
<link rel="preload" as="font" type="font/woff2" href="https://app.gitbook.com/public/fonts/Inter/Inter-ExtraBold.woff2?v=3.19" crossorigin="anonymous">
<link rel="preload" as="font" type="font/woff2" href="https://app.gitbook.com/public/fonts/Inter/Inter-ExtraBoldItalic.woff2?v=3.19" crossorigin="anonymous">
<link rel="preload" as="font" type="font/woff2" href="https://app.gitbook.com/public/fonts/Inter/Inter-Medium.woff2?v=3.19" crossorigin="anonymous">
<link rel="preload" as="font" type="font/woff2" href="https://app.gitbook.com/public/fonts/Inter/Inter-MediumItalic.woff2?v=3.19" crossorigin="anonymous">
<link rel="preload" as="font" type="font/woff2" href="https://app.gitbook.com/public/fonts/Inter/Inter-Regular.woff2?v=3.19" crossorigin="anonymous">
<link rel="preload" as="font" type="font/woff2" href="https://app.gitbook.com/public/fonts/Inter/Inter-Italic.woff2?v=3.19" crossorigin="anonymous">
        <link rel="modulepreload" href="/public/app/app-KHOGXIQD.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-52W3SJQY.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-J3WLOI4H.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-MGXHCZSG.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-LFCLLAPB.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-U5JF6MIM.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-O73IPIZI.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-YHARRY32.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-ERHUJP3G.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-NB6MMNMD.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-XC2GPTQR.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-ASEABIHR.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-WHEQ6U33.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-LCIG2TMV.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-ICYT6H5B.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-O4T75LVZ.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-2BY25Q75.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-NH3ECAKV.min.js" />
        <link rel="modulepreload" href="/public/app/chunks/chunk-57DNK6NM.min.js" />
        <style>
            @font-face {
            font-family: 'gitbook-content-font';
            font-style:  normal;
            font-weight: 700;
            font-display: swap;
            src: local("Inter Bold"), local("Inter-Bold"), url("https://app.gitbook.com/public/fonts/Inter/Inter-Bold.woff2?v=3.19") format("woff2"),
                    url("https://app.gitbook.com/public/fonts/Inter/Inter-Bold.woff?v=3.19") format("woff");
        }
@font-face {
            font-family: 'gitbook-content-font';
            font-style:  italic;
            font-weight: 700;
            font-display: swap;
            src: local("Inter BoldItalic"), local("Inter-BoldItalic"), url("https://app.gitbook.com/public/fonts/Inter/Inter-BoldItalic.woff2?v=3.19") format("woff2"),
                    url("https://app.gitbook.com/public/fonts/Inter/Inter-BoldItalic.woff?v=3.19") format("woff");
        }
@font-face {
            font-family: 'gitbook-content-font';
            font-style:  normal;
            font-weight: 800;
            font-display: swap;
            src: local("Inter ExtraBold"), local("Inter-ExtraBold"), url("https://app.gitbook.com/public/fonts/Inter/Inter-ExtraBold.woff2?v=3.19") format("woff2"),
                    url("https://app.gitbook.com/public/fonts/Inter/Inter-ExtraBold.woff?v=3.19") format("woff");
        }
@font-face {
            font-family: 'gitbook-content-font';
            font-style:  italic;
            font-weight: 800;
            font-display: swap;
            src: local("Inter ExtraBoldItalic"), local("Inter-ExtraBoldItalic"), url("https://app.gitbook.com/public/fonts/Inter/Inter-ExtraBoldItalic.woff2?v=3.19") format("woff2"),
                    url("https://app.gitbook.com/public/fonts/Inter/Inter-ExtraBoldItalic.woff?v=3.19") format("woff");
        }
@font-face {
            font-family: 'gitbook-content-font';
            font-style:  normal;
            font-weight: 500;
            font-display: swap;
            src: local("Inter Medium"), local("Inter-Medium"), url("https://app.gitbook.com/public/fonts/Inter/Inter-Medium.woff2?v=3.19") format("woff2"),
                    url("https://app.gitbook.com/public/fonts/Inter/Inter-Medium.woff?v=3.19") format("woff");
        }
@font-face {
            font-family: 'gitbook-content-font';
            font-style:  italic;
            font-weight: 500;
            font-display: swap;
            src: local("Inter MediumItalic"), local("Inter-MediumItalic"), url("https://app.gitbook.com/public/fonts/Inter/Inter-MediumItalic.woff2?v=3.19") format("woff2"),
                    url("https://app.gitbook.com/public/fonts/Inter/Inter-MediumItalic.woff?v=3.19") format("woff");
        }
@font-face {
            font-family: 'gitbook-content-font';
            font-style:  normal;
            font-weight: 400;
            font-display: swap;
            src: local("Inter Regular"), local("Inter-Regular"), url("https://app.gitbook.com/public/fonts/Inter/Inter-Regular.woff2?v=3.19") format("woff2"),
                    url("https://app.gitbook.com/public/fonts/Inter/Inter-Regular.woff?v=3.19") format("woff");
        }
@font-face {
            font-family: 'gitbook-content-font';
            font-style:  italic;
            font-weight: 400;
            font-display: swap;
            src: local("Inter Italic"), local("Inter-Italic"), url("https://app.gitbook.com/public/fonts/Inter/Inter-Italic.woff2?v=3.19") format("woff2"),
                    url("https://app.gitbook.com/public/fonts/Inter/Inter-Italic.woff?v=3.19") format("woff");
        }
        </style>
        <style>
            [data-electron-drag="electron-drag"] { -webkit-app-region: drag; -webkit-user-select: none;  }
            .gitbook-splashscreen {
                background: #F5F7F9;
                justify-content: center;
                align-items: center;
            }
            .gitbook-splashscreen-logo {
                width: 64px;
                height: 64px;
                animation: logoAnim 2.5s cubic-bezier(.165,.84,.44,1) both;
                background-image: url(/public/images/logos/rounded/256x256.png?v=10.9.116-b00d4d30368fef27755b10b9da7bae4d67aded4d-2590217428);
                background-size: cover;
                animation-iteration-count: infinite;
                animation-direction: alternate;
            }
            @keyframes logoAnim {
                0% {opacity:0}
                1% {opacity:1}
                to {transform:scale(.6)}
            }
        </style>
        <script type="text/javascript" defer src="https://cdn.iframe.ly/embed.js" async></script>
        <script type="text/javascript" defer src="https://cdn.polyfill.io/v2/polyfill.js?features=Intl.~locale.en" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="gitbook-root"></div>
        <div class="gitbook-splashscreen">
            <div class="gitbook-splashscreen-logo"></div>
        </div>
        <script type="module" src="/public/app/app-KHOGXIQD.min.js"></script>
    </body>
</html>
