import type React from "react";
import { Link } from "react-router";
import { GoHome } from "react-icons/go";

import "styles/frame.css";

export const Frame: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <div id="website-navigator">
                <div>
                    {/* Routing */}
                    <Link reloadDocument to="/"><GoHome size="2rem"/><div>Home</div></Link>
                </div>
            </div>
            {children}
        </>
    );
};
