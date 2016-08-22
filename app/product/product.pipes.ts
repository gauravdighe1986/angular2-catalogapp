import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'byYear'
})
export class ByYearPipe implements PipeTransform{
    transform(inputs: any, year: string | number) {
        if (!year)
            return inputs;

        let results:any = [];
        for(let i in inputs) {
            if (inputs[i].year == year) {
                results.push(inputs[i]);
            }
        }

        return results;
    }
}