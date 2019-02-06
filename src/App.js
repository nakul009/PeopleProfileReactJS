import React from "react";
import "./App.css";

const App = () => <Friendlist />;

const Friendlist = () => {
  const friends = [
    {
      img: "http://dhrumilshah07.co.nf/images/nakul_.PNG",
      name: "Nakul Sahayaya",
      job: "Developer"
    },
    {
      img: "http://dhrumilshah07.co.nf/images/dhrumil.PNG",
      name: "Dhrumil Shah",
      job: "Designer"
    },
    {
      img: "http://dhrumilshah07.co.nf/images/bhautik.jpeg",
      name: "Bhautik Rangpariya",
      job: "Designer"
    }
  ];
  return (
    <section>
      <Friend friend={friends[0]}>
        Nakul is Computer Science Graduate Student at Syracuse University
        aspiring Software Engineer with interest in Full stack developnment and
        Data Science.
      </Friend>
      <Friend friend={friends[1]}>
        Dhrumil is Computer Science Graduate Student at UTA aspiring billionair
        interested in You know who he is.
      </Friend>
      <Friend friend={friends[2]} />
    </section>
  );
};

const Friend = props => {
  const { img, name, job } = props.friend;
  const { children } = props;
  return (
    <div className="Friend">
      <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className="Job">{job}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default App;
