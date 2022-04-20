import { coreContext } from "context/core_context";
import _ from "lodash";
import { Observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Button from "./button";

const ConfirmStep2 = () => {
  const context = useContext(coreContext);

  return (
    <Observer>
      {() => (
        <div className="flex flex-col items-center w-full h-[90vh] pt-[68px]">
          <div className="w-full h-[11vh] bg-white flex flex-col justify-center">
            <p className="w-full text-center text-[24px] font-bold">
              ยืนยันการเลือกสภานักศึกษา
            </p>
            <p className="w-full text-center text-[24px]">คณะวิศวกรรมศาสตร์</p>
          </div>
          <div className="w-full mt-[45px] px-5 pb-5 space-y-[14px] bg-white">
            <div className="flex flex-col space-y-3">
              <div className="flex w-full pt-[11px]">
                <div className="flex items-center justify-center w-1/2 text-[18px] font-bold">
                  ชื่อผู้สมัครสภาฯ
                </div>
                <div className="flex items-center justify-center w-1/2 text-[18px] font-bold">
                  สถานะที่เลือก
                </div>
              </div>
              {_.map(context.councilList, (item) => (
                <div className="flex w-full border-b-2 border-dim_gray">
                  <div className="flex items-center w-1/2 text-[16px] font-bold py-1">
                    {`${item.firstname} ${item.lastname}`}
                  </div>
                  <div className="flex items-center w-1/2 py-1 px-[45px] space-x-3">
                    <div
                      className={`w-[7px] h-[7px] rounded-full ${
                        item.vote === 0 && "bg-dim_gray"
                      }
                      ${item.vote === 1 && "bg-base_green"}
                      ${item.vote === -1 && "bg-base_orange"}`}
                    ></div>
                    <div className="text-[16px]">
                      {item.vote === 0 && "งดออกเสียง"}
                      {item.vote === 1 && "ยอบรับ"}
                      {item.vote === -1 && "ไม่ยอมรับ"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full text-center text-[20px] my-[20px]">
            <p>
              เมื่อเลือก <b>“เสร็จสิ้น”</b> จะไม่สามารถแก้ไขได้อีก
            </p>
            <p>คุณจะยืนยันการเลือกหรือไม่</p>
          </div>
          <div className="flex space-x-[6px]">
            <Button
              color="gray"
              title="แก้ไข"
              onClick={() => context.stepDown()}
            />
            <Button
              color="orange"
              title="เสร็จสิ้น"
              onClick={() => context.postVoteResult()}
            />
          </div>
        </div>
      )}
    </Observer>
  );
};

export default ConfirmStep2;
