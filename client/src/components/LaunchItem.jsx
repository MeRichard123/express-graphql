import {format} from "date-fns"
import {Link} from 'react-router-dom'

const LaunchItem = ({launch: {flight_number, mission_name, launch_date_local, launch_success}}) => {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission:
                        <span className={launch_success ? "mx-2 text-success" : "mx-2 text-danger"}>
                            {mission_name}
                        </span>
                    </h4>
                    <p>Date/Time: {format(new Date(launch_date_local), "HH:mm - dd/MM/yyyy")}</p>
                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${flight_number}`}>
                        <button className="btn btn-secondary">Launch Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LaunchItem
