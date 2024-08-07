import React from "react";
import Moment from "moment";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { useAuthContext } from "../hooks/useAuthContext";

function Updates({ data }) {
  const { user } = useAuthContext();

  return (
    <>
      <div className="updates-container">
        {data.map((up, i) => (
          <div className="update" key={i}>
            <div className="update-header">
              <h4 className="update-title">
                {Moment(up.date).format("MM-DD-YYYY")} | {up.title}
              </h4>
              <div className="icons">
                {/* <Link to={`/#/${up._id}`}>{<BsPencilSquare />}</Link> */}
                {user ? (
                  <Link to={`/updates/delete/${up._id}`}>
                    {<BsFillTrashFill />}
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div
              className="update-information"
              dangerouslySetInnerHTML={{ __html: up.update }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Updates;
