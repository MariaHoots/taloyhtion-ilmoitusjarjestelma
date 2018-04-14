
export default class Sorter
{
    sortArrayByField(arr, field, dir) {
       
        return arr.sort( function( a, b )
        {
          var index = field;
          var direction = dir;
          // Sort by the 2nd value in each array
          if ( a[index] === b[index] ) return 0;
          return a[index] < b[index] ? -direction : direction;
        });
    }
}