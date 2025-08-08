import type { Route } from "./+types/home";
import { Avatar } from "~/components/avatar";

import "styles/home.css";

export function meta({}: Route.MetaArgs) {
    return [{ title: "Kamen's 小屋" }, { name: "description", content: "Welcome to Kamen's Home!" }];
}

export default function Home() {
    return (
        <div id="home-part-1">
            <div className="group">
                <div>
                    <Avatar withShadow />
                </div>
                <div>
                    怎么你也是福瑞控？
                </div>
            </div>
        </div>
    );
}
