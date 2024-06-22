import { Pipe, PipeTransform } from "@angular/core";
import { Timestamp } from "firebase/firestore";
import moment from "moment";

@Pipe({
    name: 'timestampDefaultString'
})
export class TimestampDefaultStringPipe implements PipeTransform {
    transform(stamp: Timestamp): string {
        const date = moment(stamp.toDate())
        return date.format("DD/MM/YYYY hh:mm:ss")
    }
}