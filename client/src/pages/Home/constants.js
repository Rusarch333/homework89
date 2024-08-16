import NamingContestStepsText from './data/NamingContestSteps.json';

const CONSTANTS_HOME = {
  NAMING_CONTEST_STEPS: [
    [
      1,
      'whiteContainer',
      'stepReverse',
      false,
      `1-compressed.gif`,
      NamingContestStepsText.stepOneContent,
      [
        NamingContestStepsText.stepOneContentOne,
        NamingContestStepsText.stepOneContentTwo,
      ],
    ],
    [
      2,
      'greenContainer',
      'stepDirect',
      true,
      `2-compressed-new.gif`,
      NamingContestStepsText.stepTwoContent,
      [
        NamingContestStepsText.stepTwoContentOne,
        NamingContestStepsText.stepTwoContentTwo,
      ],
    ],
    [
      3,
      'greyContainer',
      'stepReverse',
      false,
      `3-compressed.gif`,
      NamingContestStepsText.stepThreeContent,
      [
        NamingContestStepsText.stepThreeContentOne,
        NamingContestStepsText.stepThreeContentTwo,
        NamingContestStepsText.stepThreeContentThree,
      ],
    ],
  ],
};

export default CONSTANTS_HOME;
