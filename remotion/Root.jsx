import { Composition } from 'remotion';
import { CrewWellDemo } from './CrewWellDemo';

export const CrewWellVideoRoot = () => {
  return (
    <Composition
      id="CrewWellDemo"
      component={CrewWellDemo}
      width={1920}
      height={1080}
      fps={30}
      durationInFrames={300}
      defaultProps={{}}
    />
  );
};
