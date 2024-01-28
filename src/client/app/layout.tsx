import { Metadata } from "next"
import { App } from "./App"

export const metadata: Metadata = {
  title: 'WebXR Template',
  description: 'Generated by Wrapper.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <App>
          {children}
        </App>
      </body>
    </html>
  )
}


/*
  TODO: CLEAN UP R3F
  1. MOVE providers/sockets LOGIC THAT USES WEBGL STORES INTO WEBGL COMPONENT
  2. RENAME STORE SETTERS TO EVENT BASED NAMES
  3. LOOK AT THREEJS COMPONENTS 
    - clean up HOCS (CONVERT TO CONTROLLERS ETC)
    - clean up importing of models
  4. update amplify

  // anything useful here?
    https://codesandbox.io/p/sandbox/view-tracking-bp6tmc?file=%2Fsrc%2FApp.js%3A67%2C10-67%2C17

    // use threejs within r3f
    https://codesandbox.io/p/sandbox/threejs-basic-example-forked-i7krx4?file=%2Fsrc%2FApp.js%3A26%2C19

  TODO: CLEAN UP NEST
  - implement controllers locally
  - add this to lambdas
*/