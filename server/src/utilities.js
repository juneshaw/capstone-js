module.exports =
{

dayDiff: function (firstDate, secondDate) {
  // One day in milliseconds
  var one_day=1000*60*60*24

  // Calculate the difference in the dates in days
  var diff = Math.ceil((secondDate.getTime()-firstDate.getTime())/(one_day));
    return diff;
  }
}
