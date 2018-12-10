import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name: 'usersFilter'})
export class UserFilterPipe implements PipeTransform {
    transform(value,args){
        console.log("value"+value);
        console.log("args"+args);
        let filter = args?args.toLocaleLowerCase():null;
        console.log("filter" +filter);
        return filter ? value.filter((employee)=>
            employee.name.toLocaleLowerCase().startsWith(filter)!=false):value;
    }
}