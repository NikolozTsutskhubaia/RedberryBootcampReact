
import { useRef, useState } from "react";
import classes from "../Modules/ResumePage.module.css";

const ExperienceComponent = (props) => {
  const positionRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const employerRef = useRef();
  const descriptionRef = useRef();
  const [style , setStyle] = useState(classes.add_experience_none);

  const pageBackHandler = () => {
    props.setters.setCurrentComponent("A");
  };

  const pageNextHandler = () => {
    props.setters.setCurrentComponent("C")
  }

  const changeStyle = () => {
    setStyle(classes.add_experience)
  }

  return (
    <div className={classes.experience_form}>
      <div className={classes.form_header}>
        გამოცდილება
        <span>2/3</span>
      </div>
      <div className={classes.long_field}>
        თანამდებობა:
        <input
          type="text"
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          ref={positionRef}
        />
        <span>მინიმუმ 2 სიმბოლო</span>
      </div>
      <div className={classes.long_field}>
        დამსაქმებელი:
        <input type="text" placeholder="დამსაქმებელი" ref={employerRef} />
        <span>მინიმუმ 2 სიმბოლო</span>
      </div>
      <div className={classes.form_body_1}>
        <div className={classes.short_field}>
          დაწყების რიცხვი:
          <input type="text" placeholder="mm / dd / yyyy" ref={startDateRef} />
        </div>
        <div className={classes.short_field}>
          დასრულების რიცხვი:
          <input type="text" placeholder="mm / dd / yyyy" ref={endDateRef} />
        </div>
      </div>
      <div className={classes.description_field}>
        <label htmlFor="aboutMe">აღწერა:</label>
        <textarea
          name="description"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          className={classes.description_input}
          ref={descriptionRef}
        ></textarea>
      </div>
      <div className={style}>
        <br />
        <div className={classes.long_field}>
          თანამდებობა:
          <input
            type="text"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            ref={positionRef}
          />
          <span>მინიმუმ 2 სიმბოლო</span>
        </div>
        <div className={classes.long_field}>
          დამსაქმებელი:
          <input type="text" placeholder="დამსაქმებელი" ref={employerRef} />
          <span>მინიმუმ 2 სიმბოლო</span>
        </div>
        <div className={classes.form_body_1}>
          <div className={classes.short_field}>
            დაწყების რიცხვი:
            <input type="text" placeholder="mm / dd / yyyy" ref={startDateRef} />
          </div>
          <div className={classes.short_field}>
            დასრულების რიცხვი:
            <input type="text" placeholder="mm / dd / yyyy" ref={endDateRef} />
          </div>
        </div>
        <div className={classes.description_field}>
          <label htmlFor="aboutMe">აღწერა:</label>
          <textarea
            name="description"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            className={classes.description_input}
            ref={descriptionRef}
          ></textarea>
        </div>
      </div>
      <div className={classes.add_experience_btn}>
        <button onClick={changeStyle}>მეტი გამოცდილების დამატება</button>
      </div>
      <div className={classes.page_btns_container}>
        <div className={classes.page_btn} onClick={pageBackHandler}>
          <button>უკან</button>
        </div>
        <div className={classes.page_btn}>
          <button onClick={pageNextHandler}>შემდეგი</button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
