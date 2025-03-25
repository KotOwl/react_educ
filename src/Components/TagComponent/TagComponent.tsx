import {FC} from "react";

type tagProps ={tag:string};
export const TagComponent:FC<tagProps> = (tag) => {
    return (
        <p>
            {tag}
        </p>
    );
};