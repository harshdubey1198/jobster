import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { JobsContainer, SearchContainer } from "../../components";
import { getAllJobs } from "../../features/allJobs/AllJobsSlice";

const AllJobs = () => {
  const dispatch = useDispatch();
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
