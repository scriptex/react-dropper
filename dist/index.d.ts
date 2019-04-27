import * as React from 'react';
interface Props {
    readonly width: number;
    readonly height: number;
    readonly color: string;
    readonly image: string;
    readonly className: string;
    readonly onChange: (color: string, sync: boolean) => any;
}
interface State {
    oldColor: string;
}
export declare class Dropper extends React.Component<Props, State> {
    private canvas;
    static defaultProps: Props;
    state: State;
    componentWillMount(): void;
    render(): React.ReactNode;
    private drawImage;
    private getImageData;
    private setColor;
}
export {};
