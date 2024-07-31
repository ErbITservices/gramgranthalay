function Input(props) {
  return (
    <div className="main">
      <select
        onChange={(event) => props.handleclick(event)}
        class="form-select"
        aria-label="Default select example"
      >
        <option>Select Category</option>
        {props.category.map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(event) => props.showdata(event)}
      >
        <option selected>Select library</option>
        {props.library.map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Input;
