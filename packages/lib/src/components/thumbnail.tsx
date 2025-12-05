import { Presentation } from '@/interfaces/presentation';
import { WidgetOptions } from '@/interfaces/widget-options';
import playIcon from '../../assets/play-icon.svg?raw';

interface Props {
  onClick: () => void;
  options: WidgetOptions;
  presentation: Presentation;
}

const PlayIconPositionToPlaceItems = {
  'top-left': 'start',
  'top': 'start center',
  'top-right': 'start end',
  'left': 'center start',
  'center': 'center',
  'right': 'center end',
  'bottom-left': 'end start',
  'bottom': 'end center',
  'bottom-right': 'end'
};

export function ThumbnailComponent({ presentation, onClick, options }: Readonly<Props>) {
  const playIconStyle: Record<string, string> = {};

  if (options.playIcon?.width) {
    playIconStyle['width'] = `${options.playIcon.width}px`;
  }

  if (options.playIcon?.height) {
    playIconStyle['height'] = `${options.playIcon.height}px`;
  }

  return (
    <button
      type="button"
      class="qc-thumbnail"
      onClick={() => onClick()}
      style={{
        'background-image': `url(${presentation.thumbnail?.cdnUrl || presentation.thumbnail?.url})`,
        'place-items': PlayIconPositionToPlaceItems[options.playIcon?.position || 'center'],
    }}
    >
      {options.playIcon?.url ? (
        <img
            alt="Play"
            class="qc-thumbnail__play-button"
            src={options.playIcon?.url}
            style={playIconStyle}
        />
      ) : (
        <div
            class={`qc-thumbnail__play-button qc-thumbnail__play-button--default`}
            dangerouslySetInnerHTML={{ __html: playIcon }}
            style={playIconStyle}
        />
      )}
    </button>
  );
}
