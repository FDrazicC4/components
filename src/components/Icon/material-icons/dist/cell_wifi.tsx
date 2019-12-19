import React, { ReactElement } from "react";

function SVG(): ReactElement {
    return (
        <React.Fragment>
            <path
                opacity=".3"
                d="M20 10.78V20h-9.22L20 10.78m2-4.81L6 22h16V5.97z"
            />
            <path d="M18 9.98L6 22h12V9.98zM3.93 5.93l1.29 1.29c3.19-3.19 8.38-3.19 11.57 0l1.29-1.29c-3.91-3.91-10.25-3.91-14.15 0zm5.14 5.14L11 13l1.93-1.93a2.74 2.74 0 0 0-3.86 0zM6.5 8.5l1.29 1.29c1.77-1.77 4.65-1.77 6.43 0L15.5 8.5a6.374 6.374 0 0 0-9 0z" />
        </React.Fragment>
    );
}

export default SVG;
