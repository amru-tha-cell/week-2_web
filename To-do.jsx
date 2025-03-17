import { useState } from "react";

const ToDo = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div className="Sana">
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide To-do List" : "To-do List"}
      </button>

      {showList && (
        <ul>
          <li>Machine Learning</li>
          <li>DBMS</li>
          <li>Software Assignment</li>
          <li>Washing Clothes</li>
          <li>Learning React</li>
          <li>Submit the Coding Assignment</li>
          <li>Watching Mad-Square</li>
          <li>Learning JavaScript</li>
          <li>Learning Web</li>
        </ul>
      )}
    </div>
  );
};

export default ToDo;
