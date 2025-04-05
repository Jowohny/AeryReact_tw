import { RefObject } from "react";
import sanskar from "../assets/images/sanskar.png";
import joshua from "../assets/images/joshua.jpg";
import kaelyn from "../assets/images/kaelyn.jpg";
import johny from "../assets/images/johny.jpg";
import derek from "../assets/images/derek.jpg";
import peng from "../assets/images/peng.jpg";

function Team({ containerOn, sanskarRef, joshuaRef, kaelynRef, johnyRef, derekRef, pengRef }: {
    containerOn: boolean,
    sanskarRef: RefObject<null>,
    joshuaRef: RefObject<null>,
    kaelynRef: RefObject<null>,
    johnyRef: RefObject<null>,
    derekRef: RefObject<null>,
    pengRef: RefObject<null>,
}) {

    if (!containerOn) return null;

    return (
        <div className="grid grid-cols-4 mx-20">
            <img className="h-auto w-full object-cover" ref={sanskarRef} src={sanskar} alt="pfp" />
            <img className="h-auto w-full object-cover" ref={joshuaRef} src={joshua} alt="pfp" />
            <img className="h-auto w-full object-cover" ref={kaelynRef} src={kaelyn} alt="pfp" />
            <img className="h-auto w-full object-cover" ref={johnyRef} src={johny} alt="pfp" />
            <img className="h-auto w-full object-cover" ref={derekRef} src={derek} alt="pfp" />
            <div className="h-auto w-full object-cover col-span-2 content-center justify-items-center">
                <p>
                    Meet the Team
                </p>
            </div>
            <img className="h-auto w-full object-cover" ref={pengRef} src={peng} alt="pfp" />
        </div>
    )
}

export default Team;