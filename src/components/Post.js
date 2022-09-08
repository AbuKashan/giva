import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {useState} from 'react'
import './Post.css'
function Post() {
  const [data, setData] = useState({
    id: "",
    title:"",
    desc: "",
  });
  const [editMode,setEditMode]=useState(false)
  const [items, setItems] = useState([]);
  const handle = (e) => {
    console.log("data");
    console.log(data);
    data.id=items.length+1
    setItems([...items, data]);
    console.log(items);
    setData({
        title:"",
        desc:""
    })
  };
  const EditHandle=()=>{
    const title_e=data.title
    const desc_e=data.desc
    items[data.id-1].title=title_e
    items[data.id-1].desc=desc_e
    setItems(items)
    setData({
        title:"",
        desc:""
    })
    setEditMode(false)
  }
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });

  };
  const handleItemDeleted = (o) => {
    console.log("items");
    setItems(
      items.filter(function (l) {
        return l.id!==o;
      })
    );
    console.log(items);
  };
  const edit = (i) => {
    setEditMode(true)
    setData(items[i]);
    console.log(data);
  };
  return (
    <>
    <div className="container shadow rounded text-center heading mt-4">
    <h1> Post Page</h1>
    </div>
    
      <div className="container shadow rounded mt-4 mb-5 mainfro">
        <div>
          {" "}
          <label for="exampleFormControlInput1" className="form-label mt-5 ">
            <h3>Title</h3>
          </label>
          <input
            type="email"
            className="form-control"
            name="title"
            placeholder="Title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3 mb-3 ">
          <label for="exampleFormControlTextarea1" className="form-label">
            <h4>Description</h4>
          </label>
          <textarea
            className="form-control"
            name="desc"
            placeholder="Description"
            rows="4"
            value={data.desc}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          {editMode===true?<Button variant="primary" size="lg" className="mb-5" onClick={EditHandle}>
            Edit
          </Button>:<Button variant="primary"  className="mb-5 btn-lg" onClick={handle}>
            Add 
          </Button>}
        </div>
      </div>
      <h2 className="text-center">  Post Table  </h2>
      <div className="container shadow rounded table">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map(function (p, i) {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{p.title}</td>
                <td>{p.desc}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      edit(i);
                    }}
                  >
                    Edit 
                  </Button>
                </td>
                <td>
                  <Button
                    variant="primary pr-5"
                    onClick={() => {
                      handleItemDeleted(p.id);
                    }}
                  >
                    {" "}
                    Remove{" "}
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </div>
    </>
  );
}

export default Post;