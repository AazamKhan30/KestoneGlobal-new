import Link from "next/link";
import { IoMdClose } from "react-icons/io";
const JobModal = ({ showModal, setShowModal, modalData }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setShowModal(false);
    }
  };
  return (
    <div className="modalOverlay dismiss" onClick={handleClick}>
      <div className="jobModal">
        <IoMdClose className="dismiss modalCloseBtn" onClick={handleClick} />
        {modalData &&
          modalData.map((modal, index) => (
            <div className="modalContent" key={index}>
              <h6 className="modalTitle">{modal.title1}</h6>
              <p className="modalDesc">{modal.desc1}</p>
              <h6 className="modalTitle">{modal.title2}</h6>
              {modal.desc2 && <p className="modalDesc">{modal.desc2}</p>}
              <ul className="modalList">
                {modal.list1 &&
                  modal.list1.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
              </ul>
              <h6 className="modalTitle">{modal.title3}</h6>
              <ul className="modalList">
                {modal.list2 &&
                  modal.list2.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
              </ul>
              {modal.contact && <p className="modalDesc">{modal.contact}</p>}
              {modal.learnMore && (
                <p className="modalDesc">
                  {modal.learnMore}{" "}
                  {modal.learnMoreLink && (
                    <Link href={modal.learnMoreLink} target="_blank">
                      Here
                    </Link>
                  )}
                </p>
              )}

              <Link href="#" className="modalBtn mt-3 dismiss">
                Dismiss
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobModal;
