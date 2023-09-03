import { ButtonCst } from "@/General-Helper/Button";
import { useState } from "react";

const NotificationAcceptOrRejectBtn = () => {
  const [requestBtnStatus, setRequestBtnStatus] = useState(false);
  const [btnUserSelected, setBtnUserSelected] = useState("");

  const btnAcceptHandler = () => {
    /////logics
    ////
    setRequestBtnStatus(true);
    setBtnUserSelected("accept");
  };
  const btnDeclineHandler = () => {
    /////logics
    ////
    setRequestBtnStatus(true);
    setBtnUserSelected("reject");
  };
  return (
    <div className="mt-4 flex">
      {btnUserSelected == "accept" || btnUserSelected == "" ? (
        <ButtonCst onClick={btnAcceptHandler} className={`${requestBtnStatus ? "bg-green-200" : "bg-green-400"} text-green-900 ml-5`} disabled={requestBtnStatus}>
          {btnUserSelected == "accept" ? "Accepted" : "Accept"}
        </ButtonCst>
      ) : (
        ""
      )}

      {btnUserSelected == "reject" || btnUserSelected == "" ? (
        <ButtonCst onClick={btnDeclineHandler} className="bg-cstColor-400 ml-5" disabled={requestBtnStatus}>
          {btnUserSelected == "reject" ? "Rejected" : "Reject"}
        </ButtonCst>
      ) : (
        ""
      )}
    </div>
  );
};
export default NotificationAcceptOrRejectBtn;
