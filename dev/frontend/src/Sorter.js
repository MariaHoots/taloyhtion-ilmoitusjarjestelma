
export default class Sorter
{

    sortArrayByField(arr, field) {
        arr.sort(function(a, b)
        {
            return a[field] - b[field];
        });
    }
}