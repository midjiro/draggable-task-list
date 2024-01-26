import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import { TasksDispatchContext } from "components/context/TasksContext";
import { ACTIONS } from "constants/actions";

export default function Filter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const filterRef = useRef();
  const dispatch = useContext(TasksDispatchContext);

  const collapse = () => {
    setIsExpanded(false);
  };

  const switchVisibility = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  // useCallback prevent function recreation between re-renders
  const handleOutsideClick = useCallback(
    (e) => {
      if (!filterRef.current.contains(e.target)) collapse();
    },
    [filterRef]
  );

  const onChange = (newFilterValue) =>
    dispatch({
      type: ACTIONS.UPDATE_FILTER,
      payload: { newFilterValue },
    });

  const handleOptionChange = (e) => {
    const newSelectedOption = e.target;
    const optionList = Array.from(newSelectedOption.parentElement.children);

    optionList.forEach((option) => {
      option.classList.remove("filter__option--selected");
    });

    newSelectedOption.classList.add("filter__option--selected");

    onChange(newSelectedOption.textContent);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="filter" ref={filterRef}>
      <button
        className="filter__btn"
        aria-expanded={isExpanded}
        aria-controls="filter"
        onClick={switchVisibility}
      >
        <i className="fa-solid fa-filter"></i>
        <span className="sr-only">Filter tasks by status</span>
      </button>
      <ul
        className="filter__option-list"
        id="filter"
        onClick={handleOptionChange}
      >
        <li className="filter__option filter__option--selected">All</li>
        <li className="filter__option ">To do</li>
        <li className="filter__option">Completed</li>
      </ul>
    </div>
  );
}
