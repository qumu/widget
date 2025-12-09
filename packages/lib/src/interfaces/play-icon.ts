export type PlayIconPosition = 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right';

export interface PlayIcon {
  height: number | string;
  position: PlayIconPosition;
  url: string;
  width: number | string;
}
