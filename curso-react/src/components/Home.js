import React from "react";

const Home = () => {

    const people = [{
        id: 0,
        username: 'Agustin',
        es_admin: true,
      }, {
          id: 1,
          username: 'Belen',
          es_admin: true,
      }, {
          id: 2,
          username: 'Carolina',
          es_admin: false,
      }];

    const admin = people.filter(user => user.es_admin === true)

    const list = admin.map(user => <p className="text-white">{user.username}</p>)

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            {list}
        </div>
        </div>
    );
};

export default Home;
