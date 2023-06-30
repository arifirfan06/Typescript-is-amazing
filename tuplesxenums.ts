// Tuples is array with properly ordered data fixed length and data types

const tuplesEx: [number, string] = [12,'zzz'] 

type ResponseAPI = [number, string]

const httpReq:ResponseAPI = [212,"OK!"]
// TS wont complain
httpReq.push(400)

// if you hover this you will see value and the key
enum ProjectStatus{
    PENDING,
    ACCEPTED,
    CANCELED,
    FINISHED,
}

const currentProject = ProjectStatus.PENDING

const isDone = (status: ProjectStatus) => {
    if(status === ProjectStatus.FINISHED) {
     console.log('congrats')
    }
    else{
     console.log('keep trying')
    }
}

// you can also assign value string or number to enums whatever you want

enum OrderStatus{
    PENDING = 0,
    ACCEPTED = "OK!",
    DELIVERED = 4,
    CONFIRMED = 7,
    FINISHED = 9,
    COMPLAINT= 1,
}

let setOrder = OrderStatus.CONFIRMED

isDone(currentProject)