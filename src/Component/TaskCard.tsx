import { AiOutlineCheckCircle, AiFillMinusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateDayStatus } from "../Redux/updateHabitSlice";
// import { State } from "../redux/types";

interface IProps {
  habitTitle: string;
  habitDescription: string;
  id: number;
  habitStatus: string;
  index: number
}

// This components take the props as IProps and display the habit card.
export default function TaskCard({
  habitTitle,
  habitDescription,
  id,
  habitStatus,
  index
}: IProps) {
  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center gap-5 mt-2 shadow-md"
    >
      <div className="flex ">
        {/* AiOutlineCheckCircle icon will change the status to be done */}
        {" "}
        <AiOutlineCheckCircle
          className={`text-2xl cursor-pointer ${
            habitStatus === "done" ? "text-[#7cb586 ]" : "text-slate-300"
          }`}
          onClick={() => {
            dispatch(
              updateDayStatus({
                id: id,
                index: index,
                status: "done",
              })
              )
          }
          }
        />
        {/* AiOutlineCloseCircle circle icon will change the status to be not-done */}

        <AiOutlineCloseCircle
          className={`text-2xl ml-2 cursor-pointer ${
            habitStatus === "not-done" ? "text-[#7cb586 ]" : "text-slate-300"
          }`}
          onClick={() => {
            dispatch(
              updateDayStatus({
                id: id,
                index: index,
                status: "not-done",
              })
              )
          }
          }
        />
        {/* AiFillMinusCircle circle icon will change the sattus to be none */}
        <AiFillMinusCircle
          className={`text-2xl ml-2 cursor-pointer ${
            habitStatus === "none" ? "text-[#7cb586 ]" : "text-slate-300"
          }`}
          onClick={() => {
            dispatch(
              updateDayStatus({
                id: id,
                index: index,
                status: "none",
              })
              )
          }
          }
        />
      </div>

      <div className="flex flex-col">
        {/* This shows the title and description of a habit */}
        <span className="text-base font-bold text-black">{habitTitle}</span>
        <span className="text-xs font-normal text-slate-300">
          {habitDescription}
        </span>
      </div>
    </div>
  );
}
