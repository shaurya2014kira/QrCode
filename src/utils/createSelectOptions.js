export const createSelectOptions = (arr, label, value) => {
    let optionsArray = [];
  
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element[label] != null && element[label] != '') {
        // console.log("DEPARTMENT LIST", element, label, value, element[value]);
        let optionsObj = {
          label: element[label],
          value: element[value],
        };
        optionsArray.push(optionsObj);
      }
    }
  
    return optionsArray;
  };

  export const createSelectOptionsWithTwoLabels = (arr, label1, label2, value) => {
    let optionsArray = [];
  
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element[label1] != null && element[label1] != '' && element[label2] != null && element[label2] != '') {
        // console.log("DEPARTMENT LIST", element, label, value, element[value]);
        let optionsObj = {
          label: element[label1] + ' ' + element[label2],
          value: element[value],
        };
        optionsArray.push(optionsObj);
      }
    }
  
    return optionsArray;
  };