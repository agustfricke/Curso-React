import { useState } from "react"

const AddTask = ({ onAddTask }) => {

  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Task..."
      />

      <button
        onClick={() => {
          onAddTask(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;