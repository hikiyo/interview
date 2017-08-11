import json from './data-json'


/*
* Considering the following JSON : Creating a set of class which make working this the provided JSON Stream easy
* TIP : You should build multiple classes with static methods.
* TIP 2 : You will need Babel to transpile your ES 6 code.
*           - Everything has been pre-made right for your needs.
*                   - Just run npm install (or yarn install)
*                   - And then npm start (or yarn start)
*/

class GetData {
    constructor(json) {
        this.json = json;
    }

    static getValue(json, prop) {
        return `${json.data + prop}`;
    }
}

let toto = new GetData(json);
console.log(toto.getValue(name));
/*
* Bonus Question : Once done, create a React component which will display this mission data
* You can find inspiration on example.png
*/