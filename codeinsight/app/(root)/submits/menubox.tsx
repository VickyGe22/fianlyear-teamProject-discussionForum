
const MenuBox = () => {
    // Component logic
    return <div>
        {/*Level*/}
        <div className="space-y-4">
        <div>
        <label className="block text-sm font-medium mb-1" htmlFor="position">
            Level <span className="text-red-500">*</span>
        </label>
        <input id="position" className="form-input w-full" type="text" required placeholder="E.g., Senior Software Engineer" />
        </div>
        </div>
        {/*Languages*/}
        <div>
        <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="role">
            Languages <span className="text-rose-500">*</span>
        </label>
        <select id="role" className="form-select text-sm py-2 w-full" required>
            <option>Python</option>
            <option>C</option>
            <option>C++ / Finance</option>
        </select>
        </div>





    </div>;
  };
  
  export default MenuBox;
  



