import React from "react";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);

try {
    importAll(require.context('../icons', true, /\.svg$/));
} catch (error) {
    console.log(error);
}

type propsType = {
    tagName: string
}

const Icon = (props: propsType) => {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.tagName}/>
        </svg>
    );
};

export default Icon;