// import { useState } from "react";

// export default function Component1() {
//     const [user, setUser] = useState("Tech con Agust");
  
//     return (
//       <>
//         <h1>{`Hello ${user}!`}</h1>
//         <Component2 user={user} />
//       </>
//     );
//   }
  
//   function Component2({ user }) {
//     return (
//       <>
//         <h1>Component 2</h1>
//         <Component3 user={user} />
//       </>
//     );
//   }
  
//   function Component3({ user }) {
//     return (
//       <>
//         <h1>Component 3</h1>
//         <Component4 user={user} />
//       </>
//     );
//   }
  
//   function Component4({ user }) {
//     return (
//       <>
//         <h1>Component 4</h1>
//         <Component5 user={user} />
//       </>
//     );
//   }
  
//   function Component5({ user }) {
//     return (
//       <>
//         <h1>Component 5</h1>
//         <h2>{`Hello ${user} again!`}</h2>
//       </>
//     );
//   }


// Con context

import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("Tech con Agust");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
  