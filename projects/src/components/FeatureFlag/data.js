const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeView: false,
  showTabs: false
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (Object.keys(dummyApiResponse).length > 0) {
      setTimeout(() => resolve(dummyApiResponse), 500);
    } else {
      reject("Some error occurred! Please try again");
    }
  });
}

export default featureFlagsDataServiceCall;
