import { useState } from "react";

const MadlibsForm = ({ add }) => {
  const INITIAL_STATE = {
    noun1: "",
    noun2: "",
    adjective: "",
    color: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(formData); 
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="noun1"
        name="noun1"
        type="text"
        placeholder="noun 1"
        value={formData.noun1}
        onChange={handleChange}
      />
      <input
        id="noun2"
        name="noun2"
        type="text"
        placeholder="noun 2"
        value={formData.noun2}
        onChange={handleChange}
      />
      <input
        id="adjective"
        name="adjective"
        type="text"
        placeholder="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />
      <input
        id="color"
        name="color"
        type="text"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Get Story</button>
    </form>
  );
};

export default MadlibsForm;
