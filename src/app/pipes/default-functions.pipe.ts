import { Pipe, PipeTransform } from "@angular/core";
import { timestampToString } from '../models/utils';
import { Timestamp } from "firebase/firestore";

@Pipe({
    name: 'timestampDefaultString'
})
export class TimestampDefaultStringPipe implements PipeTransform {
    transform(stamp: Timestamp): string {
        return timestampToString(stamp);
    }
}