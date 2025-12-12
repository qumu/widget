import { describe, it, expect, vi, afterEach } from 'vitest';
import { render } from '@testing-library/preact';
import { createElement } from 'preact';
import { IconComponent } from '../icon';

describe('IconComponent', () => {
  const mockSvgContent = '<svg viewBox="0 0 24 24"><path d="M12 2l10 10-10 10-10-10z"/></svg>';
  const mockClassName = 'test-icon-class';

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render with basic required props', () => {
      render(createElement(IconComponent, {
        class: mockClassName,
        svg: mockSvgContent,
      }));

      const iconElement = document.querySelector('.qc-icon');

      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveClass('qc-icon', mockClassName);
    });

    it('should render SVG content using dangerouslySetInnerHTML', () => {
      render(createElement(IconComponent, {
        class: mockClassName,
        svg: mockSvgContent,
      }));

      const iconElement = document.querySelector('.qc-icon');

      // The browser may normalize the HTML, so check for key elements instead of exact match
      expect(iconElement?.querySelector('svg')).toBeInTheDocument();
      expect(iconElement?.querySelector('path')).toBeInTheDocument();
      expect(iconElement?.querySelector('path')).toHaveAttribute('d', 'M12 2l10 10-10 10-10-10z');
    });

    it('should render as an <i> element', () => {
      render(createElement(IconComponent, {
        class: mockClassName,
        svg: mockSvgContent,
      }));

      const iconElement = document.querySelector('.qc-icon');

      expect(iconElement?.tagName).toBe('I');
    });
  });

  describe('CSS Classes', () => {
    it('should always include qc-icon class', () => {
      render(createElement(IconComponent, {
        class: mockClassName,
        svg: mockSvgContent,
      }));

      const iconElement = document.querySelector('.qc-icon');

      expect(iconElement).toHaveClass('qc-icon');
    });

    it('should apply custom class from props', () => {
      const customClass = 'my-custom-icon';

      render(createElement(IconComponent, {
        class: customClass,
        svg: mockSvgContent,
      }));

      const iconElement = document.querySelector('.qc-icon');

      expect(iconElement).toHaveClass('qc-icon', customClass);
    });

    it('should handle multiple CSS classes in class prop', () => {
      const multipleClasses = 'class1 class2 class3';

      render(createElement(IconComponent, {
        class: multipleClasses,
        svg: mockSvgContent,
      }));

      const iconElement = document.querySelector('.qc-icon');

      expect(iconElement).toHaveClass('qc-icon', 'class1', 'class2', 'class3');
    });

    it('should handle empty class prop', () => {
      render(createElement(IconComponent, {
        class: '',
        svg: mockSvgContent,
      }));

      const iconElement = document.querySelector('.qc-icon');

      expect(iconElement).toHaveClass('qc-icon');
      expect(iconElement?.className).toBe('qc-icon');
    });
  });

  describe('SVG Dimensions', () => {
    it('should set width attribute on SVG element when width prop is provided as number', () => {
      const width = 100;

      render(createElement(IconComponent, {
        class: mockClassName,
        svg: mockSvgContent,
        width,
      }));

      const svgElement = document.querySelector('svg');

      expect(svgElement).toHaveAttribute('width', '100');
    });

    it('should set height attribute on SVG element when height prop is provided as number', () => {
      const height = 150;

      render(createElement(IconComponent, {
        class: mockClassName,
        height,
        svg: mockSvgContent,
      }));

      const svgElement = document.querySelector('svg');

      expect(svgElement).toHaveAttribute('height', '150');
    });

    it('should set width attribute when width prop is provided as string', () => {
      const width = '200px';

      render(createElement(IconComponent, {
        class: mockClassName,
        svg: mockSvgContent,
        width,
      }));

      const svgElement = document.querySelector('svg');

      expect(svgElement).toHaveAttribute('width', '200px');
    });

    it('should set height attribute when height prop is provided as string', () => {
      const height = '75%';

      render(createElement(IconComponent, {
        class: mockClassName,
        height,
        svg: mockSvgContent,
      }));

      const svgElement = document.querySelector('svg');

      expect(svgElement).toHaveAttribute('height', '75%');
    });

    it('should set both width and height attributes when both props are provided', () => {
      const width = 120;
      const height = '80px';

      render(createElement(IconComponent, {
        class: mockClassName,
        height,
        svg: mockSvgContent,
        width,
      }));

      const svgElement = document.querySelector('svg');

      expect(svgElement).toHaveAttribute('width', '120');
      expect(svgElement).toHaveAttribute('height', '80px');
    });

    it('should not set width attribute when width prop is not provided', () => {
      render(createElement(IconComponent, {
        class: mockClassName,
        height: 100,
        svg: mockSvgContent,
      }));

      const svgElement = document.querySelector('svg');

      expect(svgElement).not.toHaveAttribute('width');
      expect(svgElement).toHaveAttribute('height', '100');
    });

    it('should not set height attribute when height prop is not provided', () => {
      render(createElement(IconComponent, {
        class: mockClassName,
        svg: mockSvgContent,
        width: 100,
      }));

      const svgElement = document.querySelector('svg');

      expect(svgElement).toHaveAttribute('width', '100');
      expect(svgElement).not.toHaveAttribute('height');
    });

    it('should not set attributes for falsy values (0)', () => {
      render(createElement(IconComponent, {
        class: mockClassName,
        height: 0,
        svg: mockSvgContent,
        width: 0,
      }));

      const svgElement = document.querySelector('svg');

      // The component uses a truthy check, so 0 values won't set attributes
      expect(svgElement).not.toHaveAttribute('width');
      expect(svgElement).not.toHaveAttribute('height');
    });

    it('should not set any attributes if given svg does not contain an SVG element', () => {
      const invalidSvgContent = '<div>No SVG here</div>';

      render(createElement(IconComponent, {
        class: mockClassName,
        height: 100,
        svg: invalidSvgContent,
        width: 100,
      }));

      const svgElement = document.querySelector('svg');

      expect(svgElement).not.toBeInTheDocument();
    });
  });
});
