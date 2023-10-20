import Swal from 'sweetalert2'
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    fetch('http://localhost:5000/coffee', {
        method: "POST",
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data=> {
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Click Cool to continue',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }
    })
}

    return (
      <div className="bg-[#F4F3F0]">
        <div className="container mx-auto py-12">
          <h2 className="text-3xl ">Add a coffee</h2>
          <form onSubmit={handleAddCoffee}>
            <div className="md:flex">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <label className="input-group">
                  <input
                    name="name"
                    type="text"
                    placeholder="Coffee Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Availabe Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    name="quantity"
                    type="text"
                    placeholder="Availabe Quantity"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="md:flex">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Supplier Name</span>
                </label>
                <label className="input-group">
                  <input
                    name="supplier"
                    type="text"
                    placeholder="Supplier Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    name="taste"
                    type="text"
                    placeholder="Taste"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="md:flex">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <input
                    name="category"
                    type="text"
                    placeholder="Category"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <input
                    name="details"
                    type="text"
                    placeholder="Details"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    name="photo"
                    type="text"
                    placeholder="PHoto URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-neutral w-full mt-8"
            ></input>
          </form>
        </div>
      </div>
    );
  };
export default AddCoffee;
