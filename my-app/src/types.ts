  export const Months : string [] =  [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
  ];

export type ResponseType = {
    id: string,
	month: string,
	camp: string,
	country: string,
	school: string,
	lessons: number
}

export type DataSet = {
    schoolName: string,
    no:number[]
}
