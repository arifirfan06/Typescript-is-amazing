import axios from "axios";
import _ from 'lodash'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios<User[]>("https://jsonplaceholder.typicode.com/users")
  .then(({data}) => {
    // console.log(data.company.catchPhrase)
    data.forEach(printData)
  })
  .catch((err) => console.log("there is error", err));

function printData(data: User) {
    console.log(data.name)
    console.log(data.website)
    console.log(data.email)
}