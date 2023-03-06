export default class Common {
  static getChangedIndexes(firstText, secondText) {
    const changedIndexes = [];
    for (let i = 0; i < firstText.length; i++) {
      if (firstText[i] !== secondText[i]) {
        changedIndexes.push(i);
      }
    }
  
    return changedIndexes;
  };

  static joinSiblingIndexes(arrayOfIndexes) {
    const result = [];

    let groupSiblingIndexes = [];
    result.push(groupSiblingIndexes);
    let lastIndex = null;
    for(let i = 0; i < arrayOfIndexes.length; i++) {
      const currentIndex = arrayOfIndexes[i];

      if(!lastIndex) {
        groupSiblingIndexes.push(currentIndex);
        lastIndex = currentIndex;
        continue;
      }
     
      if(lastIndex + 1 === currentIndex) {
        groupSiblingIndexes.push(currentIndex);
      } else {
        groupSiblingIndexes = [];
        result.push(groupSiblingIndexes);
        groupSiblingIndexes.push(currentIndex);
      }

      lastIndex = currentIndex;
    }
    
    return result;
  }
}