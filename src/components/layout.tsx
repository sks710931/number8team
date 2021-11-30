import React, {  ReactElement } from "react";

interface Props {
    children: JSX.Element;
}

export const Layout = ({children}: Props): ReactElement<Props> => {
    return (
        <div>
            Layout
            <main>
                {children}
            </main>
        </div>
    )
}