import Districts from "./Districts";

export const Select = (props) => {
  return (
    <>
      <h2>選擇縣市</h2>
      <Districts setCityToken={props.setCityToken} />
    </>
  );
};

export default Select;
