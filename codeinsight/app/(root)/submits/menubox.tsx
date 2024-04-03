
const MenuBox = () => {
    // Component logic
    return <div>
       
        <div className="flex justify-left">
            {/* Languages */}
            <div className="flex flex-col">
                <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="languages">
                    Languages <span className="text-rose-500">*</span>
                </label>
                <select id="languages" className="form-select text-sm py-2" required>
                    <option>Python</option>
                    <option>C</option>
                    <option>C++ / Finance</option>
                </select>
            </div>
            {/* Level */}
            <div className="flex flex-col pl-10">
                <label className="block text-sm text-gray-800 mb-1" htmlFor="level">
                    Level <span className="text-rose-500">*</span>
                </label>
                <select id="level" className="form-select text-sm py-2" required>
                    <option>Python</option>
                    <option>C</option>
                    <option>C++ / Finance</option>
                </select>
            </div>
            {/* Type */}
            <div className="flex flex-col pl-10">
                <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="level">
                    Type <span className="text-rose-500">*</span>
                </label>
                <select id="Type" className="form-select text-sm py-2" required>
                    <option>Python</option>
                    <option>C</option>
                    <option>C++ / Finance</option>
                </select>
            </div>

        </div>



    </div>;
  };
  
  export default MenuBox;
  



