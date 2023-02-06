import React from 'react'

type StatusProps = {
    status: "loading" | "success" | "error"
}

const Status = (props: StatusProps) => {
    let message;
    if (props.status === "loading") {
        message = "Loading..."
    }
    else if (props.status === "success") {
        message = "Data fetched succesfully"
    }
    else if (props.status === "error") {
        message = "Error fetching data"
    }

    
    return (
        <div>status-{message}</div>
    )
}

export default Status