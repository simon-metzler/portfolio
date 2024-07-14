export default function ContactCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Get in Contact!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Daisy" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input type="text" className="grow" placeholder="daisy@site.com" />
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="..."
        ></textarea>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
