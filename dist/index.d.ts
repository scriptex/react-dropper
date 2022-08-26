import * as React from 'react';
interface Props {
    width: number;
    height: number;
    color: string;
    image: string;
    className: string;
    onChange: (color: string, sync: boolean) => any;
}
export declare const Dropper: React.FC<Readonly<Partial<Props>>>;
export default Dropper;
