export default class Activity {
    id: number;
    url: string;
    name: string;
    workflowlevel1: string;
    expected_start_date:  Date;
    expected_end_date:  Date;
    edit_date:  Date;
    

  
    constructor(id: number, url: string, name: string, workflowlevel1: string, expected_start_date:  Date, expected_end_date:  Date, edit_date: Date) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.workflowlevel1 = workflowlevel1;
        this.expected_start_date = expected_start_date;
        this.expected_end_date = expected_end_date;
        this.edit_date = edit_date;
    }
}
  