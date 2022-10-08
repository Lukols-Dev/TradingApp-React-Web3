import React, { ChangeEvent, FC, useState } from "react";
import { Outlet } from "react-router-dom";

import { Popup } from "../components/common/popups/popup.common";

import { doc, getDoc } from "firebase/firestore";
import { cloudFirestore } from "../config/firebase";

export const FormRoute: FC = () => {
  const [access, setAccess] = useState<boolean>(false); //TODO: change state
  const [value, setValue] = useState<string>("");

  const checkAccess = async () => {
    try {
      const docRef = doc(cloudFirestore, "PRICING", "xF3cnffMw2Bwhlqv66xf");
      const response = await getDoc(docRef);

      if (value === response.data()?.password) {
        setAccess(true);
      } else {
        console.log("Bad password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      checkAccess();
      e.preventDefault();
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return !access ? (
    <Popup
      value={value}
      onChange={onChange}
      getAccess={checkAccess}
      keyDown={handleKeyDown}
    ></Popup>
  ) : (
    <Outlet />
  );
};
