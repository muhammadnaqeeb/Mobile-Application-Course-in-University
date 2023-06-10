# Assignment 4 (AsyncStorage)

> Instead of adding name, lname, email, password one by one I store user information into one object and add this object to  AsyncStorage.setItem() after converting object into string
```
  const [name, setName] = useState(null);
  const [lname, setlName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function onPressSetData() {
    if(name==null || lname==null || email==null || password==null ){
      alert("These fields cannot be null")
      return;
    }
    const user_information = {
      "name": name,
      "lname": lname,
      "email": email,
      "password": password,
    }
    AsyncStorage.setItem('userInformation', JSON.stringify(user_information));
    navigation.navigate("login");
  }
```

> Getting User information from AsyncStorage and varifying with user login cradentials

```
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    async function onPressGetDataAndVarify() {

        if (email == null || password == null) {
            alert("These fields cannot be null")
            return;
        }
        var userInformation = await AsyncStorage.getItem("userInformation");
        userInformation = JSON.parse(userInformation);
        //console.log(typeof(userInformation), userInformation);
        //console.log(userInformation['email']);
        if(email != userInformation['email']){ 
            alert("Incorrect Email");
            return;
        } 
        if(password != userInformation['password']){ 
            alert("Incorrect Password");
            return;
        } 
        
        navigation.navigate("profile", {name:userInformation['name'], lname:userInformation['lname'], email:userInformation['email']});
    }

```
