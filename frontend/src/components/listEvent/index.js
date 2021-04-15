import EventCard from "../EventsCard";

 const Event = ({events}) => (
    <div>
    {events.map(event => (
      <EventCard
      key = {event._id}
      event = {event}
        />
      ))}
  </div>
)

export default Event;