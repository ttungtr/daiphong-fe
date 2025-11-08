import * as React from 'react';
import ImageWithFallback from './ImageWithFallback';

interface ILineTitleProps {
  alt: string;
}

const LineTitle: React.FunctionComponent<ILineTitleProps> = ({ alt }) => {
  return (
    <ImageWithFallback
      src="/images/titlebg.jpg"
      alt={alt}
      width={300}
      height={50}
      className="w-56 h-auto mb-4 mt-2"
      priority
    />
  );
};

export default LineTitle;
