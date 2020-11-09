import React, {useState} from "react";
import {css} from "@emotion/core";

const Wave = () => {
    const [waves, setWaves] = useState(0);
    const label = `${waves} ${waves === 1 ? 'wave' : 'waves'}`

    function onClickWave() {
        return setWaves(waves + 1);
    }

    return <button
        css={css`
            background: rebeccapurple;
            border: none;
            color: white;
            font-size: 1.25rem;`}
        onClick={onClickWave}>{label}</button>
}

export default Wave;