import { useEffect, useState } from "react";

const Homeview = () => {
  const [state, setState] = useState([]);
  const _loadData = () => {
    fetch("https://run.mocky.io/v3/e54a22b7-ee7c-429f-b3cd-333a5c7145c2")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //remove duplicates from data
        data= data.filter(
          (item, index, self) =>
            index ===
            self.findIndex(
              (t) => t.value === item.value && t.title === item.title
            )
        );
        setState(data);
      });
  };
  useEffect(() => {
    _loadData();
  }, []);
  return (
    <div className="card">
      <div className="card-body">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item) => (
              <tr>
                <th scope="row">1</th>
                <td>{item.title}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Homeview;
