import Select from "react-select";

const SelectField = ({ selectedOptions, setSelectedOptions, tags }: any) => {
  const options = tags.map((tag: any) => tag.option);
  return (
    <div className="w-full max-w-md">
      <label className="text-main" htmlFor="tags">
        تاگەکان{" "}
      </label>
      <Select
        isMulti
        required
        options={options}
        value={selectedOptions}
        onChange={setSelectedOptions}
      />
    </div>
  );
};

export default SelectField;
