import { useEffect, useRef, useState } from 'preact/hooks';

interface Props {
  class?: string;
  height?: number | string;
  svg: string;
  width?: number | string;
}

export function IconComponent({ svg, width, height, class: classNames }: Readonly<Props>) {
  const svgRef = useRef<HTMLElement>(null);
  const [classes, setClasses] = useState(['qc-icon']);

  useEffect(() => {
    const svgElement = svgRef.current!.querySelector('svg');

    if (!svgElement) {
      return;
    }

    if (width) {
      svgElement.setAttribute('width', String(width));
    }

    if (height) {
      svgElement.setAttribute('height', String(height));
    }

    if (classNames) {
      const additionalClasses = classNames.split(' ').filter((cls) => cls.trim() !== '');

      setClasses(['qc-icon', ...additionalClasses]);
    }

  }, [svg, width, height, classNames]);

  return (
    <i class={classes.join(' ')} ref={svgRef} dangerouslySetInnerHTML={{ __html: svg }} />
  );
}
