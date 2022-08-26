import * as React from 'react';
interface Props {
    readonly width: number;
    readonly height: number;
    readonly color: string;
    readonly image: string;
    readonly className: string;
    readonly onChange: (color: string, sync: boolean) => any;
}
export declare const Dropper: React.FC<Readonly<Props>>;
export default Dropper;
