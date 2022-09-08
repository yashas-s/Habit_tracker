import { Key } from "react";
import { useEffect, useState } from "react";
import { ImHome2, ImHistory } from "react-icons/im";
import { FiPlusCircle } from "react-icons/fi/index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../Component/ProgressBar";

import TaskCard from "../Component/TaskCard";
import { RootState } from "../Redux/store";

import "./Pages.scss";

export default function HomePage() {
  const navigate = useNavigate();
  const { updateHabit } = useSelector((state: RootState) => state);
  
  const event = new Date();
  const options: any = { weekday: "long" };
  const day: string = event
    .toLocaleTimeString(undefined, options)
    .split(" ")[0];
  const [pendingTask, setPendingTask] = useState<number>(0);
  
  //  This useEffect is used for adding new day like today by itselfy 
  //  by checking the condition date which is stored in localstorage and today date.

  

  // This useEffect is used for updating the status of the habits for today.
  useEffect(() => {
    setPendingTask(0);
    let pendingTasks = 0;
    updateHabit?.map((e: any, index) => {
      if (e?.day[e.day.length - 1].status === "none") {
        pendingTasks++;
      }
     
    });
    setPendingTask(pendingTasks);
  }, [updateHabit]);
  return (
  <div className="home-page  px-3 md:pr -[20%] ">
      <div className="mobile-design relative">
        {/* The card for displaying the remaining task for today on homepage justify-end items-center  */}
        <div className="card-for-pending-tasks m-5">
          <div className="text-xl  font-bold text-black p-3 mt-2 w-1/2 ">
            {" "}
            Hey, you have {pendingTask} Pending Tasks.
          </div>
        </div>

        {/* This is the section for showing progress of the habits. */}

        <div className="progress-card-shadow-design">
          <div className="mt-12 px-4 pt-2">
            {/* Progess Bar Status of task visually and written format */}
            <div className="mt-4">
              <div className="text-xs text-black font-normal pb-3 flex justify-between items-center">
                <span>{pendingTask} Task Remaining</span>{" "}
                <span>
                  {updateHabit.length - pendingTask}
                  {" / "}
                  {updateHabit.length} (
                  {100 - Math.round((pendingTask / updateHabit.length) * 100)})
                  {"%"}
                </span>
              </div>
              <ProgressBar
                percentage={
                  100 - (pendingTask / updateHabit.length) * 100 + "%"
                }
              />{" "}
              <div className="border-t mt-8"></div>
            </div>

            {/* All todays habit to show */}

            <div className="overflow-y-scroll max-h-[170px] mt-2">
              {/* Using Map to iterate over the habits */}
              {updateHabit?.map((e: any, index: Key | null | undefined) => (
                <TaskCard
                  habitTitle={e?.title}
                  habitDescription={e?.description}
                  id={e?.id}
                  key={index}
                  habitStatus={e.day[e.day.length - 1].status}
                  index={e.day.length - 1}
                />
              ))}
            </div>
            {/* This tabbar shown below */}
            <div className="fixed bottom-0 w-full tab-bar -mx-4">
              {/* This icon will redirect you to homepage */}
              <ImHome2
                className="text-blue-400 text-3xl cursor-pointer"
                onClick={() => navigate("/")}
              />
              {/* This icon will redirect you to add new  habit page  */}

              <FiPlusCircle
                className="text-blue-400 text-5xl -mt-6 cursor-pointer"
                onClick={() => navigate("/add-new")}
              />
              {/* This icon will redirect you to all habit page where user can view all the habits. */}
              <ImHistory
                className="text-blue-400 text-3xl cursor-pointer"
                onClick={() => navigate("/all-history")}
              />
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}
