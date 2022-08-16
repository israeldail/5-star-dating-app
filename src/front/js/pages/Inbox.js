import React, {Fragment, useContext, useEffect} from "react";
import { Context } from "../store/appContext";

export const Inbox = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.pendingDates();
  }, []);

    return (
        <div>
          {store.waiting.map((item, index) => {
            return (
              <Fragment>
                {item}
              </Fragment>
            );
          })}
        </div>
      );
}