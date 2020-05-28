import "babel-polyfill"
import {postData}  from '../src/client/js/formHandler'
import {checkForName} from '../src/client/js/nameChecker'
require('jest-fetch-mock').enableMocks()




test('check input is correct or not',() =>{
    expect(checkForName("Picard")).toBe(true);
});




test('Test for post data success', () => {
    return postData('/test',{ UserText:'hello' }).then(data => {
      expect(data.status).toBe(200);
    });
  });