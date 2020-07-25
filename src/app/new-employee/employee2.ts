export interface ApiResponse {
    status : string,
    data : NewEmployee
}

export interface NewEmployee {
    id : number,
    employee_name : string,
    employee_salary : number,
    employee_age : number,
    profile_image: string
}