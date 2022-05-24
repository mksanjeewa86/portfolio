import { LangType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/langSlice";

export const LangSelector: React.FC<LangType> = (type: LangType) => {
  const { value } = useSelector((state: any) => state.lang);
  const dispatch = useDispatch();

  return (
    <div className={type.type === "mobile" ? "mr-2" : ""}>
      <select
        value={value}
        onChange={(event) => {
          dispatch(changeLang(event.target.value));
        }}
        className="bg-[#0a192f] w-[50px] p-1 md:rounded-lg"
      >
        <option value="en">En</option>
        <option value="ja">Ja</option>
      </select>
    </div>
  );
};
