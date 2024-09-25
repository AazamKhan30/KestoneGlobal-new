"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { jobList } from "./jobData";
import JobModal from "./JobModal";
const JobListing = () => {
  const [tag, setTag] = useState("delhi");
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const handleClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    document.body.classList = showModal ? "overflow-hidden" : "";
  }, [showModal]);
  const [filteredJobs, setfilteredJobs] = useState(
    jobList.filter((job) => {
      return job.tag === "delhi";
    })
  );

  useEffect(() => {
    setfilteredJobs(jobList.filter((job) => job.tag === tag));
  }, [tag]);
  return (
    <section className="jobSection">
      <div className="container">
        <ul className="jobFilterList altFont fs12 lh20 ps-0 mb-0">
          <JobButton
            label="delhi"
            tagActive={tag === "delhi" ? true : false}
            handleSetTag={setTag}
          />
          <JobButton
            label="bangalore"
            tagActive={tag === "bangalore" ? true : false}
            handleSetTag={setTag}
          />
          <JobButton
            label="mumbai"
            tagActive={tag === "mumbai" ? true : false}
            handleSetTag={setTag}
          />
          <JobButton
            label="singapore"
            tagActive={tag === "singapore" ? true : false}
            handleSetTag={setTag}
          />
          <JobButton
            label="remote"
            tagActive={tag === "remote" ? true : false}
            handleSetTag={setTag}
          />
        </ul>
        <div className="row pt-60 pb-60 border-top">
          {filteredJobs &&
            filteredJobs.map((box, index) => (
              <div className="col-md-4 mb-4" key={box.id}>
                <div className="jobBox">
                  {box.title && (
                    <h5 className="jobTitle fs16 lh23 mb-10 altFont d-inline-block fw600">
                      {box.title}
                    </h5>
                  )}

                  <div className="jobText">
                    {box.desc ? (
                      <ul className="mb-25 ps-0">
                        <li>Job Type: {box.type}</li>
                        <li>Requirement: {box.requirement}</li>
                        <li>Experience: {box.experience}</li>
                      </ul>
                    ) : (
                      <p className="mb-0">Watch out this space for details.</p>
                    )}
                  </div>
                  {box.buttons && (
                    <div className="jobButtons">
                      <Link
                        href="#"
                        className="siteBtn dark darkGray btn-very-small"
                      >
                        Apply
                      </Link>

                      <Link
                        href="#"
                        className="siteBtn dark outlined btn-very-small ms-2"
                        onClick={() => {
                          box.modalData && handleClick();
                          setModalData(box.modalData);
                        }}
                      >
                        View Details
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          {showModal && (
            <JobModal
              showModal={showModal}
              setShowModal={setShowModal}
              modalData={modalData}
            />
          )}
        </div>
      </div>
    </section>
  );
};
const JobButton = ({ label, tagActive, handleSetTag }) => {
  return (
    <li>
      <Link
        href="#"
        scroll={false}
        className={`tag ${tagActive ? "active" : ""}`}
        onClick={() => handleSetTag(label)}
      >
        {label.toUpperCase()}
      </Link>
    </li>
  );
};
export default JobListing;
