import React, {Fragment, useContext, useEffect} from "react";
import { Context } from "../store/appContext";

export const Inbox = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.pendingDates();
  
  }, []);
  useEffect(() => {
    actions.getName();
  }, []);
  const storage = localStorage.getItem(store.waiting)
    console.log(store.waiting, "array data")
    return (
        <div>
          {storage}
          {store.waiting.map((item, index) => {
            return (
              <div key={index}>
                {item}
              </div>
            );
          })}
        </div>
      );
}