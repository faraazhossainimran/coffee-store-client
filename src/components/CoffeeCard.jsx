import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffes, coffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = coffees.filter(coff => coff._id !== _id)
              setCoffes(remaining)
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl my-6">
        <figure>
          <img className="w-[100px] my-8 mx-12" src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full pl-4 pr-4">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical mt-4 space-y-4">
              <button className="btn btn-active ">View</button>
              <Link to={`update-coffee/${_id}`}>
              <button className="btn">Edit</button>
              </Link>
              <button onClick={() => handleDelete(_id)} className="btn">
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
