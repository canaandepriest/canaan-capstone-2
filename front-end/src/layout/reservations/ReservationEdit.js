import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getReservation, updateReservation } from "../../utils/api";
import ErrorAlert from "../ErrorAlert";
import ReservationForm from "./ReservationForm";


function ReservationEdit({ date }) {
  const { reservation_id } = useParams();
  const [currentReservation, setCurrentReservation] = useState({});
  const [error, setError] = useState(null);
  const history = useHistory();
  //{reservation_id}
  useEffect(() => {
    getReservation(reservation_id)
    .then((response) => {
      setCurrentReservation({
        ...response,
        people: Number(response.people),
      })
    })
    .catch(setError);
  }, [reservation_id]);

  
  
  const handleChange = ({ target }) => {
    setCurrentReservation({
      ...currentReservation,
      [target.name]: target.value,
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    updateReservation({
      ...currentReservation,
      people: Number(currentReservation.people),
    })
    .then((response) => {
      setCurrentReservation({...response})
      history.push(`/dashboard?date=${currentReservation.reservation_date}`)
    })
    
    .catch(setError)
  }

  return (
    <>
      <h1> Edit Reservation: {reservation_id} </h1>
      <ErrorAlert error={error} />
     <ReservationForm  handleSubmit={handleSubmit} handleChange={handleChange} reservation={currentReservation} history={history}/>
    </>
  )
}

export default ReservationEdit;